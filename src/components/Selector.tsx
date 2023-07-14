import { useEffect, useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "./Selector.css";

// Props to pass in list data as well as placeholder info
interface Props {
  data: { id: number; name: string }[];
  placeHolder: string;
  onSelect: (platform: string) => void;
}

// Selector component returns a dropdown list
const Selector = ({ data, placeHolder, onSelect }: Props) => {
  // Keep track of when to show list items, and the currently selected item
  const [itemsShown, setItemsShown] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");

  // Reference dropdown div
  const ref = useRef<HTMLDivElement>(null);

  // Handles clicks outside of the platforms div and hides it
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
          <div>{selectedItem === "" ? placeHolder : selectedItem}</div>
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
                  // Set selected item to empty string and pass to App component
                  setSelectedItem("");
                  onSelect("");
                  setItemsShown(false);
                }}
              >
                <div>None</div>
              </button>
            </li>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  <button
                    className="item-btn"
                    onClick={() => {
                       // Set selected item and pass to App component
                      setSelectedItem(item.name);
                      onSelect(item.name);
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
