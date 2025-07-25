const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema(
    {
        shortId : 
        {
            type     : String,
            required : true,
            unique   : true,
        },
        redirectURL  : 
        {
            type     : String,
            required : true,
       },
        VistHist     : [{timestamp : { type : Number}}],
    },
    {
        timestamps:true    
    },
);

const URL = mongoose.model('url', UrlSchema);

module.exports = URL