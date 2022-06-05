//for user info
import { writable } from "svelte/store"

export const userInfoStore = writable("");
export const isLoggedIn = writable(null);