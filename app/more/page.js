import styles from "/app/more/page.module.css";
import AsideComponent from "../common/aside/AsideComponent";
import { FaTools } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function Ready() {
  let session = await getServerSession(authOptions);
  if (!session) redirect("/");
  return (
    <main style={{ height: "100vh", backgroundColor: "#fff" }}>
      <AsideComponent page={"/more"} />
      <div
        style={{
          marginLeft: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "calc(100% - 100px)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.icon_box}>
            <FaTools />
          </div>
          <div className={styles.text_box}>공사중</div>
        </div>
      </div>
    </main>
  );
}
