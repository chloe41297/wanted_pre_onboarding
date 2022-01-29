import logo from "./logo.svg";
import "./App.css";
import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Autocomplete from "./component/Autocomplete";

function App() {
  return (
    <div className="App">
      <Toggle></Toggle>
      <Modal></Modal>
      <Tab></Tab>
      <Tag></Tag>
      <Autocomplete></Autocomplete>
    </div>
  );
}

export default App;
