"use client";
import styles from "/app/chat/page.module.css";

import ChatTypeComponent from "./ChatTypeComponent";
import {
  BsFillPlusCircleFill,
  BsSearch,
  BsWechat,
  BsXLg,
} from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ChatHeaderComponent() {
  const router = useRouter();
  const [openSearch, setOpenSearch] = useState(false);
  const [isSearchFocus, setSearchFocus] = useState(false);
  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };
  const handleSearchClose = () => {
    setOpenSearch(false);
  };
  const handleNewChat = () => {
    const emails = window.prompt(
      "추가하길 원하는 이메일을 입력하세요. 여러 이메일을 추가하려면 사이에 ';'을 넣으세요.",
    );

    const target_user_emails = emails
      .split(";")
      .map((v) => v.trim())
      .filter((v) => /.+@.+\..+/.test(v));
    const emails_str = target_user_emails.join(";");

    fetch("/api/chat/create", {
      method: "POST",
      body: JSON.stringify({ emails: emails_str }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else if (response.status === 400) {
          alert("잘못된 이메일입니다.");
        } else if (response.status === 404) {
          alert("해당 이메일이 없습니다.");
        }
      })
      .then((response) => router.push(`/chat/${response.chat_id}`))
      .catch((reason) => {
        alert(`에러: ${reason}`);
      });
  };
  return (
    <div className={styles.chat_header_box}>
      <h4 className={styles.chat_header_first_row}>
        <ChatTypeComponent />
        <div className={styles.chat_header_first_row_icon_box}>
          <div onClick={handleSearch}>
            <BsSearch />
          </div>
          <div onClick={() => alert("오픈 채팅")}>
            <BsWechat />
          </div>
          <div onClick={handleNewChat}>
            <BsFillPlusCircleFill />
          </div>
        </div>
      </h4>

      <div
        className={styles.chat_header_search_row_box}
        style={{
          display: openSearch ? "" : "none",
        }}
      >
        <BsSearch className={styles.chat_header_search_row_icon} />
        <input
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
          style={{
            borderRadius: "50px",
            backgroundColor: isSearchFocus ? "white" : "whitesmoke",
            width: "calc(100% - 40px)",
            paddingLeft: "3.5rem",
          }}
        />
        <div className={styles.chat_header_search_row_input_button}>
          ┃통합검색
        </div>
        <BsXLg
          className={styles.chat_header_search_row_close_icon}
          onClick={handleSearchClose}
        />
      </div>
    </div>
  );
}
