import styles from "@/app/my/page.module.css";
import UserImageComponent from "@/app/UserImageComponent";
import { LoremIpsum } from "lorem-ipsum";
import FriendListItemComponent from "@/app/my/FriendListItemComponent";
import AsideComponent from "@/app/common/AsideComponent";

const lorem = new LoremIpsum({});
const friends_count = Math.floor(Math.random() * 30);

const names = [
  "표재정",
  "장연희",
  "풍성윤",
  "허다연",
  "송수아",
  "풍승아",
  "제갈효주",
  "복형수",
  "임경희",
  "복혜훈",
  "전수희",
  "송희옥",
  "성윤아",
  "노동석",
  "탁선옥",
  "권혜자",
  "최원호",
  "제갈희수",
  "고수경",
  "최유연",
  "한기우",
  "권창수",
  "설영아",
  "황승수",
  "조효진",
  "유승현",
  "한준철",
  "설승식",
  "탁태주",
  "추기연",
];
export default function My() {
  return (
    <main className={styles.main}>
      <AsideComponent page={"/my"} />
      <div
        className={"container " + styles.main}
        style={{
          paddingLeft: "90px",
        }}
      >
        <h3 className={"row"}>친구</h3>
        <div className={"row"}>
          <UserImageComponent />
          <div
            style={{
              lineHeight: "1rem",
              height: "60px",
              paddingBlock: "1rem",
              marginLeft: "10px",
            }}
          >
            <p style={{ fontWeight: 600 }}>김규형</p>
            <p
              style={{
                color: "#737373",
              }}
            >
              {"Don't rest until you reach your goal!"}
              {}
            </p>
          </div>
        </div>
        <hr />
        <h4>{`친구 ${friends_count}`}</h4>
        {getRandomElements(names, friends_count).map((n) => (
          <FriendListItemComponent key={n} name={n} />
        ))}
      </div>
    </main>
  );
}

function getRandomElements(arr: string[], num: number) {
  const randomElements = [];
  const arrCopy = arr.slice(); // 원본 배열 복사

  while (randomElements.length < num && arrCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * arrCopy.length);
    const randomElement = arrCopy.splice(randomIndex, 1)[0];
    randomElements.push(randomElement);
  }

  return randomElements;
}
