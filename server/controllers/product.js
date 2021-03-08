'use strict';

const logic = require('../logic'); //encapsulate all business logic.
/**
 * 
 * @param req       - JSON data containing a body.
 * @param res       - Callback containing error and query response data
 * @param rawData json containing data from file base on matching id.
 */
const handleProductId = (req, res, rawData) => {
    const id = req.params.id;
    let records = logic.fetchDataFromFile(id, rawData);
    res.send(records);
}

module.exports = {
    handleProductId: handleProductId
};

