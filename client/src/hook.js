import { useState, useEffect } from 'react';

function useInputHook() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setlastName] = useState(null);

    return {firstName, lastName}
}

export default useInputHook;

