import React, { useState } from "react";

// 단축키 rsc
const Ex3 = () => {
  // 변하는 값을 쉽게 반영하기 위해 사용
  const [vo, setVo] = useState({
    name: "",
    email: "",
    tel: "",
  });

  // destruction
  const { name, email, tel } = vo;
  // name  = vo.name
  // email = vo.email
  // tel   = vo.tel

  function setNameValue(e) {
    // const setValue = (e) => {
    let value = e.target.value;

    // vo.name = value; ok, 하지만 재렌더링이 되지는 않는다.
    // useState에 선언된 Setter를 이용해서 값을 변경해야 re Rendering이 일어난다.
    setVo({
      ...vo, // 스프레이드 속성이라 한다. vo 를 하나 복사해 놓는 개념
      name: value,
    });
  }
  function setEmailValue(e) {
    // const setValue = (e) => {
    let value = e.target.value;
    // useState에 선언된 Setter를 이용해서 값을 변경해야 re Rendering이 일어난다.
    setVo({
      ...vo, // 스프레이드 속성이라 한다. vo 를 하나 복사해 놓는 개념
      email: value,
    });
  }
  function setTelValue(e) {
    // const setValue = (e) => {
    let value = e.target.value;
    // useState에 선언된 Setter를 이용해서 값을 변경해야 re Rendering이 일어난다.
    setVo({
      ...vo, // 스프레이드 속성이라 한다. vo 를 하나 복사해 놓는 개념
      tel: value,
    });
  }

  return (
    <div>
      <p>이벤트 분리</p>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={setNameValue} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={setEmailValue} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={setTelValue} />
      </div>
      <p> 이름: {name}</p>
      <p> 이메일: {email}</p>
      <p> 전화번호: {tel}</p>
    </div>
  );
};

export default Ex3;
