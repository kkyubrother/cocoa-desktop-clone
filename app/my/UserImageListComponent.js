import { BiSolidUser } from "react-icons/bi";

export default function UserImageListComponent(props) {
  const size = props?.size ? Number(props.size) : 40;
  const padding = props?.padding ? Number(props.padding) : 20;
  const borderRadius = props?.borderRadius ? Number(props.borderRadius) : 15;
  return (
    <div
      style={{
        backgroundColor: props?.main ? props.main : "#8fcbdd",
        width: size,
        height: size,
        borderRadius: borderRadius,
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
