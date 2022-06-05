import Login from "../routes/login.svelte";
import Main from "../routes/main.svelte";
import Test from "../routes/test.svelte";
import UserRegister from "../routes/userRegister.svelte";
import UserDetail from "../routes/userDetail.svelte";
import UserUpdateInfo from "../routes/userUpdateInfo.svelte";
import UserUpdatePw from "../routes/userUpdatePw.svelte";

import AssignmentWrite from "../routes/assignmentEditor.svelte";
import AssignmentDetail from "../routes/assignmentDetail.svelte";
import AssignmentResult from "../routes/assignmentResult.svelte";
import AssignmentList from "../routes/assigmentList.svelte";

import ClassNew from "../routes/classNew.svelte";
import ClassJoin from "../routes/classJoin.svelte";
import ClassList from "../routes/classList.svelte";
import ClassStudentControll from "../routes/classStudentControll.svelte";

import CodeWrite from "../routes/codeEditor.svelte";
import CodeAttach from "../routes/codeAttach.svelte";

import Links from "../routes/pageLinks.svelte";

import UploadTest from "../routes/uploadTest.svelte";

const routes = {
    "/": Login,
    "/login": Login,
    "/user": UserDetail,
    "/user/update/info": UserUpdateInfo,
    "/user/update/pw": UserUpdatePw,
    "/user/new": UserRegister,

    "/main": Main,
    "/code": CodeWrite,
    "/codeAttach": CodeAttach,

    "/assignment/detail/:assignmentId": AssignmentDetail,
    "/assignment/new": AssignmentWrite,
    "/assignment/submit": AssignmentResult,

    "/class": ClassList,
    "/class/new": ClassNew,
    "/class/join": ClassJoin,
    "/class/:classId/student": ClassStudentControll,
    "/class/:classId/assigment": AssignmentList,

    "/test": Test,
    "/links": Links,

    "/upload": UploadTest,
};

export default routes