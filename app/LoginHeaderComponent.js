"use client";

import { LuSettings } from "react-icons/lu";
import { RxCross1, RxDividerVertical } from "react-icons/rx";
import { GoDash } from "react-icons/go";

export default function LoginHeaderComponent() {
  return (
    <div
      className={"container"}
      style={{
        display: "flex",
        justifyContent: "flex-end",
        color: "gray",
        maxWidth: "480px",
      }}
    >
      <LuSettings
        style={{ marginInline: "1rem" }}
        onClick={() => alert("설정")}
      />
      <RxDividerVertical />
      <GoDash
        style={{ marginInline: "1rem" }}
        onClick={() => alert("최소화")}
      />
      <RxCross1 onClick={() => alert("닫기")} />
    </div>
  );
}
