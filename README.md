# Cocoa Desktop Clone
카카오 데스크탑 클론 코딩입니다. [데모](https://cocoa.kesuna.com/)
## 로그인
* id: demo1@demo.com
* pw: demo123!

* id: demo2@demo.com
* pw: demo123!

* id: demo3@demo.com
* pw: demo123!


# 페이지
* 로그인 페이지
* 친구 목록 페이지
* 채팅 목록 페이지
* 채팅 페이지


## 🚩 1.0.0을 만들며 느낀점
* Next.js를 사용하여 웹사이트를 제작하였습니다.
* 빠르게 코드를 작성함에 있어서 Typescript의 데이터 형 맞추는 것이 되려 어려웠습니다.
  * Frontend만 있는 웹페이지는 Javascript로 만들어도 Backend까지 포함된다면 Typescript가 유리하다고 생각됩니다(데이터 타입 일치, IDE 문법 힌트 등).

## ✨ ~~2.0.0을 만든다면 해보고 싶은 것~~ -> 2.0.0을 만들고 느낀 것
* [x] Backend를 만들어서 연동하기
  * Nextjs를 통한 Backend 기능을 사용해보며 API 설계에 대한 경험을 하였습니다.
* [x] Input 기능들을 실제로 구현하기
  * ~~현재는 serverAction 기능이 실험적~~([출처](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations))
  * pages 기능을 통하여 작성
  * 채팅 메시지를 보내고 받을 수 있음
    * 현재 일정 주기마다 서버에 새로운 메시지를 확인하도록 작성하였습니다(`setInterval()` 활용).
* [x] CSS를 작성하여 자연스러운 애니메이션 효과 삽입
* [x] Next-Auth를 활용하여 실제 로그인 기능 구현
  * 사용자 확인 후 접근 불가능한 페이지를 `redirect()` 처리하였습니다.

## ✨ 3.0.0을 만든다면 해보고 싶은 것
* 프로필 페이지를 추가해보고 싶습니다.
* 새로운 메시지를 확인하는 것을 `setInterval()` 대신 `Websocket`을 활용해보고 싶습니다.

# 출처
## 아이콘
* <a href="https://www.flaticon.com/kr/free-icons/" title="파이썬 아이콘">파이썬 아이콘  제작자: Freepik - Flaticon</a>
* [Flatart](https://www.iconfinder.com/Flatart)
* [Iconfinder](https://www.iconfinder.com/iconfinder)
* [MariaDB](https://mariadb.com/ko/about-us/logos/)
* [StickPNG](https://www.stickpng.com/img/icons-logos-emojis/shop-logos/next-logo)

## 얼굴
* Pixabay
  * <a href="https://pixabay.com/ko//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1836445">Pixabay</a>로부터 입수된 <a href="https://pixabay.com/ko/users/pexels-2286921/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1836445">Pexels</a>님의 이미지 입니다.
  * <a href="https://pixabay.com/ko//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3353699">Pixabay</a>로부터 입수된 <a href="https://pixabay.com/ko/users/erik_lucatero-8817894/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3353699">Erik Lucatero</a>님의 이미지 입니다.
  * <a href="https://pixabay.com/ko//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=597173">Pixabay</a>로부터 입수된 <a href="https://pixabay.com/ko/users/snapwiresnaps-692569/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=597173">SnapwireSnaps</a>님의 이미지 입니다.