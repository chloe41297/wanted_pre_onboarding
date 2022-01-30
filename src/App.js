import "./App.css";

import {
  Toggle,
  Modal,
  Tab,
  Tag,
  Autocomplete,
  ClickToEdit,
} from "./component";

function App() {
  return (
    <div className="App">
      <Toggle></Toggle>
      <Modal></Modal>
      <Tab></Tab>
      <Tag></Tag>
      <Autocomplete></Autocomplete>
      <ClickToEdit></ClickToEdit>
    </div>
  );
}

export default App;
