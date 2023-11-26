import bcrypt from "bcrypt";
import { connectDB } from "../../util/database";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const body = JSON.parse(request.body);

    let db = (await connectDB).db("forum");
    let result = await db.collection("user_cred").findOne({
      email: body.email,
    });
    if (result) {
      return response.status(400).json("이미 가입된 사용자");
    }
    let hash = await bcrypt.hash(body.password, 10);

    await db.collection("user_cred").insertOne({
      name: body.email.split("@")[0],
      email: body.email,
      password: hash,
      role: "normal",
    });
    return response.status(200).json("ok");
  }

  return response.status(400).json("bad request");
}
