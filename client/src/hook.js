import { useState, useEffect } from 'react';
import axios from 'axios'
function useInputHook() {
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [userNameForView, setUserNameForView] = useState('');
    const [nameList, setNameList] = useState([]);

    const userNameOnChange = (e) => {
        setuserName(e.target.value);
    }

    const passwordOnChange = (e) => {
        setpassword(e.target.value);
    }

    const userNameForViewOnChange = (e) => {
        console.log(userNameForView);
        setUserNameForView(e.target.value);
    }

    const submitNewUser = () => {
        axios.post('http://localhost:5000/addUser/'+ userName + '/' + password)
        .then(res => {
            setNameList([])
            alert("New user " + userName + " add success")
            setuserName("")
            setpassword("")
        })
        .catch(() => {
            console.log("post error on FrontEnd")
        })
    }

    const handleViewClick = () => {
        axios.get('http://localhost:5000/getUser/' + userNameForView)
        .then(res => {
            setNameList(res.data)
        })
        .catch((res) => {
            console.log("post error on FrontEnd")
        })
    }

    return {userName, password, userNameForView, nameList, userNameOnChange, userNameForViewOnChange, passwordOnChange, submitNewUser, handleViewClick}
}

export default useInputHook;

