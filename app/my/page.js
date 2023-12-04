import styles from "/app/my/page.module.css";
import { redirect } from "next/navigation";
import FriendListItemComponent from "/app/my/FriendListItemComponent";
import AsideComponent from "/app/common/aside/AsideComponent";
import HeaderButtonComponent from "../common/header/HeaderButtonComponent";
import HeaderFriendTitleComponent from "./HeaderFriendTitleComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "/pages/api/auth/[...nextauth]";
import ExtraComponent from "./ExtraComponent";
import UpdatedProfileUserComponent from "./UpdatedProfileUserComponent";
import BirthdayFriendComponent from "./BIrthdayFriendComponent";
import ChannelComponent from "./ChannelComponent";
import { connectDB } from "../../util/database";
import MyProfileComponent from "./MyProfileComponent";
import { getIcon } from "../../util/icon";

export default async function My() {
  let session = await getServerSession(authOptions);
  if (!session) redirect("/");

  let db = (await connectDB).db("forum");
  let result = await db.collection("user_cred").find().toArray();
  result = result.filter((res) => res.email !== session.user.email);

  const username = session.user.name;
  const user = session.user;

  const friend_result = await db.collection("friend").find().toArray();

  return (
    <main className={"is-full-width " + styles.main}>
      <AsideComponent page={"/my"} />
      <HeaderButtonComponent />

      <div className={styles.main_container}>
        <HeaderFriendTitleComponent />
        <MyProfileComponent user={user} username={username} />
        <hr className={styles.component_hr} />
        <ExtraComponent title={"업데이트한 프로필"}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {result.map((res) => (
              <UpdatedProfileUserComponent
                icon={res.name}
                name={res.name}
                key={res.email}
              />
            ))}
          </div>
        </ExtraComponent>
        <hr className={styles.component_hr} />
        <BirthdayFriendComponent />
        <hr className={styles.component_hr} />
        <ChannelComponent />
        <hr className={styles.component_hr} />
        <div>
          <div className={styles.component_header}>
            <h6 className={styles.component_header_title}>
              친구 {friend_result.length}
            </h6>
          </div>

          <div className={styles.component_body}>
            {friend_result.map((v) => (
              <FriendListItemComponent
                key={v.name}
                icon={getIcon(v.icon, true)}
                name={v.name}
                description={v.description}
                link={v?.chat_id && `/chat/${v.chat_id.toString()}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
