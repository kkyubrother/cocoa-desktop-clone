import styles from "@/app/my/page.module.css";
import UserImageComponent from "@/app/UserImageComponent";
import { LoremIpsum } from "lorem-ipsum";
import FriendListItemComponent from "@/app/my/FriendListItemComponent";
import AsideComponent from "@/app/common/AsideComponent";
import PythonIcon from "@/public/icon/python.png";
import ReactIcon from "@/public/icon/react.png";
import CSS3Icon from "@/public/icon/css3.png";
import HTML5Icon from "@/public/icon/html5.png";
import JavaIcon from "@/public/icon/java.png";
import RustIcon from "@/public/icon/rust.png";
import JavascriptIcon from "@/public/icon/javascript.png";
import MariaDBIcon from "@/public/icon/mariadb.png";
import NestJSIcon from "@/public/icon/NestJS.svg";
import NextJSIcon from "@/public/icon/nextjs.svg";
import NginxIcon from "@/public/icon/nginx.png";
import NodeIcon from "@/public/icon/node.png";
import UbuntuIcon from "@/public/icon/ubuntu.png";
import MyPicture from "@/public/icon/my.png";
import Image from "next/image";

export default function My() {
  return (
    <main className={styles.main}>
      <AsideComponent page={"/my"} />
      <div
        className={"container " + styles.main}
        style={{
          paddingLeft: "90px",
        }}
      >
        <h3 className={"row"}>친구</h3>
        <div className={"row"}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 25,
            }}
            className={"text-center is-center"}
          >
            <Image src={MyPicture} alt={"김규형"} width={60} height={60} />
          </div>
          {/*<UserImageComponent />*/}
          <div
            style={{
              lineHeight: "1rem",
              height: "60px",
              paddingBlock: "1rem",
              marginLeft: "10px",
            }}
          >
            <p style={{ fontWeight: 600 }}>김규형</p>
            <p
              style={{
                color: "#737373",
              }}
            >
              {"Don't rest until you reach your goal!"}
              {}
            </p>
          </div>
        </div>
        <hr />
        <h4>{`친구 목록`}</h4>
        <FriendListItemComponent
          icon={PythonIcon}
          name={"Python"}
          description={"나의 절친"}
        />
        <FriendListItemComponent
          icon={ReactIcon}
          name={"React"}
          description={"함께라면 즐거워"}
        />
        <FriendListItemComponent
          icon={CSS3Icon}
          name={"CSS3"}
          description={"함께라면 즐거워"}
        />
        <FriendListItemComponent
          icon={HTML5Icon}
          name={"HTML5"}
          description={"함께라면 즐거워"}
        />
        <FriendListItemComponent
          icon={JavascriptIcon}
          name={"Javascript"}
          description={"함께라면 즐거워"}
        />
        <FriendListItemComponent
          icon={MariaDBIcon}
          name={"MariaDB"}
          description={"함께라면 즐거워"}
        />
        <FriendListItemComponent
          icon={NestJSIcon}
          name={"NestJS"}
          description={"함께라면 즐거워"}
        />
        <FriendListItemComponent
          icon={NextJSIcon}
          name={"NextJS"}
          description={"함께라면 즐거워"}
        />
        <FriendListItemComponent
          icon={NginxIcon}
          name={"Nginx"}
          description={"함께라면 즐거워"}
        />
        <FriendListItemComponent
          icon={NodeIcon}
          name={"NodeJS"}
          description={"함께라면 즐거워"}
        />
        <FriendListItemComponent
          icon={UbuntuIcon}
          name={"Ubuntu"}
          description={"함께라면 즐거워"}
        />
        <hr />
        <h4>{`친해지려는 친구 목록`}</h4>
        <FriendListItemComponent
          icon={JavaIcon}
          name={"Java"}
          description={"함께라면 즐거워"}
        />
        <FriendListItemComponent
          icon={RustIcon}
          name={"Rust"}
          description={"함께라면 즐거워"}
        />
      </div>
    </main>
  );
}
