const Webinar=require("../models/webinar")
 

const getWebinar=(req,res)=>{
    Webinar.find()
    .then((webinar)=>res.json(webinar))
    .catch((err)=>res.status(404).json("Error"))
}

const addWebinar=(req,res)=>{
    if (!req.body.title || !req.body.description || !req.body.date || !req.body.time || !req.body.host_name || !req.body.image || !req.body.cost) {
        return res.status(404).json({ message: "Please Fill all the fields" });
    }
    const {title,description,date,time,host_name,image,cost}=req.body;
    const newWebinar=new Webinar({title,description,date,time,host_name,image,cost})

    newWebinar
    .save()
    .then(()=>res.json("Webinar Added Successfully"))
    .catch((err)=>res.status(404).json("Error" + err))
}

const deleteWebinar=(req,res)=>{
    Webinar.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Webinar Deleted Successfully"))
    .catch((err)=>res.status(404).json("Error"+err))
}

const editWebinar=(req,res)=>{
    
    if (!req.body.title || !req.body.description || !req.body.date || !req.body.time || !req.body.host_name || !req.body.image || !req.body.cost) {
        return res.status(404).json({ message: "Please Fill all the fields" });
    }

    Webinar.findById(req.params.id)
    .then((webinar)=>{
        webinar.title=req.body.title,
        webinar.description=req.body.description,
        webinar.date=req.body.date,
        webinar.time=req.body.time,
        webinar.host_name=req.body.host_name
        webinar.image=req.body.image
        webinar.cost=req.body.cost

        webinar
       .save()
       .then(()=>res.json("Webinar Updated Successfully"))
       .catch((err)=>res.status(404).json("Error" + err))
    })
     .catch((err)=>res.status(404).json("Error"+err))
}

 
module.exports={getWebinar,addWebinar,deleteWebinar,editWebinar}