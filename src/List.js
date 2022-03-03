import './List.css';

export default function List({ items, onDeleteItem }) {
  return (
    <ul className='shopping-list'>
      {items.map((item) => {
        return (
          <li className='shopping-list__item' key={item._id}>
            <button onClick={() => onDeleteItem(item._id)}>
              {item.name.en}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
