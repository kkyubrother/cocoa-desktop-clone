import ChatBodyComponent from "./ChatBodyComponent";
import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";
import FooterComponent from "./FooterComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import ChatHeaderComponent from "./ChatHeaderComponent";

export default async function Page(props) {
  let session = await getServerSession(authOptions);
  if (!session) redirect("/");

  const { id } = props.params;
  let data = {};
  let chat = null;
  let db = (await connectDB).db("forum");
  try {
    chat = await db.collection("chat").findOne({
      _id: new ObjectId(id),
    });
    data = chat.data;
    chat._id = chat._id.toString();
    chat.participants = chat.participants?.map((u) => u.toString());

    data.messages = data.messages.map((m) => {
      if (m.type === "follow_user") {
        m.type =
          m.owner_id.toString() === session.db._id.toString()
            ? "right"
            : "left";
        delete m.owner_id;
      }
      return m;
    });
  } catch (e) {
    console.error(e);
    redirect("/chat");
  }

  return (
    <main
      style={{ backgroundColor: "#bacee0", width: "100vw", height: "100%" }}
    >
      <ChatHeaderComponent
        userImage={data.header.userImage}
        userName={data.header.userName}
      />
      <ChatBodyComponent id={id} chat={chat} />
      <FooterComponent id={id} chat={chat} />
    </main>
  );
}
