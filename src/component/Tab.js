import styled from "@emotion/styled";
import { useState } from "react";

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const TabData = [
    { idx: 0, title: "Tab1", content: "This is First Tab" },
    { idx: 1, title: "Tab2", content: "This is Second Tab" },
    { idx: 2, title: "Tab3", content: "This is Third Tab" },
  ];

  const handleClick = (idx) => {
    setCurrentTab(idx);
  };
  return (
    <section className="Wrapper">
      <h2 className="Title">Tab</h2>
      <div className="Content">
        <TabLists>
          {TabData.map((list, idx) => (
            <TabList
              key={idx}
              onClick={() => handleClick(idx)}
              style={{
                backgroundColor: currentTab === idx ? "#f9ca24" : "",
                color: currentTab === idx ? "white" : "rgba(0,0,0,0.3)",
              }}
            >
              {list.title}
            </TabList>
          ))}
        </TabLists>
        <ContentLists>
          {TabData.map((list) =>
            list.idx === currentTab ? (
              <ContentList key={list.idx}>{list.content}</ContentList>
            ) : (
              " "
            )
          )}
        </ContentLists>
      </div>
    </section>
  );
};
const TabLists = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  list-style: none;
  margin-bottom: 0;
`;
const TabList = styled.li`
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #f6e58d;
  font-weight: 700;
  margin-bottom: 0;
`;
const ContentLists = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 0;
`;
const ContentList = styled.li`
  margin-top: 0;
  width: 600px;
  height: 200px;
  line-height: 200px;
  text-align: center;
`;
export default Tab;
