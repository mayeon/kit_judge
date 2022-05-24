<script lang="ts">
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Textfield from "@smui/textfield";
    import Menu from "../component/userInfoMenu.svelte"
    import Button, { Label } from "@smui/button";
    const elevation = 10;

    let newPw = "";
    let newPwCheck = "";

    function checkPws() {
        if (newPw == "" || newPwCheck == "") {
            alert("새 비밀번호를 입력하지 않았습니다.");
        } else {
            if (newPw != newPwCheck) {
                alert("새 비밀번호가 일치하지 않습니다.");
            } else {
                alert("비밀번호가 변경되었습니다.");
                location.href="/#/user";
            }
        }
    }
</script>

<div class="user-update-pw-container">
    <h1 class="user-update-pw-h1"> 비밀번호 변경 </h1>
    <Menu />

    <Paper {elevation} class="user-update-pw">
        <div class="user-update-newpw">
            <Textfield 
                password
                bind:value={newPw} 
                label="새 비밀번호"
                input$resizable={false}
            >
            </Textfield>
        </div>

        <div class="user-update-newpw">
            <Textfield 
                password
                bind:value={newPwCheck} 
                label="새 비밀번호 확인"
                input$resizable={false}
            >
            </Textfield>
        </div>

        <!-- <button
            type="button"
            class="btn btn-outline-secondary user-update-pw-btn"
            on:click={checkPws}
        >
            <Label>변경</Label>
        </button> -->

        <Button on:click={checkPws} class="user-update-pw-btn" variant="outlined">
            <Label>변경</Label>
        </Button>
    </Paper>
</div>