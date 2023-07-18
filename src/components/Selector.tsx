import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./css/Selector.css";

// Props to pass in list data as well as selected item's name
interface Props<T> {
  data: { id: number; name: string; }[] | undefined;
  selectedName: string;
  onSelect: (item: T) => void;
}

// Selector component returns a dropdown list
const Selector = <T,>({ data, selectedName, onSelect }: Props<T>) => {
  // Keep track of when to show list items
  const [itemsShown, setItemsShown] = useState<boolean>(false);

  // Reference dropdown div
  const ref = useRef<HTMLDivElement>(null);

  // Handles clicks outside of the dropdown menu and hides it
  const clickOutside = (ref: any) => {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setItemsShown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      // Unbind the event listener on clean up
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  // Pass in the ref to the click function
  clickOutside(ref);

  return (
    <div ref={ref} className="selector">
      <button
        className="selector-btn"
        onClick={() => {
          setItemsShown(!itemsShown);
        }}
      >
        <div className="item-selector">
          <div>{selectedName}</div>
          <div className="chevron-icon">
            <BsChevronDown></BsChevronDown>
          </div>
        </div>
      </button>
      {itemsShown && (
        <div className="item-dropdown">
          <ul className="item-list">
            <li key={0}>
              <button
                className="item-btn"
                onClick={() => {
                  // Pass selected item to App component
                  onSelect({} as T);
                  setItemsShown(false);
                }}
              >
                <div>None</div>
              </button>
            </li>
            {data?.map((item) => {
              return (
                <li key={item.id}>
                  <button
                    className="item-btn"
                    onClick={() => {
                      // Pass selected item to App component
                      onSelect(item as T);
                      setItemsShown(false);
                    }}
                  >
                    <div>{item.name}</div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Selector;
