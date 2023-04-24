const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlText = `SELECT notes.id, notes.lake_id_fk, notes.user_id, notes.note, notes.date, lakes."name"  
    FROM notes
    JOIN lakes ON notes.lake_id_fk = lakes.id
    JOIN "user" ON notes.user_id = "user".id
    ORDER BY date DESC;`;

    pool.query(sqlText)
    .then((result) => {
        res.send(result.rows)
        // console.log('result.rows in GET notes route', result.rows)
    }).catch((err) => {
        console.log('in GET notes router', err)
        res.sendStatus(500);
    })
})

router.post('/', rejectUnauthenticated, (req, res) => {
    console.log('req.body in POST', req.body)

    const sqlText = `INSERT INTO "notes" ("user_id", "lake_id_fk", "date", "note")
                    VALUES ($1, $2, $3, $4)`;
    const sqlReq = [req.user.id, req.body.lake_id_fk, req.body.date, req.body.notes]

    pool.query(sqlText, sqlReq)
    .then((result) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log('error inside POST route', err)
        res.sendStatus(500);
    })
})

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // console.log('inside DELETE', req.params)
    let sqlText =`DELETE FROM "notes" WHERE notes.id= $1`;
    let sqlReq = [req.params.id];

    pool.query(sqlText, sqlReq)
    .then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('eror in DELETE router', err)
        res.sendStatus(500);
    })
})

module.exports = router;