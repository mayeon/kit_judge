import UserRegister from "../routes/userRegister.svelte";
import Login from "../routes/login.svelte";
import Main from "../routes/main.svelte";
import codeWrite from "../routes/codeEditor.svelte";
import Test from "../routes/test.svelte";
import AssigmentWrite from "../routes/assigmentEditor.svelte";
import AssigmentDetail from "../routes/assigmentDetail.svelte";
import ClassControll from "../routes/classControll.svelte";
import ClassStudentControll from "../routes/classStudentControll.svelte";

const routes = {
    "/": Login,
    "/login": Login,
    "/user/new": UserRegister,
    "/main": Main,
    "/code": codeWrite,
    "/assigment": AssigmentDetail,
    "/assigment/new": AssigmentWrite,
    "/assigment/submit": ClassStudentControll,
    "/class": ClassControll,
    "/class/student": ClassStudentControll,
    "/test": Test,
};

export default routes