import HeaderButtonComponent from "../../common/header/HeaderButtonComponent";
import Image from "next/image";
import { getIcon } from "../../../util/icon";
import UserImageComponent from "../../UserImageComponent";
import { BiSolidUser } from "react-icons/bi";
import { BsCameraVideo, BsList, BsSearch, BsTelephone } from "react-icons/bs";

export default function ChatHeaderComponent({ userImage, userName }) {
  return (
    <header
      style={{
        padding: "0 0.5rem 3rem 1rem",
        position: "fixed",
        top: 0,
        width: "100vw",
        backgroundColor: "#bacee0",
        zIndex: 2,
      }}
    >
      <HeaderButtonComponent />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {userImage ? (
          <Image src={getIcon(userImage)} alt={"icon"} width={60} height={60} />
        ) : (
          <UserImageComponent />
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "1rem",
            flexGrow: 1,
          }}
        >
          <div>{userName.join(", ")}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <BiSolidUser />
            <div>{userName.length === 1 ? 2 : userName.length}</div>
          </div>
        </div>
        <div
          style={{
            fontSize: "2.5rem",
            color: "gray",
            display: "flex",
            flexDirection: "row",
            minWidth: "120px",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <BsSearch />
          <BsTelephone />
          <BsCameraVideo />
          <BsList />
        </div>
      </div>
    </header>
  );
}
