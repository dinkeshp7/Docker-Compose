import { PrismaClient } from "@prisma/client/extension";
import express from "express"

const prismaClient = new PrismaClient();


const app =express();
app.use(express.json());

app.get("/",async (req,res)=>{

    try{
        const user = await prismaClient.User.findMany();
        res.json({user})
    console.log(user);
    } catch (e){
        console.log(e)
        res.status(200).json({message:"error",error:e})
    }
})

app.post("/",async (req,res)=>{
   try{ const user = await prismaClient.User.create({
        data : {
            username:(Math.random()*100).toString(),password:(Math.random()*100).toString()
        }
    })
    res.json({message : "user added"})

}catch (e) {
        console.log(e);
        res.json({message:"error"})
    }
})

app.listen(3000,()=>{
    console.log("connected")
})