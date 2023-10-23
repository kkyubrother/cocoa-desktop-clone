import { BiSolidUser } from "react-icons/bi";

export default function UserImageListComponent(props) {
  const size = 40;
  const padding = 20;
  return (
    <div
      style={{
        backgroundColor: props?.main ? props.main : "#8fcbdd",
        width: size,
        height: size,
        borderRadius: 15,
      }}
      className={"text-center is-center"}
    >
      <BiSolidUser
        style={{
          width: size - padding,
          height: size - padding,
          color: props?.sub ? props.sub : "#c1e2ec",
        }}
      />
    </div>
  );
}
