import AsideComponent from "/app/common/aside/AsideComponent";
import styles from "/app/chat/page.module.css";
import IconApple from "/public/img/apple.png";
import IconSamsung from "/public/img/samsung.png";
import IconBurgerking from "/public/img/burgerking.png";
import IconPython from "/public/icon/python.png";
import ReactIcon from "/public/icon/react.png";
import HeaderButtonComponent from "/app/common/header/HeaderButtonComponent";
import ChatRowComponent from "./ChatRowComponent";
import ChatHeaderComponent from "./ChatHeaderComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { connectDB } from "../../util/database";
import { redirect } from "next/navigation";

const CHAT = [
  {
    id: 1,
    icon: null,
    title: "저장한 메세지",
    description: "저장한 메세지",
    count: 1,
    time: "오전 11:50",
  },
  {
    id: 2,
    icon: IconApple,
    title: "사과",
    description: "사과를 좋아합니다",
    count: 1,
    time: "2023-07-24",
  },
  {
    id: 3,
    icon: IconSamsung,
    title: "세별",
    description: "어둠을 밝히는 별이 되고싶습니다",
    count: 3,
    time: "12:30",
  },
  {
    id: 4,
    icon: IconBurgerking,
    title: "버거왕",
    description: "와퍼는 맛있죠",
    count: 99,
    time: "1시간 전",
  },
  {
    id: 5,
    icon: IconPython,
    title: "파이썬",
    description: "내가 가장 자신있는 파이썬!",
    count: 1,
    time: "1시간 전",
  },
  {
    id: 6,
    icon: ReactIcon,
    title: "리액트",
    description: "나의 날개",
    count: 1,
    time: "1시간 전",
  },
];
export default async function ChatPage() {
  let session = await getServerSession(authOptions);
  if (!session) redirect("/");

  let db = (await connectDB).db("forum");
  let result = await db.collection("chat").find().toArray();

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
