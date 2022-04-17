import UserRegister from "./routes/userRegister.svelte";
import Login from "./routes/login.svelte";
import Main from "./routes/main.svelte";
import codeWrite from "./routes/codeEditor.svelte";
import Test from "./routes/test.svelte";
import AssigmentWrite from "./routes/assigmentEditor.svelte";
import AssigmentDetail from "./routes/assigmentDetail.svelte";
import ClassControll from "./routes/classControll.svelte";

const routes = {
    "/": Login,
    "/login": Login,
    "/user-register": UserRegister,
    "/main": Main,
    "/write-code": codeWrite,
    "/test": Test,
    "/write-assigment": AssigmentWrite,
    "/view-assigment": AssigmentDetail,
    "/controll-class": ClassControll,
};

export default routes