import styles from "./page.module.css";
import { IoQrCode } from "react-icons/io5";

import LoginFormComponent from "/app/LoginFormComponent";

import KakaoLogo from "/public/img/kakaotalk.png";
import Image from "next/image";
import LoginAutoLoginComponent from "/app/LoginAutoLoginComponent";
import LoginFooterComponent from "/app/LoginFooterComponent";
import LoginHeaderComponent from "/app/LoginHeaderComponent";
import LoginQrComponent from "./LoginQrComponent";

export default async function Home() {
  return (
    <main className={styles.main}>
      <LoginHeaderComponent />

      <div className={"container"} style={{ width: "80%", maxWidth: "480px" }}>
        <div className={"row"}>
          <div className={"col is-center"} style={{ marginTop: 64 }}>
            <Image src={KakaoLogo} alt={"kakao"} width={100} />
            {/*<UserImageComponent />*/}
          </div>
        </div>
        <LoginFormComponent />
        <div className={"row"}>
          <div
            className={"col is-center " + styles.line}
            style={{ color: "#7f7200", userSelect: "none" }}
          >
            또는
          </div>
        </div>
        <LoginQrComponent />
        <LoginAutoLoginComponent />
        <LoginFooterComponent />
      </div>
    </main>
  );
}
