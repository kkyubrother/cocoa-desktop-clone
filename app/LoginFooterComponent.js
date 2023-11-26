"use client";

export default function LoginFooterComponent() {
  return (
    <div className={"row"}>
      <div
        className={"col is-center"}
        style={{ color: "GrayText", userSelect: "none" }}
      >
        <span onClick={() => alert("카카오계정 찾기")}>카카오계정 찾기</span>
        <span style={{ marginInline: "0.5rem" }}>|</span>
        <span onClick={() => alert("비밀번호 재설정")}>비밀번호 재설정</span>
      </div>
    </div>
  );
}
