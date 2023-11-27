import styles from "/app/common/aside/aside.module.css";
import { BiSolidUser } from "react-icons/bi";
import { BsEmojiSmile, BsFillChatFill, BsThreeDots } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { RiSettings3Line } from "react-icons/ri";
import AsideBadge from "/app/common/aside/AsideBadgeComponent";
import Link from "next/link";

export default function AsideComponent(props) {
  const asideMainIconActivate = {
    my: props?.page === "/my",
    chat: props?.page === "/chat",
    more: props?.page === "/more",
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
        <Link href={"/more"}>
          <BsThreeDots
            style={{
              ...asideMainIconStyle,
              color: asideMainIconActivate.more ? "#343740" : "#909297",
            }}
          />
        </Link>
      </div>
      <div className={styles.aside_bottom_box}>
        {/*bottom icons*/}
        <BsEmojiSmile
          className={styles.aside_bottom_icon}
          style={{
            color: asideSubIconActivate.smile ? "#343740" : "#909297",
          }}
        />
        <GoBell
          className={styles.aside_bottom_icon}
          style={{
            color: asideSubIconActivate.alarm ? "#343740" : "#909297",
          }}
        />
        <RiSettings3Line
          className={styles.aside_bottom_icon}
          style={{
            color: asideSubIconActivate.setting ? "#343740" : "#909297",
          }}
        />
      </div>
    </aside>
  );
}
