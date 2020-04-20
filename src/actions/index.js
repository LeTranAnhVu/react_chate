import {
    CLEAR_ALL, DELETE_USER, UPDATE_USER
} from "./types";

import api from "../Apis/index";


export const clearAllData = () => {
    return {
        type: CLEAR_ALL
    };
};

// CURRENT USER
export const updateCurrentUser = ({username, logined_at, id}) => {
    return {
        type: UPDATE_USER,
        payload: {username, logined_at, id}
    };
};

export const deleteCurrentUser = () => {
    return {
        type: DELETE_USER,
        payload: null
    };
};

