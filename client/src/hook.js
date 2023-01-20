import { useState, useEffect } from 'react';
import axios from 'axios'
function useInputHook() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [nameList, setNameList] = useState([]);

    const firstNameOnChange = (e) => {
        setFirstName(e.target.value);
    }

    const lastNameOnChange = (e) => {
        setlastName(e.target.Value);
    }

    const fetchData = () => {
        axios.get(`http://127.0.0.1:5000/hello`)
        .then(res => {
            const data = res.data
            console.log(data)
            setNameList(data)
        }).catch(() => {
            console.log("failed")
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {firstName, lastName, nameList, firstNameOnChange, lastNameOnChange}
}

export default useInputHook;

