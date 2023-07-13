import Link from "next/link";

export default function LoginFormComponent() {
    return (
        <form className="col-4">
            {/*<fieldset>*/}
            {/*<legend>로그인</legend>*/}
            <p>
                <label>이메일</label>
                <input id="input__email" placeholder="Email Input"/>
            </p>
            <p>
                <label htmlFor="input__password">비밀번호</label>
                <input
                    type="password"
                    id="input__password"
                    placeholder="Password Input"
                />
            </p>
            <p className={"is-right"}>
                <Link href="/my" className="button primary">
                    로그인
                </Link>
            </p>
            {/*</fieldset>*/}
        </form>
    );
}
