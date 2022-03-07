import './searchbar.css';
import { useState } from 'react';

export default function Searchbar({ items, onAddToList }) {
  const [searchinput, setSearchInput] = useState('');

  let filterdItems = items.filter((item) => {
    return item.name.en.toLowerCase().match(searchinput.toLowerCase());
  });

  return (
    <section className='searchSection'>
      <label htmlFor='searchbar'>What do you wanna buy?</label>
      <input
        id='searchbar'
        type='text'
        className='searchbar'
        placeholder='Search...'
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchinput}
      />
      {searchinput && (
        <ul className='searchList'>
          {filterdItems.map((item) => {
            return (
              <li key={item._id} className='searchItem'>
                <button onClick={() => onAddToList(item)}>
                  {item.name.en}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
