import { MongoClient } from "mongodb";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://picante:picante123@Cluster0.pqdli.mongodb.net/picanter?etryWrites=true&w=majority"
    );
    const db = client.db();
    const myCollection = db.collection("products");
    const result = await myCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Data inserted successfully!" });
  }
}
