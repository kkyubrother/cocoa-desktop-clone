import Link from "next/link";

export default function LoginFormComponent() {
  return (
    <form className="col-4">
      <p>
        <label>이메일</label>
        <input id="input__email" placeholder="이메일" />
      </p>
      <p>
        <label htmlFor="input__password">비밀번호</label>
        <input type="password" id="input__password" placeholder="비밀번호" />
      </p>
      <p className={"is-right"}>
        <Link href="/my" className="button primary">
          로그인
        </Link>
      </p>
    </form>
  );
}