const request =require("request")
const cheerio =require("cheerio")
const path=require("path")
const fs=require("fs")
const Alltopic=require("./topics")

let url="https://github.com/topics";

request(url,cb);

function cb(err,res,html){
    if(err){
        console.log(err);
    }else{
        handleHtml(html);
    }
}



// console.log(__dirname);
let Topicpath=path.join(__dirname,"TopicWiseProblem")
if(!fs.existsSync(Topicpath)){
    fs.mkdirSync(Topicpath)
}else{
    console.log("TopicWiseProblem is already exist.");
}
// console.log(Topicpath);
    

function handleHtml(html){
    let selecTool=cheerio.load(html)
    let topic=selecTool(".py-4.border-bottom.d-flex.flex-justify-between>a")
    // console.log(topic.length);
    for(let i=0 ;i<4 ;i++){

        // console.log("topic name"+"```````````````````````````````````");
        // console.log(selecTool(topic[i]).text());
        let hrefSelector=selecTool(topic[i]).attr("href")
        // console.log(hrefSelector);
        let fullLink="https://github.com"+hrefSelector;
        // console.log(fullLink);
        Alltopic.topic(fullLink);
        // break;                
    }                                               


}