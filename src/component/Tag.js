import styled from "@emotion/styled";
import { useState } from "react";

const Tag = () => {
  const [tags, setTags] = useState([]);
  const maxLength = 3;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags.length < maxLength) {
      setTags([...tags, e.target.tagInput.value]);
      e.target.tagInput.value = "";
    }
  };
  const handleClick = (idx) => {
    tags.splice(idx, 1);
    setTags([...tags]);
  };
  const tagWidth = tags.length
    ? document.querySelector(".tag-container").offsetWidth
    : 0;

  return (
    <section className="Wrapper">
      <h2 className="Title">Tag</h2>
      <div className="Content">
        <InputBox onSubmit={handleSubmit}>
          <TagUl className="tag-container">
            {tags?.map((list, idx) => (
              <TagLi key={idx}>
                <TagContent>{list}</TagContent>
                <TagDelte onClick={() => handleClick(idx)}>x</TagDelte>
              </TagLi>
            ))}
          </TagUl>
          <Input
            name="tagInput"
            type="text"
            placeholder="press enter to add tag"
            style={{ width: `calc(580px - ${tagWidth}px)` }}
            disabled={tags.length >= 3 ? true : false}
          />
          {tags.length === 3 ? (
            <AlertTag>3개까지 입력이 가능합니다.</AlertTag>
          ) : (
            ""
          )}
        </InputBox>
      </div>
    </section>
  );
};

const InputBox = styled.form`
  width: 600px;
  height: 50px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  position: relative;
`;
const Input = styled.input`
  border: none;
  font-size: 20px;
  height: 48px;
  :focus {
    outline: none;
    background: none;
  }
`;

const TagUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  padding-left: 0;
`;
const TagLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6ab04c;
  padding: 4px;
  border-radius: 5px;
  margin: 0px 4px 0px 0px;
  white-space: nowrap;
  /* text-overflow: "-"; */
`;
const TagContent = styled.div`
  color: white;
`;

const TagDelte = styled.div`
  color: grey;
  width: 16px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 50%;
  background: white;
  margin-left: 4px;
`;
const AlertTag = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 60px;
  left: 20px;
  padding: 2px;
  border-radius: 5px;
  :after {
    content: "";
    position: absolute;
    top: -10px;
    left: 0%;
    margin-left: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.2) transparent;
  }
`;
export default Tag;
