import React from "react";
import styles from "../styles/CSSModule.module.css";
const CSSModule = () => {
  return (
    // css 파일 내부에 wrapper 가 많으면
    // css 파일 별로 관리
    // CSSModule > module.css
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
