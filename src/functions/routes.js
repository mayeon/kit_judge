import Login from "../routes/login.svelte";
import Main from "../routes/main.svelte";
import Test from "../routes/test.svelte";
import UserRegister from "../routes/userRegister.svelte";

import AssigmentWrite from "../routes/assigmentEditor.svelte";
import AssigmentDetail from "../routes/assigmentDetail.svelte";
import AssigmentResult from "../routes/AssigmentResult.svelte";

import ClassControll from "../routes/classControll.svelte";
import ClassStudentControll from "../routes/classStudentControll.svelte";

import CodeWrite from "../routes/codeEditor.svelte";

import Links from "../routes/pageLinks.svelte";

const routes = {
    "/": Login,
    "/login": Login,
    "/user/new": UserRegister,
    "/main": Main,
    "/code": CodeWrite,
    "/assigment": AssigmentDetail,
    "/assigment/new": AssigmentWrite,
    "/assigment/submit": AssigmentResult,
    "/class": ClassControll,
    "/class/student": ClassStudentControll,
    "/test": Test,
    "/links": Links,
};

export default routes