const Cheerio  = require("cheerio");
const request = require("request");
const path=require("path")


function topfiveproblem(topissues){
   // console.log(topissues);    https://github.com/mrdoob/three.js/issues   i get this link
    request(topissues,cb)
}

function cb(err,res,html){
    if(err){
        console.log(err);
    }else{
        topFIve(html);
    }
}


function topFIve(html){

    let selecTool=Cheerio.load(html);
    // console.log(selecTool.html());
    let topproblem=selecTool(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title")
    // console.log(topproblem.length);

   for(let i=0 ; i<topproblem.length ; i++){
       console.log(selecTool(topproblem[i]).text());
   }
}





module.exports={
    topfiveproblem:topfiveproblem,
}