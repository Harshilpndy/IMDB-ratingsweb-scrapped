
 const request = require('request');

//request variable will acquire all the properties of the request package
const cheerio = require('cheerio');

request('https://www.imdb.com/chart/toptv/', callback);

function callback(error, response, html) {


    if (!error) {
        //we created a manipulationtool where cheerio helps us in scrapping the data from the css selector given 
        const manipulationTool = cheerio.load(html);
        let table = manipulationTool(".lister-list");

        // loop written for extracting the tr's which are basically the rows of the table being selected 
        for (let i = 0; i < table.length; i++) {

            let tbleRws = manipulationTool(table[i]).find("tr");
            // for loop written for extracting the tds the column of the trs   
            for (let j = 0; j < tbleRws.length; j++) {

                let rowsColm = manipulationTool(tbleRws[j]).find("td");
                //let attrhf = manipulationTool(rowsColm[j]).find(".titleColumn a");
                console.log(manipulationTool(rowsColm[1]).text().trim());
                //trim used for the clearing the extra space

                console.log("rating",manipulationTool(rowsColm[2]).text().trim());
                //console.log(manipulationTool(attrhf[1]).attr("href"));
                console.log("- - - - - - ");
                //fs.writeFileSync("data.json", JSON.stringify(data));
            }
            /* for(let i = 0; i<rowsColm.length; i++){
                console.log(manipulationTool(rowsColm[i]).text().trim()); */

            //}
        }
    }
}       


  