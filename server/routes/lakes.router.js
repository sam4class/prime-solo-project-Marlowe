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

module.exports = router;