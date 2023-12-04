import Image from "next/image";
import Link from "next/link";

export default function FriendListItemComponent(props) {
  return (
    <div>
      <Link href={props?.link ?? "/chat"}>
        <div
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
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
                width: "100%",
                lineHeight: "2rem",
                overflowX: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: "calc(100vw - 100px - 60px)",
              }}
            >
              {props.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
