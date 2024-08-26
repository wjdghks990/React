import React, { useState } from "react";

// 단축키 rsc
const Ex1 = () => {
  const [txt, setTxt] = useState("");

  function setValue(e) {
    // const setValue = (e) => {
    // 입력값을 가져와서 setTxt통해서 txt변수에 넣겠다
    // re Rendering(화면 갱신)
    setTxt(e.target.value); // 이벤트를 발생시킨 타겟의 값
    console.log(txt);
  }

  return (
    <div>
      <p>Ex1화면</p>
      <input type="text" value={txt} onChange={setValue} />
      <br />
      <p>{txt}</p>
    </div>
  );
};

export default Ex1;
