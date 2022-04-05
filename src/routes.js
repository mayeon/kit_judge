import UserRegister from "./routes/userRegister.svelte";
import Login from "./routes/login.svelte";

const routes = {
    "/": Login,
    "/login": Login,
    "/user-register": UserRegister,
};

export default routes