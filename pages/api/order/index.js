import { connect } from "../../../lib/mongoDB";

export default async function (req, res) {
  try {
    const { db } = await connect();
    const orders = await db.collection("orders").find().toArray();
    res.status(200);
    res.json({ orders });
  } catch (e) {
    res.status(500);
    res.json({ error: "Unable to fetch orders... sorry" });
  }
}
