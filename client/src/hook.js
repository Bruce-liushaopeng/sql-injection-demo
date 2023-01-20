import { useState, useEffect } from 'react';
import axios from 'axios'
function useInputHook() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [nameList, setNameList] = useState([]);

    const firstNameOnChange = (e) => {
        setFirstName(e.target.value);
    }

    const lastNameOnChange = (e) => {
        setLastName(e.target.value);
    }
    
    useEffect( () => {
        console.log(firstName, lastName, nameList)
    }, [firstName, lastName, nameList])

    const handleSubmit = () => {
        console.log("handlesubmit invoked");
        const body = { firstName, lastName }
        console.log(body);
        axios.post('http://localhost:5000/addUser', body)
        .then(res => {
            console.log(res)
            setNameList(res.data)
            console.log(res.data)
        })
        .catch(() => {
            console.log("post error on FrontEnd")
        })
    }

    return {firstName, lastName, nameList, firstNameOnChange, lastNameOnChange, handleSubmit}
}

export default useInputHook;

