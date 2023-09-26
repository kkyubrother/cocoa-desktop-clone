import UserImageListComponent from "@/app/my/UserImageListComponent";
import { LoremIpsum } from "lorem-ipsum";
import Image, { StaticImageData } from "next/image";
import PythonImage from "@/public/icon/python.png";

const lorem = new LoremIpsum({});
const colors = [
  {
    main: "#94bfe7",
    sub: "#c3dbf1",
  },
  {
    main: "#8fcbdd",
    sub: "#c1e2ec",
  },
  { main: "#a1b6e9", sub: "#cbd6f2" },
];
export default function FriendListItemComponent(props: {
  icon: StaticImageData;
  name: string;
  description: string;
}) {
  return (
    <div>
      <div
        className={"row"}
        style={{
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 15,
          }}
          className={"text-center is-center"}
        >
          <Image src={props.icon} alt={props.name} width={40} height={40} />
        </div>
        <div
          style={{
            lineHeight: "0.5rem",
            height: "60px",
            paddingBlock: "1rem",
            marginLeft: "10px",
            fontSize: "1.2rem",
          }}
        >
          <p style={{ fontWeight: 600 }}>{props.name}</p>
          <p
            style={{
              color: "#737373",
            }}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}
