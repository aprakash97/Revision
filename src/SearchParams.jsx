import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("");
  // const [count, setCount] = useState(0);
  // const location = "Colombo";
  // function handleClick(event) {
  //   event.preventDefault();
  //   setCount(count + 1);
  // }
  return (
    <div className="searchParams">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
