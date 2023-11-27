import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(400).json({ message: "bad request" });
  }
  const { id } = request.query;

  let db = (await connectDB).db("forum");
  let result = await db.collection("chat").findOne({
    _id: new ObjectId(id),
  });
  const data = result.data;

  return response.status(200).json({ message: "ok", data: data });
}
