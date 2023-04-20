const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get('/', rejectUnauthenticated, (req, res) => {
    // console.log('in server route')
    sqlText = `SELECT * FROM lakes
    WHERE "is_favorite" = true`

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