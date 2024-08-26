import React, { useState } from "react";
import data from "../data/data.json";
import styles from "../css/Ex5.module.css";
import Ex5Table from "./Ex5Table";
function Ex5() {
  //let id = 2;
  const [id, setId] = useState(1);
  function setIdx(e) {
    //id = e.target.value;
    //console.log(e.target.value);
    setId(e.target.value);
  }
  return (
    <div>
      <ul className={styles.m_list}>
        {/* 메뉴 출력 */}
        {data.subject.map((sub) => (
          <li key={sub.id} onClick={setIdx} value={sub.id}>
            {sub.title}
          </li>
        ))}
      </ul>
      {/* Data 출력 */}
      <Ex5Table idx={id} />
    </div>
  );
}
export default Ex5;
