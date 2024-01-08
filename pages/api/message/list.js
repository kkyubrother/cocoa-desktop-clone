import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(400).json({ message: "bad request" });
  }
  let session = await getServerSession(request, response, authOptions);
  if (!session) {
    return response.status(403).json({ message: "forbidden" });
  }
  const { id } = request.query;

  let db = (await connectDB).db("forum");
  let result = await db.collection("chat").findOne({
    _id: new ObjectId(id),
  });
  const data = result.data;
  data.messages = data.messages.map((m) => {
    if (m.type === "follow_user") {
      m.type =
        m.owner_id.toString() === session.db._id.toString() ? "right" : "left";
      delete m.owner_id;
    }
    return m;
  });

  return response.status(200).json({ message: "ok", data: data });
}
