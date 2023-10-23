import AsideComponent from "@/app/common/AsideComponent";
import styles from "@/app/my/page.module.css";
import UserImageListComponent from "@/app/my/UserImageListComponent";
import {
  BsTriangleFill,
  BsSearch,
  BsWechat,
  BsFillPlusCircleFill,
  BsXLg,
} from "react-icons/bs";
import Image, { StaticImageData } from "next/image";
import IconApple from "/public/img/apple.png";
import IconSamsung from "/public/img/samsung.png";
import IconBurgerking from "/public/img/burgerking.png";
import Link from "next/link";

const colors = [
  {
    main: "#94bfe7",
    sub: "#c3dbf1",
  },
  {
    main: "#8fcbdd",
    sub: "#c1e2ec",
  },
  { main: "#a1b6e9", sub: "#cbd6f2" },
];

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
];
export default function ChatPage() {
  return (
    <main>
      <AsideComponent page={"/chat"} />
      <div
        className={"container " + styles.main}
        style={{
          paddingLeft: "100px",
        }}
      >
        <h4
          style={{
            fontWeight: "700",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            {`채팅`}
            <span
              style={{
                marginLeft: "1rem",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              <BsTriangleFill
                style={{
                  transform: "rotate(180deg)",
                  cursor: "pointer",
                }}
              />
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              minWidth: "120px",
              justifyContent: "space-around",
            }}
          >
            <div>
              <BsSearch />
            </div>
            <div>
              <BsWechat />
            </div>
            <div>
              <BsFillPlusCircleFill />
            </div>
          </div>
        </h4>
        <div>
          <div style={{ position: "relative", height: "5rem" }}>
            <BsSearch
              style={{ position: "absolute", top: "1.25rem", left: "1.25rem" }}
            />
            <input
              style={{
                borderRadius: "50px",
                backgroundColor: "whitesmoke",
                width: "calc(100% - 40px)",
                paddingLeft: "3.5rem",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "5.25rem",
                color: "darkgray",
              }}
            >
              ┃통합검색
            </div>
            <BsXLg
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                fontWeight: "700",
              }}
            />
          </div>
          {CHAT.map((chat) => (
            <ChatRow key={chat.id} {...chat} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ChatRow(props) {
  return (
    <Link href={`/chat/${props.id}`} style={{ color: "black" }}>
      <div
        className={"row"}
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 15,
            }}
          >
            {props.icon ? (
              <Image src={props.icon} alt={"icon"} width={40} height={40} />
            ) : (
              <UserImageListComponent
                {...colors[Math.floor(Math.random() * colors.length)]}
              />
            )}
          </div>
          <div
            style={{
              lineHeight: "0.5rem",
              height: "60px",
              paddingBlock: "1rem",
              marginLeft: "10px",
              fontSize: "1.2rem",
            }}
          >
            <p style={{ fontWeight: 600 }}>{props.title}</p>
            <p
              style={{
                color: "#737373",
              }}
            >
              {props.description}
            </p>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <span style={{ fontSize: "1.2rem", color: "gray" }}>
            {`${props.time}`}
          </span>
          <div
            style={{
              width: `${12 + props.count.toString().length * 6}px`,
              height: "18px",
              backgroundColor: "tomato",
              borderRadius: "9px",
              position: "absolute",
              right: `0px`,
              top: "24px",
              color: "white",
              fontSize: "12px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {`${props.count}`}
          </div>
        </div>
      </div>
    </Link>
  );
}
