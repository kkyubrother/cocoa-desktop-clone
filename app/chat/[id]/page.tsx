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
import IconApple from "/public/img/pngwing.com.png";
import IconSamsung from "/public/img/pngwing.com(1).png";
import IconBurgerking from "/public/img/pngwing.com(2).png";

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
};

type ChatIDPageType = {
  params: { id: string };
};

type RowDateType = {
  dateText: string;
};
type RowLeftType = {
  userImage: StaticImageData | null;
  userName: string;
  message: string;
  timeText: string;
};
type RowRightType = {
  message: string;
  timeText: string;
};
type ChatHeaderType = {
  userImage: StaticImageData | null;
  userName: string[];
};
function RowDate(props: RowDateType) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#a7b9c9",
          borderRadius: "50px",
          padding: "3px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <BsCalendar3 />
        {props.dateText}
      </div>
    </li>
  );
}
function RowLeft(props: RowLeftType) {
  return (
    <li>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "1rem",
          marginBottom: "1rem",
        }}
      >
        {props.userImage ? (
          <Image src={props.userImage} alt={"icon"} width={60} height={60} />
        ) : (
          <UserImageComponent />
        )}
        <div>
          <div>{props.userName}</div>
          <div
            style={{
              padding: "1rem",
            }}
            className={style.bubble}
          >
            {props.message}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          {props.timeText}
        </div>
      </div>
    </li>
  );
}
function RowRight(props: RowRightType) {
  return (
    <li>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          marginRight: "3rem",
          marginBottom: "1rem",
        }}
      >
        <div>
          <div className={style.reverse_bubble}>{props.message}</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            paddingRight: "1rem",
          }}
        >
          {props.timeText}
        </div>
      </div>
    </li>
  );
}
function ChatHeader(props: ChatHeaderType) {
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

export default function Page(props: ChatIDPageType) {
  const { id } = props.params;
  const data =
    id === "1"
      ? CHAT_DATA[1]
      : id === "2"
      ? CHAT_DATA[2]
      : id === "3"
      ? CHAT_DATA[3]
      : id === "4"
      ? CHAT_DATA[4]
      : CHAT_DATA[1];
  return (
    <main
      style={{ backgroundColor: "#bacee0", width: "100vw", height: "100%" }}
    >
      <ChatHeader
        userImage={data.header.userImage}
        userName={data.header.userName}
      />
      <section
        style={{
          overflowY: "scroll",
          paddingTop: "120px",
          paddingBottom: "143px",
          minHeight: "100vh",
        }}
      >
        <ol style={{ listStyle: "none", padding: 0 }}>
          {data.messages.map((message) => {
            switch (message.type) {
              case "date":
                return <RowDate dateText={message.dateText ?? ""} />;
              case "right":
                return (
                  <RowRight
                    message={message.message ?? ""}
                    timeText={message.timeText ?? ""}
                  />
                );
              case "left":
                return (
                  <RowLeft
                    userImage={message.userImage ?? null}
                    userName={message.userName ?? ""}
                    message={message.message ?? ""}
                    timeText={message.timeText ?? ""}
                  />
                );
              default:
                return null;
            }
          })}
        </ol>
      </section>
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
