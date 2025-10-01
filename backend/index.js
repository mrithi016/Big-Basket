const express=require('express')
const cors=require('cors')

const port=5500
const app=express()

app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion ,ObjectId} = require('mongodb');
const uri = "mongodb+srv://Mrithika:mrithi016@cluster0.ezc88a1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();






    const pop=client.db("shop").collection("popcorn")

    app.post("/update",async(req,res)=>{
      const data=req.body;
      const result=await pop.insertOne(data);
      res.send(result);

    })

    app.get("/getdata",async(req,res)=>{
      const sdata=pop.find()
      const result=await sdata.toArray();
      res.send(result);
    })
    app.get("/getdata/:id",async(req,res)=>{
      const para=req.params.id
      const ob={_id:new ObjectId(para)}
      const sdata=await pop.findOne(ob)
      res.send(sdata);
    })
    app.delete("/delepop/:id",async(req,res)=>{
   const para=req.params.id
   const ob={_id:new ObjectId(para)}
   const sdata=await pop.deleteOne(ob)
   res.send(sdata)

    })
     app.patch("/editpop/:id",async(req,res)=>{
     const id=req.params.id;
    const obj={_id:new ObjectId(id)};
    const data=req.body;
    const editdata={$set:{
      ...data
    }}
    const options={upsert:true}
    const result=await pop.updateOne(obj,editdata,options)
    res.send(result)

  })


      const items=client.db("mrithi").collection("test")

      app.post("/upload",async(req,res)=>{
      const data=req.body;
      const result=await items.insertOne(data);
      res.send(result);

    })

    app.get("/getdatas",async(req,res)=>{
      const sdata=items.find()
      const result=await sdata.toArray();
      res.send(result);
    })
    app.get("/getdate/:id",async(req,res)=>{
      const para=req.params.id
      const ob={_id:new ObjectId(para)}
      const sdata=await items.findOne(ob)
      res.send(sdata);
    })
    app.delete("/deleitems/:id",async(req,res)=>{
   const para=req.params.id
   const ob={_id:new ObjectId(para)}
   const sdata=await items.deleteOne(ob)
   res.send(sdata)

    })

    app.patch("/edititems/:id",async(req,res)=>{
     const id=req.params.id;
    const obj={_id:new ObjectId(id)};
    const data=req.body;
    const editdata={$set:{
      ...data
    }}
    const options={upsert:true}
    const result=await items.updateOne(obj,editdata,options)
    res.send(result)

  })










    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port,()=>{
    console.log("listening to port",port)

})



