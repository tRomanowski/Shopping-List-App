import './App.css';
import List from './components/List';
import AddItem from './components/AddItem';
import { itemDb } from './db.js';
import { useState } from 'react';

let nextID = 6;

function App() {
  const [items, setItems] = useState(itemDb);

  function handleDeleteItem(ItemId) {
    setItems(items.filter((item) => item._id !== ItemId));
  }

  function handleAdd(nameEn) {
    if (nameEn !== '') {
      setItems([
        ...items,
        {
          _id: 'c2hvcHBpbmcuaXRlbTo5' + nextID++,
          _type: 'shopping.item',
          category: { _type: 'ref', _ref: 'c2hvcHBpbmcuY2F0ZWdvcnk6MA==' },
          name: { en: nameEn, de: '' },
        },
      ]);
    }
  }
  return (
    <>
      <h1>Shopping List</h1>
      <List items={items} onDeleteItem={handleDeleteItem} />
      <h2>What do you wanna buy?</h2>
      <AddItem onAdd={handleAdd} />
    </>
  );
}

export default App;
