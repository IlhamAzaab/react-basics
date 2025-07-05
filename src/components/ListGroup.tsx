import { useState } from "react";
interface Props {
  items: string[];
  heading: string[];
  onSelectItem: (items: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading[1]}</h1>
      {/* if no item in the item list print this otherwise display the items */}
      {items.length == 0 && <p>No item found</p>}
      {items.length == 0 && (
        <div className="alert alert-danger" role="alert">
          Danger
        </div>
      )}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(items);
            }}
          >
            {index+1} {items}
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <div className="alert alert-success" role="alert">
          Fine
        </div>
      )}

    </>
  );
}

export default ListGroup;
