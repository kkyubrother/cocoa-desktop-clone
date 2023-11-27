"use client";
import styles from "/app/my/page.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { durationConvert } from "../../util/converter";

export default function ExtraComponent({ title, children }) {
  const boxRef = useRef();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const height = window
      .getComputedStyle(boxRef.current)
      .getPropertyValue("height");
    const transition_duration = window
      .getComputedStyle(boxRef.current)
      .getPropertyValue("transition-duration");

    if (open) {
      boxRef.current.style.setProperty("display", "");
      const timer = setTimeout(() => {
        boxRef.current.style.setProperty("opacity", "1");
        boxRef.current.style.setProperty("margin-top", "0");
      }, 0);
      return () => {
        clearTimeout(timer);
      };
    } else {
      boxRef.current.style.setProperty("opacity", "0");
      boxRef.current.style.setProperty("margin-top", `-${height}`);
      const timer = setTimeout(() => {
        boxRef.current.style.setProperty("display", "none");
      }, durationConvert(transition_duration));
      return () => {
        clearTimeout(timer);
      };
    }
  }, [open]);

  return (
    <div>
      <div className={styles.component_header}>
        <h6 className={styles.component_header_title}>{title}</h6>
        <div
          className={styles.component_header_arrow_box}
          onClick={() => setOpen(!open)}
        >
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div ref={boxRef} className={styles.component_body}>
        {children}
      </div>
    </div>
  );
}
