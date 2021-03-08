'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const fs = require("fs");
const compression = require('compression');
const product = require("./controllers/product");
const simpleCaching = require("./caching");

//enable Cross-origin resource sharing
app.use(cors());
// //compresse the response file to smaller size
app.use(compression());
/**
 * we are going to read file from here, so that the request handlers does not need
 * to load the files everytime. However, the downside to that is, it is
 * permanently loaded.
 */
const rawData = fs.readFileSync('products.json');
/**
 * RESTful routes for URLS
 * GET      - Retrieve each data information based on the matching id.
 *
 */
app.get("/product/:id", simpleCaching.midWare, (req, res)=> {product.handleProductId(req, res, rawData);})


const port = 3000;


const token = "loaderio-420403f87286d79fc7da3705da0b85e0";
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}${token}`)
})
