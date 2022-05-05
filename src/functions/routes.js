import Login from "../routes/login.svelte";
import Main from "../routes/main.svelte";
import Test from "../routes/test.svelte";
import UserRegister from "../routes/userRegister.svelte";
import UserDetail from "../routes/UserDetail.svelte";

import AssigmentWrite from "../routes/assigmentEditor.svelte";
import AssigmentDetail from "../routes/assigmentDetail.svelte";
import AssigmentResult from "../routes/assigmentResult.svelte";

import ClassNew from "../routes/classNew.svelte";
import ClassJoin from "../routes/classJoin.svelte";
import ClassControll from "../routes/classControll.svelte";
import ClassStudentControll from "../routes/classStudentControll.svelte";

import CodeWrite from "../routes/codeEditor.svelte";

import Links from "../routes/pageLinks.svelte";

const routes = {
    "/": Login,
    "/login": Login,
    "/user": UserDetail,
    "/user/new": UserRegister,

    "/main": Main,
    "/code": CodeWrite,

    "/assigment": AssigmentDetail,
    "/assigment/new": AssigmentWrite,
    "/assigment/submit": AssigmentResult,

    "/class": ClassControll,
    "/class/new": ClassNew,
    "/class/join": ClassJoin,
    "/class/student": ClassStudentControll,

    "/test": Test,
    "/links": Links,
};

export default routes