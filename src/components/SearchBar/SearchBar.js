import { DebounceInput } from "react-debounce-input";
import { HiSearch } from "react-icons/hi";
import { SearchContainer, HiddenBox, HiddenUsers } from "./style";
import { useState, useEffect } from "react";

export default function SearchBar() {

    const [value, setValue] = useState();
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [debouncedValue, setDebouncedValue] = useState('');

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
    ];

    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //       setDebouncedValue(value);
    //     }, 300);

    //     return () => {
    //         clearTimeout(timerId);
    //       };
    //     }, [value]);    

    //     useEffect(() => {
    //         async function searchUsers() {
    //           if (debouncedValue.length >= 3) {
    //             const { data } = await axios.get(`/users?search=${debouncedValue}`);
    //             setUsers(data);
    //           } else {
    //             setUsers([]);
    //           }
    //         }
    //         searchUsers();
    //     }, [debouncedValue]); 

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
                minLength={3}
            />
            <HiSearch
                className="icon"
                onClick={handleSearchIconClick}
            />

            <HiddenBox open={open}>
                {/* {users.map(({pictureUrl, username}) => (
                    <HiddenUsers>
                        <img src={pictureUrl} alt="" />
                        <h2>{username}</h2>
                    </HiddenUsers>
                ))} */}
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

