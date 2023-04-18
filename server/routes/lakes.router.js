const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

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

router.get('/:id', (req, res) => {
    console.log('in server route', req.params.id)
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

//this might be totally wrong
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('in server routes PUT: req.body', req.body);

    const sqlText = `UPDATE "user"
    SET favorite_1_lake_id = $1
    WHERE "user".id = $2`;
    
    const sqlReq = [req.body.favorite_1_lake_id, req.user.id]
    console.log('req.user.id', req.user.id)
    console.log('sqlReq', sqlReq)

    pool.query(sqlText, sqlReq)
    .then((result) => {
        res.sendStatus(200)
    }).catch((err) => {
        console.log('erroe in PUT route', err)
        res.sendStatus(500)
    })
})

module.exports = router;