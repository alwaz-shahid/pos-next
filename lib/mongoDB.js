// mongodb+srv://picante:<password>@cluster0.5dunr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongodb+srv://picante:picante.123@cluster0.5dunr.mongodb.net/?retryWrites=true&w=majority

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db("sightings");
  return { db, client };
}

export { connect };