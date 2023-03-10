import { DebounceInput } from "react-debounce-input";
import { HiSearch } from "react-icons/hi";
import { SearchContainer, HiddenBox, HiddenUsers } from "./style";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

export default function SearchBar() {

    const { token } = useContext(AuthContext);
    const [value, setValue] = useState();
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [debouncedValue, setDebouncedValue] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, 300);

        return () => {
            clearTimeout(timerId);
        };
    }, [value]);

    async function searchUsers() {
        if (debouncedValue.length >= 3) {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/user?username=${debouncedValue}`, {
                headers:
                  { Authorization: `Bearer ${token}` }
              });
            setUsers(data);
        } else {
            setUsers([]);
        }
    }

    function handleInputFocus() {
        setOpen(true);
    }
    
    return (
        <SearchContainer>
            <DebounceInput
                className="debounced-input"
                value={value}
                type="text"
                placeholder="Search for people"
                onChange={(e) => setValue(e.target.value)}
                onFocus={handleInputFocus}
                debounceTimeout={300}
                minLength={3}
            />
            <HiSearch
                className="icon"
                onClick={searchUsers}
                cursor="pointer"
            />

            <HiddenBox open={open}>
                {users.map(({ id, picture_url, username }) => (
                    <HiddenUsers key={id} onClick={() => {
                        navigate(`timeline/user/${id}`) 
                        setOpen(false)
                        }} 
                        cursor="pointer">
                        <img src={picture_url} alt="user profile pic" />
                        <h2>{username}</h2>
                    </HiddenUsers>
                ))}
            </HiddenBox>
        </SearchContainer>
    );
}

