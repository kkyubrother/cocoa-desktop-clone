"use client";

import { RxCross1, RxSquare } from "react-icons/rx";
import { GoDash } from "react-icons/go";
import { signOut } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function HeaderButtonComponent() {
  const pathname = usePathname();
  const router = useRouter();
  const handleOut = () => {
    if (pathname === "/my") {
      signOut({ callbackUrl: "/", redirect: true }).then(console.log);
    } else {
      router.back();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        color: "gray",
        marginTop: "0.5rem",
        marginRight: "1rem",
      }}
    >
      <GoDash onClick={() => alert("최소화")} />
      <RxSquare
        style={{
          marginTop: "0.15rem",
          marginRight: "0.15rem",
          fontSize: "1.2rem",
          marginInline: "1rem",
        }}
        onClick={() => alert("최대화")}
      />
      <RxCross1 onClick={handleOut} />
    </div>
  );
}
