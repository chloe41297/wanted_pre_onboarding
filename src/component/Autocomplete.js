import styled from "@emotion/styled";
import { useState } from "react";

const Autocomplete = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [currentType, setCurrentType] = useState("");
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
    setCurrentType(e.target.value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    setCurrentType("");
  };
  const handleComplete = (list) => {
    setCurrentType(list);
    setSearchResult([]);
  };
  return (
    <section className="Wrapper">
      <h2 className="Title">Auto Complete</h2>
      <div className="Content">
        <Form>
          <Input
            className="searchInput"
            onChange={handleChange}
            value={currentType}
          ></Input>
          <DeletBtn onClick={handleDelete}>x</DeletBtn>
        </Form>
        <Results>
          {searchResult?.map((list, idx) => (
            <Result key={idx} onClick={() => handleComplete(list)}>
              {list}
            </Result>
          ))}
        </Results>
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
const Results = styled.ul`
  list-style: none;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Result = styled.li`
  text-align: start;
  width: 580px;
  padding: 5px 0px 5px 20px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
export default Autocomplete;
