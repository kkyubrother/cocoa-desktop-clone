import UserImageListComponent from "@/app/my/UserImageListComponent";
import { LoremIpsum } from "lorem-ipsum"

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
export default function FriendListItemComponent(props: { name: string }) {
  return (
    <div>
      <div className={"row"} style={{
          cursor: "pointer"
      }}>
        <UserImageListComponent
          {...colors[Math.floor(Math.random() * colors.length)]}
        />
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
            {lorem.generateWords(5)}
          </p>
        </div>
      </div>
    </div>
  );
}
