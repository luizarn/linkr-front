import { DebounceInput } from "react-debounce-input";
import { HiSearch } from "react-icons/hi";
import { SearchContainer, HiddenBox } from "./style";
import { useState } from "react";

export default function SearchBar() {

    const [value, setValue] = useState();
    const [open, setOpen] = useState(false);

    const handleSearchIconClick = () => {
        setOpen((prevState) => !prevState);
      };

    return (
      <SearchContainer>
        <DebounceInput
          className="debounced-input"
          value={value}
          type="text"
          placeholder="Search for people"
          onChange={(e) => setValue(e.target.value)}
          debounceTimeout={300}
        />
        <HiSearch 
            className="icon"
            onClick={handleSearchIconClick}
        />
        
        <HiddenBox open={open} />
      </SearchContainer>
    );
}

