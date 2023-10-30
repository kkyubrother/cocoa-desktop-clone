"use client";

import style from "@/app/chat/[id]/page.module.css";
import { BsCalendar3 } from "react-icons/bs";
import Image from "next/image";
import UserImageComponent from "../../UserImageComponent";

import { useEffect, useState } from "react";
import renderMarkdownHyperlink from "../../../util/markdown";

function RowDate(props) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#a7b9c9",
          borderRadius: "50px",
          padding: "3px 20px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <BsCalendar3 />
        {props.dateText}
      </div>
    </li>
  );
}
function RowLeft(props) {
  return (
    <li>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "1rem",
          marginBottom: "1rem",
        }}
      >
        {props.userImage ? (
          <Image src={props.userImage} alt={"icon"} width={60} height={60} />
        ) : (
          <UserImageComponent />
        )}
        <div>
          <div>{props.userName}</div>
          <div
            style={{
              padding: "1rem",
            }}
            className={style.bubble}
          >
            {renderMarkdownHyperlink(props.message)}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          {props.timeText}
        </div>
      </div>
    </li>
  );
}
function RowRight(props) {
  return (
    <li>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          marginRight: "3rem",
          marginBottom: "1rem",
        }}
      >
        <div>
          <div className={style.reverse_bubble}>
            {renderMarkdownHyperlink(props.message)}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            paddingRight: "1rem",
          }}
        >
          {props.timeText}
        </div>
      </div>
    </li>
  );
}
function ChatBodyComponent({ chat }) {
  return (
    <section
      style={{
        overflowY: "scroll",
        paddingTop: "120px",
        paddingBottom: "143px",
        minHeight: "100vh",
      }}
    >
      <ol style={{ listStyle: "none", padding: 0 }}>
        {chat.messages.map((message) => {
          switch (message.type) {
            case "date":
              return <RowDate dateText={message.dateText ?? ""} />;
            case "right":
              return (
                <RowRight
                  message={message.message ?? ""}
                  timeText={message.timeText ?? ""}
                />
              );
            case "left":
              return (
                <RowLeft
                  userImage={message.userImage ?? null}
                  userName={message.userName ?? ""}
                  message={message.message ?? ""}
                  timeText={message.timeText ?? ""}
                />
              );
            default:
              return null;
          }
        })}
      </ol>
    </section>
  );
}

export default ChatBodyComponent;
