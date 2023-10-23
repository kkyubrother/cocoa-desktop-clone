import { BiSolidUser } from "react-icons/bi";
import { BsEmojiSmile, BsFillChatFill, BsThreeDots } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { RiSettings3Line } from "react-icons/ri";
import AsideBadge from "@/app/common/AsideBadgeComponent";
import Link from "next/link";

export default function AsideComponent(props) {
  const asideMainIconActivate = {
    my: props?.page === "/my",
    chat: props?.page === "/chat",
    more: false,
  };
  const asideSubIconActivate = {
    smile: false,
    alarm: false,
    setting: false,
  };

  const asideMainIconStyle = {
    width: "30px",
    height: "30px",
    marginBlock: "15px",
    cursor: "pointer",
  };
  const asideSubIconStyle = {
    width: "20px",
    height: "20px",
    marginBlock: "10px",
    cursor: "pointer",
  };
  return (
    <aside
      style={{
        float: "left",
        minHeight: "240px",
        width: "80px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ececed",
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/*top icons*/}
        <Link href={"/my"}>
          <div
            style={{
              position: "relative",
            }}
          >
            <BiSolidUser
              style={{
                ...asideMainIconStyle,
                color: asideMainIconActivate.my ? "#343740" : "#909297",
              }}
            />
            <AsideBadge length={1} />
          </div>
        </Link>

        <Link href={"/chat"}>
          <div
            style={{
              position: "relative",
            }}
          >
            <BsFillChatFill
              style={{
                ...asideMainIconStyle,
                color: asideMainIconActivate.chat ? "#343740" : "#909297",
              }}
            />
            <AsideBadge length={999} />
          </div>
        </Link>
        <BsThreeDots
          style={{
            ...asideMainIconStyle,
            color: asideMainIconActivate.more ? "#343740" : "#909297",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/*bottom icons*/}
        <BsEmojiSmile
          style={{
            ...asideSubIconStyle,
            color: asideSubIconActivate.smile ? "#343740" : "#909297",
          }}
        />
        <GoBell
          style={{
            ...asideSubIconStyle,
            color: asideSubIconActivate.alarm ? "#343740" : "#909297",
          }}
        />
        <RiSettings3Line
          style={{
            ...asideSubIconStyle,
            color: asideSubIconActivate.setting ? "#343740" : "#909297",
          }}
        />
      </div>
    </aside>
  );
}
