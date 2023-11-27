import styles from "./page.module.css";

import LoginFormComponent from "/app/LoginFormComponent";

import KakaoLogo from "/public/img/kakaotalk.png";
import Image from "next/image";
import LoginAutoLoginComponent from "/app/LoginAutoLoginComponent";
import LoginFooterComponent from "/app/LoginFooterComponent";
import LoginHeaderComponent from "/app/LoginHeaderComponent";
import LoginQrComponent from "./LoginQrComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function Home() {
  let session = await getServerSession(authOptions);
  if (session) redirect("/my");

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
