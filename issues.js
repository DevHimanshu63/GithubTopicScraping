const Cheerio  = require("cheerio");
const request = require("request");
const topproblempage=require("./TopfiveIssues")

function issuestopic(EightrepoLink){
    // here i get this type of link :- https://github.com/mrdoob/three.js
    // console.log(EightrepoLink);
    request(EightrepoLink,cb)
}

function cb(err,res,html){
    if(err){
        console.log(err);
    }else{
        issuesHtml(html);
    }
}

function issuesHtml(html){
    let selecTool=Cheerio.load(html)
    let issuesbtn=selecTool("#issues-tab")
    // console.log(issuesbtn.text());
    let issueslink=selecTool(issuesbtn).attr("href")
    // console.log(issuesbtn);
    ///mrdoob/three.js/issues i get here
     let topissues="https://github.com"+issueslink;
      
    //https://github.com/mrdoob/three.js/issues this link i am passing there in function
     topproblempage.topfiveproblem(topissues)
}




module.exports={
    issuesHere:issuestopic,
}