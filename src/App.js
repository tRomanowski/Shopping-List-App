import './App.css';
import List from './List';
import { itemDb } from './db.js';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(itemDb);

  function handleDeleteItem(ItemId) {
    setItems(items.filter((item) => item._id !== ItemId));
  }

  return (
    <>
      <h1>Shopping List</h1>
      <List items={items} onDeleteItem={handleDeleteItem} />
    </>
  );
}

export default App;
