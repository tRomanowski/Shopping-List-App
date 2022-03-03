import './AddItem.css';
import { useState } from 'react';

export default function AddItem({ onAdd }) {
  const [nameEn, setNameEn] = useState('');
  return (
    <section className='addSection'>
      <input
        placeholder='Add article'
        value={nameEn}
        onChange={(e) => setNameEn(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setNameEn('');
          onAdd(nameEn);
        }}
      >
        Add
      </button>
    </section>
  );
}
