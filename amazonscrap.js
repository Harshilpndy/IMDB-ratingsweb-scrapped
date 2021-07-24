const request = require('request');
//request variable will acquire all the properties of the request package
const cheerio = require('cheerio');


request('https://www.amazon.in/OnePlus-Nord-Charcoal-128GB-Storage/dp/B09576CYNP/ref=sr_1_3?dchild=1&keywords=oneplus%2Bnord&qid=1625469849&sr=8-3&th=1', callback);

function callback(error, response, html) {


    if (!error) {
        const manipulationTool = cheerio.load(html);
        let comment = manipulationTool("#customer_review-R1KCVOUGOXK8DP").text();
        console.log(comment);


    }



}