import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus]= useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false)
            console.log("offline")
        });

        window.addEventListener("Online",()=>{
            setOnlineStatus(true)
            console.log("online")
        });
    },[]);

    return onlineStatus;
}
export default useOnlineStatus;