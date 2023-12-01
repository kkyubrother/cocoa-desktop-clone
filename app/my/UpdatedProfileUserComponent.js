"use client";
import styles from "/app/my/page.module.css";
import Image from "next/image";
import UserImageListComponent from "./UserImageListComponent";
import { getRandomUserColor } from "../../util/color";
import { getIcon } from "../../util/icon";

export default function UpdatedProfileUserComponent({ icon, name }) {
  return (
    <div
      className={styles.updated_profile_component}
      onClick={() => alert(`${name}님의 프로필`)}
    >
      <div className={styles.updated_profile_component_image_box}>
        {getIcon(icon, true) ? (
          <Image
            src={getIcon(icon)}
            alt={"icon"}
            width={40}
            height={40}
            className={styles.updated_profile_component_img}
          />
        ) : (
          <UserImageListComponent {...getRandomUserColor()} />
        )}
      </div>
      <div className={styles.updated_profile_component_name}>
        <p>{name}</p>
      </div>
    </div>
  );
}
