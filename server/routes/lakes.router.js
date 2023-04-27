const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

//GET for lakes table
router.get("/", (req, res) => {
    const sqlText = `SELECT * FROM "lakes"
    JOIN "water_data" ON lakes.id = water_data.lake_id_wd
    ORDER BY "name" ASC;`;
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
        // console.log('in GET router', result.rows);
    }).catch((err) => {
        console.log('error in GET router', err);
        res.sendStatus(500);
    })
});

//GET for water data by id
router.get('/:id', (req, res) => {
    // console.log('in server route', req.params.id)
    const sqlText = `SELECT * FROM "lakes"
    JOIN "water_data" ON lakes.id = water_data.lake_id_wd
    WHERE "lakes"."id" = ${req.params.id}`
    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows);
    }).catch ((err) => {
        console.log('error in GET for waterData id', err)
        res.sendStatus(500);
    })
})

router.post('/', rejectUnauthenticated, (req, res) => {
    // console.log('inside POST route', req.user.id, req.body.lakes_id)
    const sqlText =`INSERT INTO "fav_lakes" ("user_id" , "lakes_id")
    VALUES ($1, $2);`;

    pool.query(sqlText, [req.user.id, req.body.lakes_id])
    .then((result) => {
        // console.log('inside POST lakes router', req.user.id, req.body.lakes_id)
        res.sendStatus(200)
    }).catch((error) => {
        res.sendStatus(500)
    })
})



module.exports = router;