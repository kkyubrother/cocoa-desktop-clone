import styles from "/app/my/page.module.css";
import { redirect } from "next/navigation";
import FriendListItemComponent from "/app/my/FriendListItemComponent";
import AsideComponent from "/app/common/aside/AsideComponent";
import PythonIcon from "/public/icon/python.png";
import ReactIcon from "/public/icon/react.png";
import CSS3Icon from "/public/icon/css3.png";
import HTML5Icon from "/public/icon/html5.png";
import JavascriptIcon from "/public/icon/javascript.png";
import MariaDBIcon from "/public/icon/mariadb.png";
import NestJSIcon from "/public/icon/NestJS.svg";
import NextJSIcon from "/public/icon/nextjs.svg";
import NginxIcon from "/public/icon/nginx.png";
import NodeIcon from "/public/icon/node.png";
import UbuntuIcon from "/public/icon/ubuntu.png";
import HeaderButtonComponent from "../common/header/HeaderButtonComponent";
import HeaderFriendTitleComponent from "./HeaderFriendTitleComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "/pages/api/auth/[...nextauth]";
import ExtraComponent from "./ExtraComponent";
import UpdatedProfileUserComponent from "./UpdatedProfileUserComponent";
import BirthdayFriendComponent from "./BIrthdayFriendComponent";
import ChannelComponent from "./ChannelComponent";
import { connectDB } from "../../util/database";
import MyProfileComponent from "./MyProfileComponent";
import { getIcon } from "../../util/icon";

export default async function My() {
  let session = await getServerSession(authOptions);
  if (!session) redirect("/");

  let db = (await connectDB).db("forum");
  let result = await db.collection("user_cred").find().toArray();
  result = result.filter((res) => res.email !== session.user.email);

  const username = session.user.name;
  const user = session.user;

  return (
    <main className={"is-full-width " + styles.main}>
      <AsideComponent page={"/my"} />
      <HeaderButtonComponent />

      <div className={styles.main_container}>
        <HeaderFriendTitleComponent />
        <MyProfileComponent user={user} username={username} />
        <hr className={styles.component_hr} />
        <ExtraComponent title={"업데이트한 프로필"}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {result.map((res) => (
              <UpdatedProfileUserComponent
                icon={res.name}
                name={res.name}
                key={res.email}
              />
            ))}
          </div>
        </ExtraComponent>
        <hr className={styles.component_hr} />
        <BirthdayFriendComponent />
        <hr className={styles.component_hr} />
        <ChannelComponent />
        <hr className={styles.component_hr} />
        <div>
          <div className={styles.component_header}>
            <h6 className={styles.component_header_title}>친구 {290}</h6>
          </div>

          <div className={styles.component_body}>
            <FriendListItemComponent
              icon={PythonIcon}
              name={"Python"}
              description={"나의 절친, 군대부터 만난 인연이야."}
              link={"/chat/65644045c91761c4b6feb326"}
            />
            <FriendListItemComponent
              icon={ReactIcon}
              name={"React"}
              description={"동적 웹페이지 제작의 혁신이라고 생각해."}
            />
            <FriendListItemComponent
              icon={CSS3Icon}
              name={"CSS3"}
              description={"UI/UX에 중요한 요소!"}
            />
            <FriendListItemComponent
              icon={HTML5Icon}
              name={"HTML5"}
              description={"웹의 뼈대!"}
            />
            <FriendListItemComponent
              icon={JavascriptIcon}
              name={"Javascript"}
              description={"Frontend 개발의 핵심!"}
            />
            <FriendListItemComponent
              icon={MariaDBIcon}
              name={"MariaDB"}
              description={"다양한 서비스를 MariaDB를 이용하여 서비스해보았지."}
            />
            <FriendListItemComponent
              icon={NextJSIcon}
              name={"NextJS"}
              description={"이 웹사이트를 NextJS를 통해 만들었어."}
            />
            <FriendListItemComponent
              icon={NginxIcon}
              name={"Nginx"}
              description={
                "주로 ReverseProxy를 활용한 React 웹사이트를 배포해보았어."
              }
            />
            <FriendListItemComponent
              icon={UbuntuIcon}
              name={"Ubuntu"}
              description={"AWS 환경에서 서비스를 배포하고 운영해보았어."}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
