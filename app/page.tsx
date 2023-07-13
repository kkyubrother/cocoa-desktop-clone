import styles from './page.module.css'
import UserImageComponent from "@/app/UserImageComponent";
import LoginFormComponent from "@/app/LoginFormComponent";

export default function Home() {
    return (
        <main className={"container " + styles.main}>
            <div className={"row"}>
                <div className={"col is-center"}>
                    <UserImageComponent/>
                </div>
            </div>
            {/*<div className={"row"}>*/}
            {/*  <div className={"col is-center"}>*/}
            {/*    <p>email@email.com</p>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className={"row"}>*/}
            {/*  <div className={"col is-center"}>*/}
            {/*    <h6>잠금모드 상태입니다</h6>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className="row is-center">
                <LoginFormComponent/></div>
        </main>
    )
}
