const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get('/', rejectUnauthenticated, (req, res) => {

    sqlText= `SELECT 
distinct 
	fav_lakes.user_id,
	fav_lakes.lakes_id,
	lakes.name, 
	lakes.is_favorite,
	"user".onboarded,
	"user".access_level,
	"user".username,
	"user".password,
	water_data.water_quality_status,
	water_data.e_coli_reading,
	water_data.temperature,
	water_data.microcystin_reading
 FROM "fav_lakes"
    JOIN "lakes" ON fav_lakes.lakes_id = lakes.id
    JOIN "user" on "user".id = fav_lakes.user_id
    JOIN "water_data" ON water_data.lake_id_wd = lakes.id
    WHERE "onboarded" = true AND "user".id = $1;`
   
    // sqlText = `SELECT * FROM "fav_lakes"
    // JOIN "lakes" ON fav_lakes.lakes_id = lakes.id
    // JOIN "user" on "user".id = fav_lakes.user_id
    // JOIN "water_data" ON water_data.lake_id_wd = lakes.id
    // WHERE "onboarded" = true`

    pool.query(sqlText, [req.user.id])
    .then((result) => {
        // console.log('result.rows in GET fav', result.rows)
        res.send(result.rows)
    }).catch((err) => {
        console.log('error in fav route server', err)
        res.sendStatus(500);
    })
})

///for the delete button in favs page
router.delete('/:id', rejectUnauthenticated, (req, res) => {
    console.log('inside DELETE', req.params)
    let sqlText =`DELETE FROM "fav_lakes" WHERE lakes_id= $1;`;
    let sqlReq = [req.params.id];

    pool.query(sqlText, sqlReq)
    console.log('req', req.params.id)
    .then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('eror in DELETE router', err)
        res.sendStatus(500);
    })
})

module.exports = router;