import { useState } from "react";

const SearchParams = () => {
  // const [location, setLocation] = useState("sdfs");
  const [count, setCount] = useState(0);

  function handleClick(event) {
    event.preventDefault();
    setCount(count + 1);
  }

  return (
    <div className="searchParams">
      {/* <form>
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
      </form> */}
      <form onSubmit={handleClick}>
        {/* <p> {count} </p>
        <button onClick={handleClick}>Update</button> */}
        <p>You clicked {count} times</p>
        <button>Click me</button>
      </form>
    </div>
  );
};

export default SearchParams;
