//for user info
import { writable, get } from "svelte/store"

export const userInfoStore = writable("");

const changeLoginState = (key) => {
    const { subscribe, set } = writable(null);

    return {
        subscribe,
        set,
        setStorage: (current) => {
            sessionStorage.setItem(key, current);
            set(current);
        },
        getStorage: () => {
            return sessionStorage.getItem(key);
        },
        deleteStorage: () => {
            sessionStorage.removeItem(key);
            set(null);
        }
    };
};

export const isLoggedIn = changeLoginState("loginState");