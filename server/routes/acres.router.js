// const express = require("express");
// const pool = require("../modules/pool");
// const router = express.Router();
// const axios = require('axios');


// router.get('/', (req, res) => {

//     const lakesArray = ['Bde Maka Ska', 'Cedar Lake', 'Lake Harriet', 'Lake Hiawatha', 'Lake Nokomis', 'Theodore Wirth Park'];
//     // const lakesArray = ['Bde%20Maka%20Ska', 'Cedar%20Lake', 'Lake%20Harriet', 'Lake%20Hiawatha', 'Lake%20Nokomis', 'Theodore%20Wirth%20Park'];
//     const results = [];

//     for (let lake of lakesArray){
//         // og https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where=NAME%20%3D%20'LAKE%20NOKOMIS'&outFields=ACRES,NAME&outSR=4326&f=json

//         // const query = `https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where=NAME%20%3D%20${lake}${req.body}`
//         // const encode = encodeURI(query)
//         // const query = `https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where=NAME%20%3D%20${lake}&outFields=ACRES,NAME&outSR=4326&f=json`

//         //one that doesn't have a specific lake
//         //og https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where=1%3D1&outFields=ACRES,NAME&outSR=4326&f=json

//         const queryText = `https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where=${lake}&outFields=ACRES,NAME&outSR=4326&f=json`
//         const encode = encodeURI(queryText)

//         axios.get(queryText)
//         .then((result) => {
//             console.log(result.data.features)
//             results.push(result.data.features)
//             if(results.length === lakesArray.length){
//         res.send(results);
//             }
//         }).catch((err) => {
//             console.log('error in GET acres', err)
//         });
//     }
// })

// router.get('/', (req, res) => {


//     const lakesArray = ['Bde Maka Ska', 'Cedar Lake', 'Lake Harriet', 'Lake Hiawatha', 'Lake Nokomis', 'Theodore Wirth Park'];
//     // const lakesArray = ['Bde%20Maka%20Ska', 'Cedar%20Lake', 'Lake%20Harriet', 'Lake%20Hiawatha', 'Lake%20Nokomis', 'Theodore%20Wirth%20Park'];
//     const results = [];

//     const lakes = lakesArray.join("','");
//     const queryText = `https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where='${lakes}'&outFields=ACRES,NAME&outSR=4326&f=json`
//     // const encode = encodeURI(queryText)

//     axios.get(queryText)
//     .then((result) => {
//         console.log(result.data.features)
//         results.push(result.data.features)
//         // if(results.length === lakesArray.length){
//     res.send(results);
//         // }
//     }).catch((err) => {
//         console.log('error in GET acres', err)
//     });
// })

// router.get('/', (req, res) => {
//     console.log('in GET query', req.params.id)
//     console.log('in GET query', req.params.name)

//     const query = `https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where=NAME%20%3D%20'${req.params}'&outFields=ACRES,NAME&outSR=4326&f=json`

//     axios.get(query)
//     .then((result) => {
//         const dataToSend = result.data.features.map((item) => {
//             return {
//                 name: item.name,
//                 acres: item.acres
//             };
//         });
//         res.send(dataToSend);
//     }).catch((err) => {
//         if (err.response) {
//             console.error('acres api err', err.response.data);
//           } else {
//             console.log('acres api err', err);
//           }
//           res.sendStatus(500);
//     })
// })



///*********not working #1***** */
// router.get('/', (req, res) => {

//     const lakesArray = ['Bde Maka Ska', 'Cedar Lake', 'Lake Harriet', 'Lake Hiawatha', 'Lake Nokomis', 'Theodore Wirth Park'];
//     // const lakesArray = ['Bde%20Maka%20Ska', 'Cedar%20Lake', 'Lake%20Harriet', 'Lake%20Hiawatha', 'Lake%20Nokomis', 'Theodore%20Wirth%20Park'];
//     const results = [];


//     for(let lake of lakesArray){

//     axios.get(`https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where=NAME%20%3D%20'${lake}'&outFields=NAME,ACRES&outSR=4326&f=json`)

//     .then((result) => {
//         console.log('inside .then acres GET', result.data.features[0],attributes)
//         const lakeInfo = {
//             NAME: result.data.features[0].attributes.NAME,
//             ACRES: result.data.features[0].attributes.ACRES
//         }
//         results.push(lakeInfo)
//         console.log('results Array', results) 
//         if(results.length === lakesArray){

