import './AddItem.css';
import { useState } from 'react';

export default function AddItem({ onAdd }) {
  const [nameen, setNameen] = useState('');
  return (
    <section>
      <input
        placeholder='Add article'
        value={nameen}
        onChange={(e) => setNameen(e.target.value)}
      ></input>
      <button
        onClick={() => {
          setNameen('');
          onAdd(nameen);
        }}
      >
        Add
      </button>
    </section>
  );
}
