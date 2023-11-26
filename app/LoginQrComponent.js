"use client";
import { IoQrCode } from "react-icons/io5";

import { signIn } from "next-auth/react";

export default function LoginQrComponent() {
  return (
    <div className={"row"}>
      <div className={"col is-center"}>
        <button
          className={"button"}
          style={{ backgroundColor: "whitesmoke", width: "100%" }}
          // onClick={() => alert("QR 코드 로그인")}
          onClick={() => signIn()}
        >
          <IoQrCode style={{ marginRight: "0.5rem" }} />
          QR코드 로그인
        </button>
      </div>
    </div>
  );
}
