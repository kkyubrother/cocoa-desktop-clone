"use client";
import styles from "/app/chat/page.module.css";
import { BsTriangleFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

export default function ChatTypeComponent() {
  const iconRef = useRef();
  const [open, setOpen] = useState(false);
  const [selectOption, setSelectOption] = useState(1);

  const handleOpenClick = (e) => {
    setOpen(!open);
  };
  const handleSelectClick = (newSelect) => {
    setSelectOption(newSelect);
    setOpen(false);
  };
  const handleReadAll = () => {
    setOpen(false);
  };
  return (
    <div className={styles.chat_type_component}>
      {`채팅`}
      <span>
        <span ref={iconRef}>
          <BsTriangleFill
            className={
              open
                ? styles.chat_type_component_icon_open
                : styles.chat_type_component_icon_close
            }
            onClick={handleOpenClick}
          />
        </span>
        <div
          className={styles.chat_type_component_popup}
          style={{ display: open ? "" : "none" }}
        >
          <ul className={styles.chat_type_component_popup_list}>
            <li onClick={() => handleSelectClick(1)}>
              {selectOption === 1 && "✔️"}최신 메시지 순
            </li>
            <li onClick={() => handleSelectClick(2)}>
              {selectOption === 2 && "✔️"}안 읽은 메시지 순
            </li>
            <li onClick={() => handleSelectClick(3)}>
              {selectOption === 3 && "✔️"}즐겨찾기 메시지 순
            </li>
            <hr />
            <li onClick={() => handleReadAll()}>모두 읽음 처리</li>
          </ul>
        </div>
      </span>
    </div>
  );
}
