import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  // const [count, setCount] = useState(0);
  // const location = "Colombo";
  // function handleClick(event) {
  //   event.preventDefault();
  //   setCount(count + 1);
  // }
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = ["adda"];

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
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="animal"
            value={breed}
            disabled={breeds.length === 0}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
