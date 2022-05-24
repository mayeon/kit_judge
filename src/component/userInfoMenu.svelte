<script>
    import Paper from "@smui/paper";
    import Button, { Label } from '@smui/button'; 
    import { link } from "svelte-spa-router";
    const elevation = 10;

    function checkUserLeave() {
         if (confirm("정말 탈퇴하시겠습니까?") == true) {
            checkPw();
        } else {
            return false;
        }
    }


    const tempUserPw = "123";
    function checkPw() {
        let inputPw = prompt('현재 비밀번호를 입력해주세요', '');

        if (inputPw == tempUserPw) {
            alert("탈퇴되었습니다.");
            location.href="/#/login"; // 로그인 페이지로 이동
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    }
</script>

<!-- 이름, 아이디, 비밀번호 변경 -->
<Paper {elevation} class="user-info-menu-container">
    <Button href="/#/user" class="user-info-btn">
        <Label>회원 정보</Label>
    </Button>
        
    <Button href="/#/user/update/info" class="user-update-info-btn">
        <Label>회원 정보 변경</Label>
    </Button>

    <Button href="/#/user/update/pw" class="user-update-pw-btn">
        <Label>비밀번호 변경</Label>
    </Button>

    <Button on:click={checkUserLeave} class="user-leave-btn">
        <Label>회원 탈퇴</Label>
    </Button>
</Paper>