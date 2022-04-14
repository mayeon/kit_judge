import UserRegister from "./routes/userRegister.svelte";
import Login from "./routes/login.svelte";
import Main from "./routes/main.svelte";
import codeWrite from "./routes/codeEditor.svelte";
import Test from "./routes/test.svelte";

const routes = {
    "/": Login,
    "/login": Login,
    "/user-register": UserRegister,
    "/main": Main,
    "/write": codeWrite,
    "/test": Test,
};

export default routes