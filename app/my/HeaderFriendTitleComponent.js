"use client";

import styles from "/app/my/page.module.css";
import { BsPersonAdd, BsSearch } from "react-icons/bs";

export default function HeaderFriendTitleComponent() {
  const handleTotalSearch = () => {
    alert("통합검색");
  };
  const handleAddFriend = () => {
    alert("친구추가");
  };
  return (
    <div className={styles.header_friend_title_row}>
      <h3>친구</h3>
      <div>
        <BsSearch
          className={styles.header_friend_title_row_icon}
          onClick={handleTotalSearch}
        />
        <BsPersonAdd
          className={styles.header_friend_title_row_icon}
          onClick={handleAddFriend}
        />
      </div>
    </div>
  );
}
