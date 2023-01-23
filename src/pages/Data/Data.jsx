import { useState,useEffect } from "react";
import SingleData from "./SingleData";


const Data = () => {
    const [users,setUsers]=useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUser();
    }, []);
    
    return (
        <div>
            {
                users.map(user => <SingleData key={user.id} user={ user} />)
            }
        </div>
    );
};

export default Data;