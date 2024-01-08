import { connectDB } from "../../../util/database";
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

  const { emails } = JSON.parse(request.body);
  const target_user_emails = [
    ...new Set(
      emails
        .split(";")
        .map((v) => v.trim())
        .filter((v) => /.+@.+\..+/.test(v))
        .filter((v) => v !== session.user.email),
    ),
  ];

  let db = (await connectDB).db("forum");
  let user_result = await db
    .collection("user_cred")
    .find({
      email: { $in: target_user_emails },
    })
    .toArray();

  if (user_result.length === 0) {
    return response.status(404).json({ message: "not found" });
  }

  let d = new Date();
  let time_str = d.getHours() < 12 ? "오전 " : "오후 ";
  time_str += `${d.getHours()}`.padStart(2, "0");
  time_str += ":";
  time_str += `${d.getMinutes()}`.padStart(2, "0");

  let new_chat = {
    title: `[그룹]${session.user.name} 외 ${user_result.length}명`,
    description: `${session.user.name}, ${user_result
      .map((u) => u.name)
      .join(", ")}`,
    count: user_result.length + 1,
    time: time_str,
    participants: [session.db._id, ...user_result.map((u) => u._id)],
    data: {
      header: {
        userImage: null,
        userName: [session.user.name, ...user_result.map((u) => u.name)],
      },
      messages: [],
    },
  };

  const create_result = await db.collection("chat").insertOne(new_chat);
  return response
    .status(201)
    .json({ chat_id: create_result.insertedId.toString() });
}
