import styled from "@emotion/styled";
import { useState } from "react";

const ClickToEdit = () => {
  const [titleName, setTitleName] = useState("");
  const [titleAge, setTitleAge] = useState("");
  const [state, setState] = useState(["_____", "_____"]);
  const handleClick = (e) => {
    const name = titleName.length ? titleName : "_____";
    const age = titleAge.length ? titleAge : "_____";
    setState([name, age]);
  };
  return (
    <section className="Wrapper">
      <h2 className="Title">Click to Edit</h2>
      <div className="Content" onClick={handleClick}>
        <form>
          <InputContainer>
            <InputTitle>이름</InputTitle>
            <InputBox
              type="text"
              value={titleName}
              onChange={(e) => {
                setTitleName(e.target.value);
              }}
            ></InputBox>
          </InputContainer>
          <InputContainer>
            <InputTitle>나이</InputTitle>
            <InputBox
              type="number"
              value={titleAge}
              onChange={(e) => {
                setTitleAge(e.target.value);
              }}
            ></InputBox>
          </InputContainer>
        </form>
        <div>
          이름 <strong>{state[0]}</strong> 나이 <strong>{state[1]}</strong>
        </div>
      </div>
    </section>
  );
};
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputTitle = styled.h4`
  margin-right: 20px;
`;
const InputBox = styled.input`
  width: 230px;
  height: 30px;
  padding-left: 20px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
export default ClickToEdit;
