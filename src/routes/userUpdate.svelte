<script lang="ts">
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Menu from "../component/userInfoMenu.svelte"
    const elevation = 10;
</script>

<!-- 이름, 아이디, 비밀번호 변경 -->
<div class="user-update-container">
    <h1 class="user-update-h1"> 회원 정보 변경 </h1>
    <Menu> </Menu>

    <Paper {elevation} class="user-update">
    
    </Paper>
</div>