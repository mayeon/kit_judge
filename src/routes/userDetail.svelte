<script lang="ts">
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Menu from "../component/userInfoMenu.svelte"
    const elevation = 10;

    let student_id = "20202020";
    let user_name = "이름이름";
    let user_email = "이메일@email.com";
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