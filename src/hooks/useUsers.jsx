import {useState, useEffect} from "react"

const useUsers = () => {
    const [user,setUser] = useState([])

    useEffect( () => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return (user)
};

export default useUsers;