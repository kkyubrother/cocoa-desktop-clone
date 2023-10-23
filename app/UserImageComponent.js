import { BiSolidUser } from "react-icons/bi";

export default function UserImageComponent() {
  const size = 60;
  const padding = 20;
  return (
    <div
      style={{
        backgroundColor: "#8fcbdd",
        width: size,
        height: size,
        borderRadius: 25,
      }}
      className={"text-center is-center"}
    >
      <BiSolidUser
        style={{
          width: size - padding,
          height: size - padding,
          color: "#c1e2ec",
        }}
      />
    </div>
  );
}
