"use client";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";

export default function LoginAutoLoginComponent() {
  const [isCheck, setCheck] = useState(false);
  useEffect(() => {
    const value = localStorage.getItem("cocoa.auto_complete");
    if (value !== "true") setCheck(false);
    else setCheck(true);
  }, []);

  return (
    <div className={"row"}>
      <div className={"col is-left"} style={{ userSelect: "none" }}>
        <span onClick={() => setCheck(!isCheck)}>
          <span
            style={{
              height: "25px",
              width: "25px",
              backgroundColor: "white",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "0.5rem",
              color: isCheck ? "" : "transparent",
            }}
          >
            ✔️
          </span>
          자동로그인
        </span>
        <IoMdInformationCircleOutline color={"gray"} />
      </div>
    </div>
  );
}
