import UserRegister from "./routes/userRegister.svelte";
import Login from "./routes/login.svelte";
import Main from "./routes/main.svelte";
import codeWrite from "./routes/codeEditor.svelte";
import Test from "./routes/test.svelte";
import AssigmentWrite from "./routes/assigmentEditor.svelte";

const routes = {
    "/": Login,
    "/login": Login,
    "/user-register": UserRegister,
    "/main": Main,
    "/write-code": codeWrite,
    "/test": Test,
    "/write-assigment": AssigmentWrite,
};

export default routes