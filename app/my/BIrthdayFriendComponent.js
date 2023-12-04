"use client";

import styles from "/app/my/page.module.css";
import ExtraComponent from "./ExtraComponent";
import { LuCake } from "react-icons/lu";

export default function BirthdayFriendComponent() {
  const handleFriend = () => {
    alert("친구의 생일을 확인해보세요!");
  };
  return (
    <ExtraComponent title={"생일인 친구"}>
      <div className={styles.extra_component_children} onClick={handleFriend}>
        <LuCake
          className={styles.extra_component_children_icon_svg}
          style={{
            backgroundColor: "#ff5e6d",
            color: "white",
          }}
        />
        <div className={styles.extra_component_children_title}>
          친구의 생일을 확인해보세요!
          <span className={styles.extra_component_children_count}>6</span>
        </div>
      </div>
    </ExtraComponent>
  );
}
