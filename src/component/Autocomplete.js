import styled from "@emotion/styled";
import { useState } from "react";

const Autocomplete = () => {
  const [searchResult, setSearchResult] = useState([]);
  const data = [
    "apple",
    "Alaska",
    "Arizona",
    "aspanea",
    "art",
    "artist",
    "adidas",
    "alligator",
    "banana",
    "brain",
    "chris",
    "denmark",
    "egg",
    "france",
    "grape",
    "holland",
    "Korea",
    "bibim-bap",
    "bistro",
    "wanted",
    "want",
  ];
  const matchName = (name, keyword) => {
    name = name.toLowerCase().substring(0, keyword.length);
    if (keyword === "") return false;
    return name === keyword.toString().toLowerCase();
  };
  const handleChange = (e) => {
    const result = data
      .filter((item) => matchName(item, e.target.value))
      .sort((a, b) => a.length - b.length);
    setSearchResult(result);
  };

  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector(".searchInput").value = "";
  };
  return (
    <section className="Wrapper">
      <h2 className="Title">Auto Complete</h2>
      <div className="Content">
        <Form>
          <Input className="searchInput" onChange={handleChange}></Input>
          <DeletBtn onClick={handleClick}>x</DeletBtn>
        </Form>
        {searchResult?.map((list, idx) => (
          <div key={idx}>{list}</div>
        ))}
      </div>
    </section>
  );
};
const Form = styled.form`
  position: relative;
`;
const Input = styled.input`
  width: 580px;
  height: 50px;
  padding-left: 20px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 18px;
  :focus {
    outline: none;
  }
`;
const DeletBtn = styled.button`
  position: absolute;
  top: 13px;
  right: 15px;
  border: none;
  font-size: 20px;
  background: none;
`;
export default Autocomplete;
