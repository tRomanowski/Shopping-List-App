import './App.css';

import List from './List';

const shoppingList = [
  {
    id: 0,
    name: 'Eggs',
    number: 12,
    inCart: false,
  },
  {
    id: 1,
    name: 'Milk',
    number: 8,
    inCart: false,
  },
  {
    id: 2,
    name: 'Flour',
    number: 1,
    inCart: false,
  },
];

function App() {
  return (
    <>
      <h1>Shopping List</h1>
    </>
  );
}

export default App;
