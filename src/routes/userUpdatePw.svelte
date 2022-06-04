<script>
    import { axiosInstance, sourceURL } from "../functions/source.js"
    import { get } from "svelte/store"
    import { userInfoStore } from "../functions/store.js";
    import { push } from "svelte-spa-router";
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Textfield from "@smui/textfield";
    import Menu from "../component/userInfoMenu.svelte"
    import Button, { Label } from "@smui/button";
    import {
        useForm,
        validators,
        required,
    } from "svelte-use-form";
    const form = useForm();
    const elevation = 10;

    const userInfo = get(userInfoStore);
    let newPw = "";
    let newPwCheck = "";

    function checkPws() {
        if (newPw == "" || newPwCheck == "") {
            alert("새 비밀번호를 입력하지 않았습니다.");
        } else {
            if (newPw != newPwCheck) {
                alert("새 비밀번호가 일치하지 않습니다.");
            } else {
                const userData = {
                    "email": userInfo.email,
                    "password": newPw,
                    "name": userInfo.name,
                    "student_id": userInfo.student_id
                };
                console.log(userData)

                console.log("update user password request");
                axiosInstance.put("/user/me", userData)
                .then(() => {
                    userInfoStore.set(userData);
                    alert("비밀번호가 변경되었습니다.");
                    push("/user");
                }).catch((err) => {
                    console.log("update user password request fail : " + err);
                }).finally(() => {
                    console.log("update user password request end")
                })
            }
        }
    }
</script>

<div class="user-update-pw-container">
    <h1 class="user-update-pw-h1"> 비밀번호 변경 </h1>
    <Menu />

    <Paper {elevation} class="user-update-pw">
        <form use:form on:submit|preventDefault id="changePw">
            <div class="user-update-newpw">
                <input type="password" name="newPw" placeholder="새 비밀번호" bind:value={newPw} use:validators={[required]}/>
            </div>

            <div class="user-update-newpw">
                <input type="password" name="checkNewPw" placeholder="새 비밀번호 확인" bind:value={newPwCheck} use:validators={[required]}/>
            </div>
        </form>

        <!-- <button
            type="button"
            class="btn btn-outline-secondary user-update-pw-btn"
            on:click={checkPws}
        >
            <Label>변경</Label>
        </button> -->

        <Button form="changePw" on:click={checkPws} class="user-update-pw-btn" disabled={!$form.valid} variant="outlined">
            <Label>변경</Label>
        </Button>
    </Paper>
</div> 