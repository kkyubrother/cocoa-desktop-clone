"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { getCookie, setCookie } from "../util/cookie";

export default function LoginFormComponent() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [waiting, setWaiting] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const canPressLogin =
    email && password && /^[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const handleEmail = (email) => {
    setEmail(email);
    setCookie("email", email);
  };
  useEffect(() => {
    console.log(getCookie("auto_complete"));
    if (getCookie("auto_complete") === "true") {
      setEmail(getCookie("email"));
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setErrorMessage("");
    setPasswordError("");
    if (!/.+@.+\..+/.test(email)) {
      return setErrorMessage("올바른 이메일을 입력하시오");
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password,
      )
    ) {
      return setErrorMessage(
        "영문자, 숫자, 특수문자를 포함한 8자리 이상을 입력하시오.",
      );
    }
    setWaiting(true);
    signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: "/my",
    })
      .then((response) => {
        if (response.ok) {
          router.push("/my");
        } else {
          setWaiting(false);
          return setErrorMessage(
            "이메일 또는 비밀번호가 틀렸습니다.(데모: demo@demo.com / demo123!)",
          );
        }
      })
      .catch((e) => {
        console.error(e);
        setWaiting(false);
      });
    return;

    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((response) => {
      if (response.status === 200) {
        router.push("/my");
      } else {
        return setErrorMessage(
          "이메일 또는 비밀번호가 틀렸습니다.(데모: demo@demo.com / demo123!)",
        );
      }
    });
  };

  return (
    <div className="row">
      <input
        id="input__email"
        placeholder="이메일(데모: demo@demo.com)"
        value={email}
        onChange={(e) => handleEmail(e.target.value)}
        required={true}
        style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
        autoComplete={"off"}
        disabled={waiting}
      />
      <input
        id="input__password"
        placeholder="비밀번호(데모: demo123!)"
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          height: "4rem",
        }}
        autoComplete={"off"}
        disabled={waiting}
      />
      <div className={"container"}>
        <div className={"row"}>
          <button
            className={"button"}
            onClick={handleLogin}
            style={{
              marginTop: "1rem",
              width: "100%",
              backgroundColor: canPressLogin ? "#594941" : "#f6f6f6",
              color: canPressLogin ? "white" : "#acacac",
            }}
            disabled={waiting}
          >
            로그인
          </button>
        </div>
        <div className={"row"}>
          {errorMessage && <span className={"text-error"}>{errorMessage}</span>}
          {passwordError && (
            <span className={"text-error"}>{passwordError}</span>
          )}
        </div>
      </div>
    </div>
  );
}
