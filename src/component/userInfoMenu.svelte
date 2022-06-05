<script>
    import { axiosInstance, sourceURL } from "../functions/source.js"
    import { push } from "svelte-spa-router";
    import Paper from "@smui/paper";
    import Button, { Label } from '@smui/button'; 
    import { link } from "svelte-spa-router";

    const elevation = 10;

    function checkUserLeave() { // 탈퇴 시 실행
         if (confirm("정말 탈퇴하시겠습니까? ('확인' 클릭 시 탈퇴 진행)") == true) {
            deleteUser();
        } else {
            return false;
        }
    }

    async function deleteUser() {
        try {
            await axiosInstance.delete("/user/me")
            .then(res => {
                sessionStorage.removeItem('access_token');
                sessionStorage.removeItem('refresh_token');
                push("/");
            }).catch(err => {

            }).finally(() => {

            })
        } catch(err) {
            console.log(err);
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