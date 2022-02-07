import styled from "@emotion/styled";
import { useState } from "react";

const Toggle = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <section className="Wrapper">
      <h2 className="Title">Toggle</h2>
      <div className="Content">
        <ToggleContainer for="toggle">
          <ToggleInput
            type="checkbox"
            id="toggle"
            checked={checked}
            onChange={handleChange}
          ></ToggleInput>
          <ToggleBackground></ToggleBackground>
        </ToggleContainer>
        <div>{checked ? "Toggle Switch ON" : "Toggle Switch OFF"}</div>
      </div>
    </section>
  );
};

const ToggleContainer = styled.label`
  display: inline-block;
`;
const ToggleBackground = styled.div`
  width: 80px;
  height: 35px;
  padding: 5px 0px 0px 5px;
  border-radius: 20px;
  background-color: #dfe4ea;
  ::after {
    content: "";
    position: relative;
    left: 0;
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    transition: left 0.4s ease-in-out;
  }
`;
const ToggleInput = styled.input`
  display: none;
  &:checked + div {
    background-color: #596275;
  }
  &:checked + div:after {
    left: calc(100% - 35px);
  }
`;
export default Toggle;
