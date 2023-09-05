import styles from "./page.module.css";
import UserImageComponent from "@/app/UserImageComponent";
import LoginFormComponent from "@/app/LoginFormComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col is-center"}>
            <UserImageComponent />
          </div>
        </div>
        <div className={"row"}>
          <div className={"col is-center"}>
            <p>kkyubrother.0@gmail.com</p>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col is-center"}>
            <h5 className={styles.announceText}>잠금모드 상태입니다</h5>
          </div>
        </div>
        <div className="row is-center">
          <LoginFormComponent />
        </div>
      </div>
    </main>
  );
}
