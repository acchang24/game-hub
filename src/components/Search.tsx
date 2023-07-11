import { useRef } from "react";
import "./Search.css";

const Search = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            console.log(ref.current.value);
          }
        }}
      >
        <input ref={ref} type="text" />
      </form>
    </>
  );
};

export default Search;
