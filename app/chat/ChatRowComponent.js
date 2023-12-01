import styles from "/app/chat/page.module.css";
import Link from "next/link";
import Image from "next/image";
import UserImageListComponent from "../my/UserImageListComponent";
import { getRandomUserColor } from "../../util/color";
import { getIcon } from "../../util/icon";

export default function ChatRowComponent(props) {
  return (
    <Link href={`/chat/${props._id.toString()}`} style={{ color: "black" }}>
      <div className={styles.chat_row_box}>
        <div className={styles.chat_row_left_box}>
          <div className={styles.chat_row_left_box_icon}>
            {getIcon(props.icon) ? (
              <Image
                src={getIcon(props.icon)}
                alt={"icon"}
                width={40}
                height={40}
              />
            ) : (
              <UserImageListComponent {...getRandomUserColor()} />
            )}
          </div>
          <div className={styles.chat_row_left_box_text}>
            <p className={styles.chat_row_left_box_title}>{props.title}</p>
            <p>{props.description}</p>
          </div>
        </div>
        <div className={styles.chat_row_right_box}>
          <span style={{ fontSize: "1.2rem", color: "gray" }}>
            {`${props.time}`}
          </span>
          <div
            className={styles.chat_row_right_count}
            style={{
              width: `${12 + props.count.toString().length * 6}px`,
            }}
          >
            {`${props.count}`}
          </div>
        </div>
      </div>
    </Link>
  );
}
