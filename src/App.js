import './App.css';
import { useState } from 'react';
import CustomForm from './components/CustomForm';
import List from './components/List';
import CustomList from './components/CustomList';
import generateData from './nestedMockData';

function App() {
  const [customList, setCustomList] = useState();

  function createCustomList(depth, number){
    setCustomList(generateData(depth, number));
  }

  return (
    <div className="app">
      <h2>Custom List</h2>
      <CustomForm submit={createCustomList}/>
      {customList && <CustomList list = {JSON.parse(customList)}/>}
      <h2>Countries List</h2>
      <List />
    </div>
  );
}

export default App;
