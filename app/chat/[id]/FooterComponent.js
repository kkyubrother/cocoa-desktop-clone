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

export default function FooterComponent({ id }) {
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    fetch("/api/message/send", {
      method: "POST",
      body: JSON.stringify({ id: id.toString(), message }),
    }).then((response) => {
      console.log(response);
      setMessage("");
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
          >
            전송
          </button>
        </div>
      </div>
    </footer>
  );
}
