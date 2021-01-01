import React from "react";
import classNames from "classnames";
import styles from "./CSSModule.module.scss";

const cx = classNames.bind(styles); //미리 styles에서 클래스를 받아 오도록 설정하고

const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      {/* className={[styles.wrapper, styles.inverted].join(' ')} */}
      안녕하세요 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
