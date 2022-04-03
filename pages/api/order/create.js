import { connect } from "../../../lib/mongoDB";

export default async function (req, res) {
  try {
    const { db } = await connect();
    const {
      order: { latitude, longitude },
    } = req.body;

    const result = await db.collection("orders").insertOne({
      order: {},
      createdAt: new Date(),
    });

    res.status(201);
    res.json({ order: result.ops[0] });
  } catch (e) {
    res.status(500);
    res.json({ error: "Unable to insert order... sorry" });
  }
}
