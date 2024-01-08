"use client";

import {
  BsCalendarCheck,
  BsClock,
  BsEmojiSmile,
  BsPaperclip,
} from "react-icons/bs";
import { TbCapture } from "react-icons/tb";
import styles from "./page.module.css";
import { useState } from "react";

export default function FooterComponent({ id, chat }) {
  const [message, setMessage] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const handleSendMessage = () => {
    setDisabled(true);
    fetch("/api/message/send", {
      method: "POST",
      body: JSON.stringify({ id: id.toString(), message }),
    })
      .then((response) => {
        console.log(response);
        setMessage("");
        setDisabled(false);
      })
      .catch((reason) => {
        console.error(reason);
        setDisabled(false);
      });
  };

  return (
    <footer className={styles.footer}>
      <div>
        <textarea
          style={{
            width: "100%",
            minHeight: "10rem",
            resize: "none",
          }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={chat.disabled || isDisabled}
          placeholder={chat.disabled && "DEMO 대화는 채팅 입력이 불가합니다."}
        />
      </div>
      <div className={styles.footer_icon_row}>
        <div className={styles.footer_icon_left_box}>
          <BsEmojiSmile />
          <BsCalendarCheck />
          <BsClock />
          <BsPaperclip style={{ transform: "rotate(45deg)" }} />
          <TbCapture />
        </div>
        <div className={styles.footer_icon_right_box}>
          <input
            type={"range"}
            style={{
              maxWidth: "5rem",
              marginRight: "1rem",
            }}
          />
          <button
            style={{
              padding: 0,
              minWidth: "5rem",
            }}
            className={styles.btn_send}
            onClick={handleSendMessage}
            disabled={chat.disabled}
          >
            전송
          </button>
        </div>
      </div>
    </footer>
  );
}
