import UserRegister from "./routes/userRegister.svelte";
import Login from "./routes/login.svelte";
import Main from "./routes/main.svelte";

const routes = {
    "/": Login,
    "/login": Login,
    "/user-register": UserRegister,
    "/main": Main,
};

export default routes