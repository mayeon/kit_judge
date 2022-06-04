<script>
    import { axiosInstance, sourceURL } from "../functions/source.js"
    import { get } from "svelte/store"
    import { userInfoStore } from "../functions/store.js";
    import { push } from "svelte-spa-router";
    import Paper, { Title, Subtitle } from "@smui/paper";
    import Textfield from "@smui/textfield";
    import Menu from "../component/userInfoMenu.svelte"
    import Button, { Label } from "@smui/button";
    import HelperText from "@smui/textfield/helper-text";
    import {
        useForm,
        validators,
        required,
    } from "svelte-use-form";

    const form = useForm();
    const elevation = 10;
    
    const userInfo = get(userInfoStore);
    let newEmail = "";

    function checkEmail () {
        if (userInfo.email != newEmail) {
            if (checkEmailFormat(newEmail)) {
                const userData = {
                    "email": newEmail,
                    "password": userInfo.password,
                    "name": userInfo.name,
                    "student_id": userInfo.student_id
                };

                console.log("update user email request");
                axiosInstance.put("/user/me", userData)
                .then(() => {
                    userInfoStore.set(userData);
                    alert("이메일이 변경되었습니다.");
                    push("/user");
                }).catch((err) => {
                    console.log("update user email request fail : " + err);
                }).finally(() => {
                    console.log("update user email request end")
                })
            } else {
                alert("이메일 형식이 아닙니다.");
            }
        } else {
            alert("이메일이 변경되지 않았습니다.");
        }
    }

    function checkEmailFormat(changeEmail) {
        let emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if (!emailFormat.test(changeEmail)) {
            return false;
        } else {
            return true;
        }
    }
</script>

<div class="user-update-info-container">
    <h1 class="user-update-info-h1"> 회원 정보 변경 </h1>
    <Menu />

    <Paper {elevation} class="user-update-info">
        <form use:form on:submit|preventDefault id="changeInfo">
            <div class="user-update-info">
                <input type="email" name="newInfo" placeholder="abc123@email.com" bind:value={newEmail} use:validators={[required]}/>
            </div>
        </form>

        <Button form="changeInfo" on:click={checkEmail} class="user-update-info-btn" disabled={!$form.valid} variant="outlined">
            <Label>변경</Label>
        </Button>
    </Paper>
</div> 