import Image from "next/image";
import Link from "next/link";

export default function FriendListItemComponent(props) {
  return (
    <div>
      <Link href={props?.link ?? "/chat"}>
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
      </Link>
    </div>
  );
}
