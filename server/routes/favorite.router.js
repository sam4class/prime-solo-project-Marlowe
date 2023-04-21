const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get('/', rejectUnauthenticated, (req, res) => {
   
    sqlText = `SELECT * FROM "fav_lakes"
    JOIN "lakes" ON fav_lakes.lakes_id = lakes.id
    JOIN "user" on "user".id = fav_lakes.user_id
    JOIN "water_data" ON water_data.lake_id_wd = lakes.id
    WHERE "onboarded" = true`

    pool.query(sqlText)
    .then((result) => {
        // console.log('result.rows in GET fav', result.rows)
        res.send(result.rows)
    }).catch((err) => {
        console.log('error in fav route server', err)
        res.sendStatus(500);
    })
})

module.exports = router;