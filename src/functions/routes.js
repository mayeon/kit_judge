import Login from "../routes/login.svelte";
import Main from "../routes/main.svelte";
import Test from "../routes/test.svelte";
import UserRegister from "../routes/userRegister.svelte";
import UserDetail from "../routes/userDetail.svelte";

import AssignmentWrite from "../routes/assignmentEditor.svelte";
import AssignmentDetail from "../routes/assignmentDetail.svelte";
import AssignmentResult from "../routes/assignmentResult.svelte";

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

    "/assignment": AssignmentDetail,
    "/assignment/new": AssignmentWrite,
    "/assignment/submit": AssignmentResult,

    "/class": ClassControll,
    "/class/new": ClassNew,
    "/class/join": ClassJoin,
    "/class/student": ClassStudentControll,

    "/test": Test,
    "/links": Links,
};

export default routes