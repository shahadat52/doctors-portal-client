// import { useEffect, useState } from "react"

// export const useToken = email => {
//     const [token, setToken] = useState('');
//     useEffect(() => {
//         if (email) {
//             fetch(`http://localhost:5000/jwt?email=${email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.accessToken) {
//                         localStorage.setItem("accessToken", data.accessToken);
//                         setToken(data.accessToken)
//                     }
//                 })
//         }
//     }, [email]);
//     return [token];
// }

import { useEffect, useState } from "react";

export const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        let isMounted = true;

        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (isMounted && data.accessToken) {
                        localStorage.setItem("accessToken", data.accessToken);
                        setToken(data.accessToken);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
        return () => {
            isMounted = false; // Update the mount status on unmount
        };
    }, [email]);

    return [token];
};