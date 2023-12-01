import IconApple from "/public/img/apple.png";
import IconSamsung from "/public/img/samsung.png";
import IconBurgerking from "/public/img/burgerking.png";
import IconPython from "/public/icon/python.png";
import ReactIcon from "/public/icon/react.png";
import CSS3Icon from "/public/icon/css3.png";
import HTML5Icon from "/public/icon/html5.png";
import JavascriptIcon from "/public/icon/javascript.png";
import MariaDBIcon from "/public/icon/mariadb.png";
import NestJSIcon from "/public/icon/NestJS.svg";
import NextJSIcon from "/public/icon/nextjs.svg";
import NginxIcon from "/public/icon/nginx.png";
import NodeIcon from "/public/icon/node.png";
import UbuntuIcon from "/public/icon/ubuntu.png";
import Man1 from "/public/img/person/man-1.jpg";
import Man2 from "/public/img/person/man-2.jpg";
import Man3 from "/public/img/person/man-3.jpg";
import Woman1 from "/public/img/person/woman-1.jpg";
import QuestionMark from "/public/icon/question_mark.png";
import StudyIcon from "/public/icon/study.png";
import FlaskIcon from "/public/icon/flask.png";
import LectureIcon from "/public/icon/lecture.png";
import FastAPIIcon from "/public/icon/fastapi.png";
import CocoaIcon from "/public/icon/cocoa.png";

/**
 *
 * @param name {string}
 * @param nullToQuestion {boolean}
 * @return {*|null}
 */
export function getIcon(name, nullToQuestion = false) {
  switch (name) {
    case "apple":
      return IconApple;
    case "samsung":
      return IconSamsung;
    case "burgerking":
      return IconBurgerking;
    case "python":
      return IconPython;
    case "react":
      return ReactIcon;
    case "css3":
      return CSS3Icon;
    case "html5":
      return HTML5Icon;
    case "javascript":
      return JavascriptIcon;
    case "mariadb":
      return MariaDBIcon;
    case "NestJS":
      return NestJSIcon;
    case "nextjs":
      return NextJSIcon;
    case "nginx":
      return NginxIcon;
    case "node":
      return NodeIcon;
    case "ubuntu":
      return UbuntuIcon;
    case "man1":
    case "demo":
      return Man1;
    case "man2":
    case "demo1":
      return Man2;
    case "man3":
    case "demo2":
      return Man3;
    case "woman1":
    case "demo3":
      return Woman1;
    case "study":
      return StudyIcon;
    case "flask":
      return FlaskIcon;
    case "lecture":
      return LectureIcon;
    case "fastapi":
      return FastAPIIcon;
    case "cocoa":
      return CocoaIcon;
    default:
      return nullToQuestion ? QuestionMark : null;
  }
}