//             const sqlText = `UPDATE "lakes_to_beach"
//             SET "acres" = '$1'
//             WHERE "lake_name" = '$2';`

//             pool.query(sqlText, [req.body.acres, req.body.lake_name])
//             .then((result) => {
//                 res.sendStatus(200);
//             }).catch((err) => {
//                 console.log('error in GET', err)
//             })
//         }
//         })}
//     })


//////*********this might be the one to look at?************ *////////////
// router.get('/', (req, res) => {

// const lakesArray = ['Bde Maka Ska', 'Cedar Lake', 'Lake Harriet', 'Lake Hiawatha', 'Lake Nokomis', 'Theodore Wirth Park'];
// // const lakesArray = ['Bde%20Maka%20Ska', 'Cedar%20Lake', 'Lake%20Harriet', 'Lake%20Hiawatha', 'Lake%20Nokomis', 'Theodore%20Wirth%20Park'];
// const results = [];


// for(let lake of lakesArray){
// //axios here
// axios.get(`https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where=NAME%20%3D%20'${lake}'&outFields=NAME,ACRES&outSR=4326&f=json`)

// .then((result) => {
//     console.log('inside .then acres GET', result.data.features[0].attributes)
//     const lakeInfo = {
//         NAME: result.data.features[0].attributes.NAME,
//         ACRES: result.data.features[0].attributes.ACRES
//     }
//     results.push(lakeInfo)
//     console.log('results Array', results) 

//         if(results.length === lakesArray.length){
//                     res.send(results);
//                         }
//                     }).catch((err) => {
//                         console.log('error in GET acres', err)
//                         res.sendStatus(500)
//                     })  

//         const sqlText = `UPDATE "lakes_to_beach"
//         SET "acres" = '$1'
//         WHERE "lake_name" = '$2';`

//         pool.query(sqlText, [req.body.acres, req.body.lake_name])
//         .then((result) => {
//             res.sendStatus(200);
//         }).catch ((err) => {
//             console.log('error in GET', err);
//         })

//     }
// })



//___________________________________________lastest one_________________________
// router.get('/', (req, res) => {

//     const lakesArray = ['Bde Maka Ska', 'Cedar Lake', 'Lake Harriet', 'Lake Hiawatha', 'Lake Nokomis', 'Theodore Wirth Park'];
//     // const lakesArray = ['Bde%20Maka%20Ska', 'Cedar%20Lake', 'Lake%20Harriet', 'Lake%20Hiawatha', 'Lake%20Nokomis', 'Theodore%20Wirth%20Park'];
//     const results = [];


//     for (let lake of lakesArray) {
//         //axios here
//         axios.get(`https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where=NAME%20%3D%20'${lake}'&outFields=NAME,ACRES&outSR=4326&f=json`)

//             .then((result) => {
//                 console.log('inside .then acres GET', result.data.features[0].attributes)
//                 const lakeInfo = {
//                     NAME: result.data.features[0].attributes.NAME,
//                     ACRES: result.data.features[0].attributes.ACRES
//                 }
//                 results.push(lakeInfo)
//                 console.log('results Array', results)

//                 // if (results.length === lakesArray) {
//                     sqlText = `UPDATE "lakes_to_beach"
//                         SET "acres" = '$1'
//                         WHERE "lake_name" = '$2';`;
//                     console.log('did i get here?')
//                     pool.query(sqlText, [req.body.acres, req.body.lake_name])
//                         .then((result) => {
//                             console.log('result in .then', result)
//                             res.sendStatus(200);
//                         })
                
//             }).catch((err) => {
//                 res.sendStatus(500)
//             })
//     }
// })




///*****************this just GET Lake Nokomis***************** */
// router.get('/', (req, res) => {
//     //axios here
//     axios.get(`https://services.arcgis.com/afSMGVsC7QlRK1kZ/arcgis/rest/services/Water/FeatureServer/0/query?where=NAME%20%3D%20'LAKE%20NOKOMIS'&outFields=NAME,ACRES&outSR=4326&f=json`)
//     .then((response) => {
//        res.send(response.data.features[0].attributes); // Replace this
//     }).catch((err) => {
//         res.sendStatus(500)
//     })  
//     })

// module.exports = router;