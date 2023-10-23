import UserImageComponent from "@/app/UserImageComponent";
import {
  BsTelephone,
  BsCameraVideo,
  BsList,
  BsSearch,
  BsCalendar3,
  BsEmojiSmile,
  BsCalendarCheck,
  BsClock,
  BsPaperclip,
} from "react-icons/bs";
import Image, { StaticImageData } from "next/image";
import { BiSolidUser } from "react-icons/bi";
import { TbCapture } from "react-icons/tb";
import style from "@/app/chat/[id]/page.module.css";
import IconApple from "/public/img/apple.png";
import IconSamsung from "/public/img/samsung.png";
import IconBurgerking from "/public/img/burgerking.png";
import IconPython from "/public/icon/python.png";
import ChatBodyComponent from "./ChatBodyComponent";

const CHAT_DATA = {
  1: {
    header: { userImage: null, userName: ["김규형"] },
    messages: [
      {
        type: "date",
        dateText: "2023년 1월 1일 월요일",
      },
      {
        type: "right",
        message: "저장한 메세지",
        timeText: "오후 1:01",
      },
      {
        type: "left",
        userImage: null,
        userName: "김규형",
        message: "저장한 메세지",
        timeText: "오후 1:01",
      },
      {
        type: "right",
        message:
          "엄청나게 긴 메세지를 적어보고 싶은데 내용을 뭐라고 해야 할 지 모르겠네요. 그래서 아무 생각나는대로 적고 있는데 이거 괜찮은거겠죠? 아니라면 어쩔수 없군요",
        timeText: "오후 5:01",
      },
      {
        type: "left",
        userImage: null,
        userName: "김규형",
        message:
          "엄청나게 긴 메세지를 적어보고 싶은데 내용을 뭐라고 해야 할 지 모르겠네요. 그래서 아무 생각나는대로 적고 있는데 이거 괜찮은거겠죠? 아니라면 어쩔수 없군요",
        timeText: "오후 5:01",
      },
    ],
  },

  2: {
    header: { userImage: IconApple, userName: ["사과"] },
    messages: [
      {
        type: "date",
        dateText: "2023년 7월 24일 월요일",
      },
      {
        type: "right",
        message: "가장 좋아하는 과일은?",
        timeText: "오전 7:14",
      },
      {
        type: "left",
        userImage: IconApple,
        userName: "사과",
        message: "사과를 좋아합니다",
        timeText: "오후 2:15",
      },
    ],
  },

  3: {
    header: { userImage: IconSamsung, userName: ["세별"] },
    messages: [
      {
        type: "date",
        dateText: "2023년 9월 5일 화요일",
      },
      {
        type: "right",
        message: "너는 어떤 사람이 되고싶니?",
        timeText: "오전 11:14",
      },
      {
        type: "left",
        userImage: IconSamsung,
        userName: "세별",
        message: "어둠을 밝히는 별이 되고싶습니다",
        timeText: "오후 12:30",
      },
    ],
  },

  4: {
    header: { userImage: IconBurgerking, userName: ["버거왕"] },
    messages: [
      {
        type: "date",
        dateText: "2023년 7월 24일 월요일",
      },
      {
        type: "right",
        message: "와퍼는?",
        timeText: "오전 7:14",
      },
      {
        type: "left",
        userImage: IconBurgerking,
        userName: "버거왕",
        message: "와퍼는 맛있죠",
        timeText: "오후 2:15",
      },
    ],
  },

  5: {
    header: { userImage: IconPython, userName: ["Python"] },
    messages: [
      {
        type: "date",
        dateText: "2023년 10월 19일 목요일",
      },
      {
        type: "right",
        message: "내가 가장 자신있는 파이썬!",
        timeText: "오후 7:14",
      },
      {
        type: "left",
        userImage: IconPython,
        userName: "Python",
        message: "군대에서 독학으로 시작했지",
        timeText: "오후 7:14",
      },
      {
        type: "left",
        userImage: IconPython,
        userName: "Python",
        message: "그 후 아는 분의 부탁으로 스터디룸 관리 프로그램도 만들었지",
        timeText: "오후 7:14",
      },
      {
        type: "right",
        message: "그래, 그러면서 sms 라이브러리도 포팅했지",
        timeText: "오후 7:14",
      },
      {
        type: "right",
        message:
          "그리고 유튜브 강의를 보며 공부하기 위한 강의 노트 사이트도 만들었지",
        timeText: "오후 7:14",
      },
      {
        type: "left",
        userImage: IconPython,
        userName: "Python",
        message:
          "그래, Python으로 Backend를 구축하고, React와 CKEditor로 Frontend를 구축했지",
        timeText: "오후 7:14",
      },
    ],
  },
};
function ChatHeader(props) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "3rem 1rem",
        position: "fixed",
        top: 0,
        width: "100vw",
        backgroundColor: "#bacee0",
        zIndex: 2,
      }}
    >
      {props.userImage ? (
        <Image src={props.userImage} alt={"icon"} width={60} height={60} />
      ) : (
        <UserImageComponent />
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "1rem",
          flexGrow: 1,
        }}
      >
        <div>{props.userName.join(", ")}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <BiSolidUser />
          <div>{props.userName.length === 1 ? 2 : props.userName.length}</div>
        </div>
      </div>
      <div
        style={{
          fontSize: "2.5rem",
          color: "gray",
          display: "flex",
          flexDirection: "row",
          minWidth: "120px",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <BsSearch />
        <BsTelephone />
        <BsCameraVideo />
        <BsList />
      </div>
    </header>
  );
}

export default function Page(props) {
  const { id } = props.params;
  const chat_id = Number(id);
  const data = CHAT_DATA.hasOwnProperty(chat_id)
    ? // @ts-ignore
      CHAT_DATA[chat_id]
    : CHAT_DATA[1];
  console.log(data);

  return (
    <main
      style={{ backgroundColor: "#bacee0", width: "100vw", height: "100%" }}
    >
      <ChatHeader
        userImage={data.header.userImage}
        userName={data.header.userName}
      />
      <ChatBodyComponent chat={data} />
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#bacee0",
          zIndex: 2,
        }}
      >
        <div>
          <textarea
            style={{
              width: "100%",
              minHeight: "10rem",
              resize: "none",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              minWidth: "15rem",
              display: "flex",
              justifyContent: "space-between",
              color: "gray",
              padding: "1rem",
            }}
          >
            <BsEmojiSmile />
            <BsCalendarCheck />
            <BsClock />
            <BsPaperclip style={{ transform: "rotate(45deg)" }} />
            <TbCapture />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type={"range"}
              style={{
                maxWidth: "5rem",
                marginRight: "1rem",
              }}
            />
            <button
              style={{
                padding: 0,
                minWidth: "5rem",
              }}
              className={style.btn_send}
            >
              전송
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
