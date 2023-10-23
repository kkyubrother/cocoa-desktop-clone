import style from "./page.module.css";
import {
  BsWechat,
  BsQrCodeScan,
  BsFillExclamationCircleFill,
} from "react-icons/bs";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className={style.main}>
      <div>
        <BsWechat className={style.icon} />
      </div>
      <div>
        <input placeholder={"코코아 계정"} type={"email"} />
        <input placeholder={"비밀번호"} type={"password"} />
        <Link href={"/my"}>
          <button style={{ width: "100%" }}>로그인</button>
        </Link>
      </div>
      <div className={style.divider}> 또는 </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button style={{ width: "100%" }}>
          <BsQrCodeScan style={{ marginRight: "5px" }} />
          QR코드 로그인
        </button>
        <div>
          <input type={"checkbox"} />
          <label>자동로그인</label>
          <div className={style.tooltip}>
            <BsFillExclamationCircleFill
              style={{ transform: "rotate(180deg)" }}
            />
            <span className={style.tooltiptext}>도움말입니다.</span>
          </div>
        </div>
      </div>
    </main>
  );
}
