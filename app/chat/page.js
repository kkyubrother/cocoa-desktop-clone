import AsideComponent from "/app/common/aside/AsideComponent";
import styles from "/app/chat/page.module.css";
import HeaderButtonComponent from "/app/common/header/HeaderButtonComponent";
import ChatRowComponent from "./ChatRowComponent";
import ChatHeaderComponent from "./ChatHeaderComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { connectDB } from "../../util/database";
import { redirect } from "next/navigation";

export default async function ChatPage() {
  let session = await getServerSession(authOptions);
  if (!session) redirect("/");

  let db = (await connectDB).db("forum");
  let result = [await db.collection("chat").findOne({ _id: session.db._id })];
  let demo_result = await db
    .collection("chat")
    .find({ disabled: true })
    .toArray();
  let normal_result = await db
    .collection("chat")
    .find({ participants: { $elemMatch: { $eq: session.db._id } } })
    .toArray();
  result = result.concat([...demo_result, ...normal_result]);

  result.forEach((v) => (v._id = v._id.toString()));

  return (
    <main>
      <AsideComponent page={"/chat"} />
      <HeaderButtonComponent />
      <div className={styles.main_container}>
        <ChatHeaderComponent />
        <div>
          {result.map((chat) => (
            <ChatRowComponent key={chat._id.toString()} {...chat} />
          ))}
        </div>
      </div>
    </main>
  );
}
