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

export default function ChatHeaderComponent() {
  const [openSearch, setOpenSearch] = useState(false);
  const [isSearchFocus, setSearchFocus] = useState(false);
  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };
  const handleSearchClose = () => {
    setOpenSearch(false);
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
          <div onClick={() => alert("새로운 채팅")}>
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
