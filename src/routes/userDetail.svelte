<script>
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Menu from "../component/userInfoMenu.svelte"
    import {get} from "svelte/store";
    import {userInfoStore} from "../functions/store.js";

    const elevation = 10;
    const userData = get(userInfoStore);
    let student_id = userData.id;
    let user_name = userData.name;
    let user_email = userData.email;
</script>

<div class="user-info-container">
    <h1 class="user-info-h1"> 회원 정보 </h1>

    <Menu />
    <Paper {elevation} class="user-info">
        <Title class="user-info-user-name"> {user_name}</Title>
        <Subtitle class="user-info-studnet-id"> 학번: {student_id}</Subtitle>
        <Subtitle class="user-info-user-email"> 이메일: {user_email}</Subtitle>
    </Paper>
</div>
