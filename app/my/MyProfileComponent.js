import styles from "/app/my/page.module.css";
import Link from "next/link";
import Image from "next/image";
import MyPicture from "../../public/icon/my.png";
import { CiCircleChevRight } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import UserImageListComponent from "./UserImageListComponent";
import { getRandomUserColor } from "../../util/color";
import { getIcon } from "../../util/icon";

export default function MyProfileComponent({ user }) {
  return (
    <Link
      href={"https://kesuna.com"}
      rel={"noopener noreferrer"}
      target={"_blank"}
    >
      <div className={styles.my_profile_component}>
        <div className={styles.my_profile_component_container}>
          <div className={styles.my_profile_component_image_container}>
            {getIcon(user.name) ? (
              <Image
                src={getIcon(user.name)}
                alt={user.name}
                width={60}
                height={60}
                className={styles.my_profile_component_img}
              />
            ) : (
              <UserImageListComponent
                {...getRandomUserColor()}
                size={60}
                borderRadius={25}
              />
            )}
          </div>
          <div className={styles.my_profile_component_body}>
            <p className={styles.my_profile_component_body_name}>
              {user.name}
              <CiCircleChevRight
                className={styles.my_profile_component_body_name_icon}
              />
            </p>
            <p className={styles.my_profile_component_body_description}>
              {"Don't rest until you reach your goal!"}
            </p>
          </div>
        </div>
        <div className={styles.my_profile_component_status}>
          <p className={styles.my_profile_component_status_text}>
            상태메시지
            <BsPlusLg />
          </p>
        </div>
      </div>
    </Link>
  );
}
