//import React, { useState } from "react";
import data from "../data/data.json";
import styles from "../css/Ex5.module.css";
function Ex5Table(prop) {
  //const [langId, setLandId] = useState(prop.idx);
  const lang_list = data.lang.filter((lang) => lang.subject === prop.idx);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>교과목</th>
          <th>난이도</th>
        </tr>
      </thead>
      <tbody>
        {lang_list.map((lang) => (
          <tr key={lang.id}>
            <td>{lang.title}</td>
            <td>{lang.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Ex5Table;
