import styled from "@emotion/styled";
import { useState } from "react";

const Modal = () => {
  const [opened, setOpened] = useState(false);
  const handleOpen = () => {
    setOpened(true);
    document.body.style.overflow = "hidden";
  };
  const handleClose = (e) => {
    if (e.target.className.match("ModalClose")) setOpened(false);
    document.body.style.overflow = "unset";
  };
  return (
    <section className="Wrapper">
      <h2 className="Title">Modal</h2>
      <div className="Content">
        <ModalButton onClick={handleOpen}>Open Modal</ModalButton>
        {opened ? (
          <ModalBackground className="ModalClose" onClick={handleClose}>
            <ModalContainer>
              <div>
                Hello!
                <br /> "x"버튼이나 모달 바깥 영역을 클릭하여 창을 닫아 주세요!
              </div>
              <ModalClose className="ModalClose" onClick={handleClose}>
                X
              </ModalClose>
            </ModalContainer>
          </ModalBackground>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
const ModalButton = styled.button`
  border: none;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  color: whitesmoke;
  font-weight: 600;
  background-color: #e66767;
`;
const ModalBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: whitesmoke;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const ModalClose = styled.button`
  border: solid 1px rgba(0, 0, 0, 0.2);
  padding: 5px 8px;
  position: absolute;
  right: 8px;
  top: 8px;
  border-radius: 5px;
`;

export default Modal;
