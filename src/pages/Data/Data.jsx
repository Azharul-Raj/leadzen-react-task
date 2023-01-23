import { useEffect } from "react";
import { useState } from "react";


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
    console.log(users);
    return (
        <div>
            
        </div>
    );
};

export default Data;