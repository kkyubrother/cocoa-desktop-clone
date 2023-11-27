"use client";

import styles from "/app/my/page.module.css";
import ExtraComponent from "./ExtraComponent";
import Image from "next/image";
import KakaoChannel from "../../public/img/kakaotalk_channel.png";

export default function ChannelComponent() {
  const handleOnClick = () => {
    alert("채널");
  };
  return (
    <ExtraComponent title={"채널"}>
      <div className={styles.extra_component_children} onClick={handleOnClick}>
        <Image
          src={KakaoChannel}
          alt={"채널"}
          width={40}
          height={40}
          className={styles.extra_component_children_icon_img}
        />
        <div className={styles.extra_component_children_title}>채널</div>
        <div className={styles.extra_component_children_count}>14</div>
      </div>
    </ExtraComponent>
  );
}
