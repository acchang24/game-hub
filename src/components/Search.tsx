import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import useGameQueryStore from "../store";
import "./css/Search.css";

// Returns a search bar for searching games by name
const Search = () => {
  // useRef to keep track of search inputs
  const searchRef = useRef<HTMLInputElement>(null);

  // useState to keep track whether or not the search field is filled out
  const [searchFilled, setSearchFilled] = useState<boolean>(false);

  // Select the state and store setSearchText as a function
  const setSearchText = useGameQueryStore((state) => state.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        // Prevent reloads
        event.preventDefault();
        if (searchRef.current) {
          // If ref is not null, set the state's search text to the input
          setSearchText(searchRef.current.value);
        }
      }}
    >
      <div className="input-group">
        <BsSearch className="icon icon-search"></BsSearch>
        <input
          ref={searchRef}
          className="input"
          placeholder="Search Games..."
          type="text"
          onChange={() => {
            // Keep track of if the input field is empty or not
            if (searchRef.current) {
              if (searchRef.current.value.length > 0) {
                setSearchFilled(true);
              } else if (searchRef.current.value.length === 0) {
                setSearchFilled(false);
              }
            }
          }}
        />
        {/* Show an x icon when input is filled */}
        {searchFilled && (
          <IoMdClose
            className="icon icon-close"
            onClick={() => {
              // Clear the text and continue focusing the input field
              if (searchRef.current) {
                searchRef.current.value = "";
                searchRef.current.focus();
              }
              setSearchFilled(false);
            }}
          ></IoMdClose>
        )}
      </div>
    </form>
  );
};

export default Search;
