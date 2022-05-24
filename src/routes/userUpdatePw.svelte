<script lang="ts">
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Menu from "../component/userInfoMenu.svelte"
    const elevation = 10;
</script>

<div class="user-update-pw-container">
    <h1 class="user-update-pw-h1"> 비밀번호 변경 </h1>
    <Menu />

    <Paper {elevation} class="user-update-pw">
    
    </Paper>
</div>