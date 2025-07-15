const  { nanoid } = require("nanoid");
const URL         = require('../Models/url');


async function GnrtNewShortUrl(req, res)  
{   
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "Url is Required" });

    const sShortID = nanoid(8);
    await URL.create({
        shortId      : sShortID,
        redirectURL  : body.url,
        VistHist     : [],
    });
    return res.json({id : sShortID});
}

module.exports = {
    GnrtNewShortUrl,
}