import {useEffect} from "react";
import socket from "../Helpers/socket";

const useSocket = () => {
    useEffect(() => {
        if (socket) {
            // establish the connect
            socket.on("connect", () => {
                console.log("connected");
            });
        }
    }, []);
    return socket;
};

export default useSocket;