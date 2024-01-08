import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(400).json({ message: "bad request" });
  }
  let session = await getServerSession(request, response, authOptions);
  if (!session) {
    return response.status(403).json({ message: "forbidden" });
  }

  const { id, message } = JSON.parse(request.body);

  let db = (await connectDB).db("forum");
  let result = await db.collection("chat").findOne({
    _id: new ObjectId(id),
  });
  if (
    result._id.toString() !== id &&
    !result.participants.map((u) => u.toString()).includes(id)
  ) {
    return response.status(404).json({ message: "not found" });
  }

  const data = result.data;
  const messages = [...result.data.messages];

  const date = new Date();
  const dateString = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  if (messages.find((v) => v.type === "date" && v.dateText === dateString)) {
  } else {
    messages.push({
      type: "date",
      dateText: dateString,
    });
  }

  const timeText = `${date.toLocaleTimeString().split(":")[0]}:${
    date.toLocaleTimeString().split(":")[1]
  }`;
  messages.push({
    type: "follow_user",
    userName: session.user.name,
    owner_id: session.db._id,
    message: message,
    timeText: timeText,
  });

  data.messages = messages;
  const res = await db.collection("chat").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: { data: data },
    },
  );

  return response.status(200).json({ message: "ok" });
}
