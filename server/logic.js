'use strict';

const constants = require('./constants');

module.exports = {
    /**
     * @description Read, and parse data from file. 
     * @requires id     - Key with string value correlating to a file entry
     * @param rawData   - Json data containing data from file. 
     * @returns product data base on the matching id , and the statuscode.
     */
    fetchDataFromFile(id, rawData){
        let product = {};
        try{
            //parse it to javascript object notation
            product = JSON.parse(rawData);
            const productRecordExist = product['records'];
            if(productRecordExist){
                let record = 0;
                for(record; record < productRecordExist.length; record ++){
                    const productId = productRecordExist[record].id;
                    if (id === productId){
                        //return 
                        return {
                            //statuscode 200
                            statusCode: constants.SUCCESS,
                            productData: productRecordExist[record]
                        }
                        
                    }
           
                }
            }
        }catch(err){
            // If the type is not what you want, then just throw the error again.
            if(err.code !== 'ENOENT') throw err;
            //handle the file not found.
            console.log(err);
        }
        //statuscode 404
        return {
          statusCode: constants.FAILURE 
        }
    }

   
}

