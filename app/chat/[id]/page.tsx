import UserImageComponent from "@/app/UserImageComponent";
import {
  BsTelephone,
  BsCameraVideo,
  BsList,
  BsSearch,
  BsCalendar3,
  BsEmojiSmile,
  BsCalendarCheck,
  BsClock,
  BsPaperclip
} from "react-icons/bs"
import {BiSolidUser} from "react-icons/bi"
import {TbCapture} from "react-icons/tb"
import style from "@/app/chat/[id]/page.module.css"

type ChatIDPageType = {
  params: { id: string }
}
export default function Page(props: ChatIDPageType) {
  return <main style={{backgroundColor: "#bacee0", width: "100vw", height: "100vh"}}>
    <header style={{display: "flex", flexDirection: "row", padding: "3rem 1rem"}}>
      <UserImageComponent/>
      <div style={{display: "flex", flexDirection: "column", paddingLeft: "1rem", flexGrow: 1}}>
        <div>김규형</div>
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}><BiSolidUser/>
          <div>2</div>
        </div>
      </div>
      <div style={{
        fontSize: "2.5rem",
        color: "gray",
        display: "flex",
        flexDirection: "row",
        minWidth: "120px",
        alignItems: "flex-end",
        justifyContent: "space-between"
      }}><BsSearch/><BsTelephone/><BsCameraVideo/><BsList/></div>
    </header>
    <section>
      <ol style={{listStyle: "none", padding: 0}}>
        <li style={{display: "flex", justifyContent: "center"}}>
          <div style={{backgroundColor: "#a7b9c9", borderRadius: "50px", padding: "3px 20px", display: "flex", alignItems: "center"}}>
            <BsCalendar3/>2023년 1월 1일
            일요일
          </div>
        </li>
        <li>
          <div style={{display: "flex", flexDirection: "row", marginLeft: "1rem"}}>
            <UserImageComponent/>
            <div>
              <div>김규형</div>
              <div style={{
                padding: "1rem"
              }} className={style.bubble}>저장한 메세지
              </div>
            </div>
            <div style={{display: "flex", alignItems: "flex-end"}}>오후 1:01</div>
          </div>
        </li>
        <li>
          <div style={{display: "flex", flexDirection: "row-reverse", marginRight: "3rem"}}>
            <div>
              <div className={style.reverse_bubble}>저장한 메세지</div>
            </div>
            <div style={{display: "flex", alignItems: "flex-end", paddingRight: "1rem"}}>오후 5:01</div>
          </div>
        </li>
      </ol>
    </section>
    <footer style={{position: "fixed", bottom: 0, width: "100%"}}>
      <div><textarea style={{
        width: "100%",
        minHeight: "10rem",
        resize: "none"
      }}/></div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <div style={{
          fontSize: "2rem", minWidth: "15rem", display: "flex", justifyContent: "space-between",
          color: "gray", padding: "1rem"
        }}><BsEmojiSmile/><BsCalendarCheck/><BsClock/><BsPaperclip style={{transform: "rotate(45deg)"}}/><TbCapture/>
        </div>
        <div style={{display: "flex", flexDirection: "row"}}>
          <input type={"range"} style={{
            maxWidth: "5rem",
            marginRight: "1rem"
          }}/>
          <button style={{
            padding: 0,
            minWidth: "5rem"
          }} className={style.btn_send}>전송
          </button>
        </div>
      </div>
    </footer>
  </main>
}