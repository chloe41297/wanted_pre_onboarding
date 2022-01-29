import styled from "@emotion/styled";
import { useState } from "react";

const Tag = () => {
  const [tags, setTags] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTags([...tags, e.target.tagInput.value]);
    e.target.tagInput.value = "";
  };
  const handleClick = (idx) => {
    tags.splice(idx, 1);
    setTags([...tags]);
  };

  return (
    <section className="Wrapper">
      <h2 className="Title">Tag</h2>
      <div className="Content">
        <InputBox onSubmit={handleSubmit}>
          <TagUl>
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
          />
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
`;
const Input = styled.input`
  border: none;
  font-size: 20px;
  height: 48px;
  :focus {
    outline: none;
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
  margin: 0px 2px;
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
export default Tag;