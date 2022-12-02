const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://elias:elias@teste.laldopk.mongodb.net/?retryWrites=true&w=majority";


export default function handler(req, res) {
  
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(async (err) => {
      console.log("cu");
      const collection = client.db("posts").collection("posts-list");
      
      const finded = await collection.find().toArray()
      console.log(finded);

    client.close()
    res.status(200).json({ finded })
  })
  
}
