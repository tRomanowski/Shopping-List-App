import './searchbar.css';
import { useState } from 'react';

export default function Searchbar({ items }) {
  const [searchinput, setSearchInput] = useState('');

  //   let filterdItems = items.filter((item) => {
  //     return item.name.en.match(searchinput);
  //   });

  return (
    <section className='searchSection'>
      <label htmlFor='searchbar'>What do you wanna buy?</label>
      <input
        id='searchbar'
        type='search'
        className='searchbar'
        placeholder='Search...'
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchinput}
      ></input>
      <ul className='searchList'>
        {items
          .filter((item) => {
            return item.name.en.match(searchinput);
          })
          .map((item) => {
            return (
              <li key={item._id} className='searchItem'>
                <button>{item.name.en}</button>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
