const mongoose=require("mongoose")
const webinar=require("./data/db")
const Webinar=require("./models/webinar")
const connectDB=require("./config/db")

connectDB();

const importData=async()=>{
    try {
        await Webinar.deleteMany();
        await Webinar.insertMany(webinar)
        console.log("Data imported")
        process.exit();
    }
    catch(err){
        console.log(`Error : ${err}`)
        process.exit(1)
    }
}

const destroyData=async()=>{
    try {
        await Webinar.deleteMany();
        process.exit();
    }
    catch(err){
        console.log(`Error : ${err}`)
        process.exit(1)
    }
}

if(process.argv[2]=="-d"){
    destroyData()
}
else{
    importData()
}