<script lang="ts">
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Menu from "../component/userInfoMenu.svelte"
    const elevation = 10;
</script>

<div class="user-update-info-container">
    <h1 class="user-update-info-h1"> 회원 정보 변경 </h1>
    <Menu />

    <Paper {elevation} class="user-update-info">
    
    </Paper>
</div>