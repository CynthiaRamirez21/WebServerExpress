const express = require ("express");
const path = require ("path");

const app = express();

app.get("/" , (req, res) => {
   // res.send("Hello World!");
   res.sendFile(path.join (__dirname + "/index.html"));

});

app.get("/datos" , (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify( 
        [
        {
            "name": "Capital Federal",
            "hectares": "6,7",
            "habitant": "10.000",
        },
        {
        "name": "Nueva York",
        "hectares": "13,6",
        "habitant": "10.000",
        },
        {
        "name": "Bruselas",
        "hectares": "30",
        "habitant": "10.000",
        },
        {
        "name": "México",
        "hectares": "6 ",
        "habitant": "10.000",
        },
        {
        "name": "Santiago",
        "hectares": "6 ",
        "habitant": "10.000",
        },
        {
        "name": "Lima",
        "hectares": " 4,2 ",
        "habitant": "10.000",
        },
        {
        "name": "Rosario",
        "hectares": "10,4",
        "habitant": "10.000",
        }]
    , null, 3));
});

app.listen (3000, ()=> {
    console.log("server listening on port", 3000);
}); 