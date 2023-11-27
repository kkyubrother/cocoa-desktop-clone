import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(400).json({ message: "bad request" });
  }

  const { id, message } = JSON.parse(request.body);

  let db = (await connectDB).db("forum");
  let result = await db.collection("chat").findOne({
    _id: new ObjectId(id),
  });
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
    type: "right",
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

  setTimeout(async () => {
    messages.push({
      type: "left",
      message: message,
      userImage: result.data.header.userImage,
      userName: result.data.header.userName[0],
      timeText: timeText,
    });

    data.messages = messages;
    const res = await db.collection("chat").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { data: data },
      },
    );
  }, 5000);

  return response.status(200).json({ message: "ok" });
}
