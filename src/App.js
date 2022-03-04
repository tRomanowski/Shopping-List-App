import './App.css';
import List from './components/List';
//import AddItem from './components/AddItem';
import Searchbar from './components/Searchbar';
//import { itemDb } from './db.js';
import { useState, useEffect } from 'react';

//let nextID = 6;

function App() {
  const [items, setItems] = useState(loadFromLocal('items') ?? []);

  useEffect(() => {
    fetch('https://fetch-me.vercel.app/api/shopping/items')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data.data);
      });
  }, []);

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  useEffect(() => {
    saveToLocal('items', items);
  }, [items]);

  function handleDeleteItem(ItemId) {
    setItems(items.filter((item) => item._id !== ItemId));
  }
  /* --->if an item shall be added manually<---
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
  */

  return (
    <>
      <h1>Shopping List</h1>
      <List items={items} onDeleteItem={handleDeleteItem} />
      <h2>What do you wanna buy?</h2>
      <Searchbar />
      {/*<AddItem onAdd={handleAdd} />*/}
    </>
  );
}

export default App;
