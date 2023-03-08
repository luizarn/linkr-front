import { DebounceInput } from "react-debounce-input";
import { HiSearch } from "react-icons/hi";
import { SearchContainer, HiddenBox, HiddenUsers } from "./style";
import { useState } from "react";

export default function SearchBar() {

    const [value, setValue] = useState();
    const [open, setOpen] = useState(false);

    const user = [
        {
            username: "Josias",
            url: "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
        },
        {
            username: "Josias",
            url: "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
        },
        {
            username: "Josias",
            url: "https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745"
        }
    ]

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

            <HiddenBox open={open}>
                {user.map(({ url, username }) => (
                    <HiddenUsers>
                        <img src={url} alt="" />
                        <h2>{username}</h2>
                    </HiddenUsers>
                ))}
            </HiddenBox>
        </SearchContainer>
    );
}

