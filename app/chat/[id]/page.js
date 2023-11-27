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
  let db = (await connectDB).db("forum");
  let result = await db.collection("chat").findOne({
    _id: new ObjectId(id),
  });
  const data = result.data;

  return (
    <main
      style={{ backgroundColor: "#bacee0", width: "100vw", height: "100%" }}
    >
      <ChatHeaderComponent
        userImage={data.header.userImage}
        userName={data.header.userName}
      />
      <ChatBodyComponent id={id} chat={data} />
      <FooterComponent id={id} />
    </main>
  );
}
