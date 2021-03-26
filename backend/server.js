const express=require("express")
const connectDB=require("./config/db")
const cors=require("cors")
const userRoutes=require("./routes/user")
const webinarRoutes=require("./routes/webinar")
const app=express()
app.use(express.json());
app.use(cors())

connectDB()

app.use("/api",userRoutes)
app.use("/api",webinarRoutes)

app.listen(5000,()=>{
    console.log("The server is up and running")
})