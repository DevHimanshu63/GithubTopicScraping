const Cheerio  = require("cheerio");
const request = require("request");
const issues=require("./issues")

function topic(fullLink,tpName){
    topicName = tpName
    // console.log(fullLink);
    //https://github.com/topics/3d    i get
    request(fullLink,cb)
}

function cb(err,res,html){
    if(err){
        console.log(err);
    }else{
        TopicHtml(html);
    }
}

function TopicHtml(html){
    let selecTool=Cheerio.load(html);
    let topicRepo=selecTool('[data-ga-click="Explore, go to repository, location:explore feed"][class="text-bold wb-break-word"]')

    // here all the repositories of topics
    // console.log(topicRepo.text());

    for(let i=0 ;i<8;i=i++){
        // if(i==17){
        //     break;
        // }
        // console.log(selecTool(topicRepo[i]).text());
        let AlltopicRepo=selecTool(topicRepo[i]).attr("href")
        // console.log(AlltopicRepo);
       let EightrepoLink="https://github.com"+AlltopicRepo;
    //    console.log(EightrepoLink);
        issues.issuesHere(EightrepoLink)
        break;

    }

}

module.exports={
    'topic':topic,
}