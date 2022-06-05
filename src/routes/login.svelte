<script>
    import { axiosInstance, sourceURL } from "../functions/source.js"
    import { userInfoStore, isLoggedIn } from "../functions/store.js";
    import { push } from "svelte-spa-router";
    import { link } from "svelte-spa-router";
    import {
        useForm,
        validators,
        HintGroup,
        Hint,
        email,
        required,
    } from "svelte-use-form";
    
    const form = useForm();
    const requiredMessage = "필수 기입 항목입니다.";

    let userEmail = "";
    let userPw = "";

    async function login() {
        try {
            const userData = {
                "email": userEmail,
                "password": userPw
            };

            console.log("login request");
            await axiosInstance.post("/auth/login", JSON.stringify(userData))
            .then(res => {
                sessionStorage.removeItem('access_token');
                sessionStorage.removeItem('refresh_token');
                sessionStorage.setItem('access_token', JSON.stringify(res.data.access_token));
                sessionStorage.setItem('refresh_token', JSON.stringify(res.data.refresh_token));

                userInfoStore.set(userData);
                $isLoggedIn = 1;
                push("/class");
            }).catch(err => {
                alert("계정 정보를 확인해주세요.");
                console.log("login requset fail : " + err);
            }).finally(() => {
                console.log("login request end")
            });
        } catch(err) {
            console.log(err)
        }
    }
</script>

{#if true}
    <div id="login-form">
        <form use:form on:submit|preventDefault id="login">
            <h1>로그인</h1>

            <div class="input-box">
                <input
                    type="email"
                    class="form-control"
                    name="id"
                    use:validators={[required]}
                    placeholder="이메일"
                    bind:value={userEmail}
                />
                <div class="hint">
                    <HintGroup for="id" class="hint">
                        <Hint on="required">{requiredMessage}</Hint>
                    </HintGroup>
                </div>
            </div>

            <div class="input-box">
                <input
                    type="password"
                    class="form-control"
                    name="password"
                    use:validators={[required]}
                    placeholder="비밀번호"
                    bind:value={userPw}
                />
                <div class="hint">
                    <HintGroup for="password" class="hint">
                        <Hint on="required">{requiredMessage}</Hint>
                    </HintGroup>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <button
                            id="register-btn"
                            type="button"
                            class="btn btn-outline-secondary"
                            onclick="location.href='/#/user/new'">회원가입</button
                        >
                    </div>

                    <div class="col-sm-6">
                        <button
                            id="login-btn"
                            form="login"
                            class="btn btn-outline-secondary"
                            on:click={login}
                            disabled={!$form.valid}>로그인</button
                        >
                    </div>
                </div>
            </div>
        </form>
    </div>
    
{/if}

<!-- <pre>
    {JSON.stringify($form, null, " ")}
</pre> -->
<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }

    #login-form {
        display: block;
        text-align: center;
        width: 100%;
        max-width: 15rem;
        padding: 1rem;
        margin: auto;
        margin-top: 3rem;
    }

    #login-form .input-box {
        margin-bottom: 2rem;
    }

    .hint {
        position: absolute;
        height: 1.5rem;
        padding-left: 0.5rem;
        color: red;
    }

    #login-form input {
        margin-bottom: -1px;
    }

    #login-form h1 {
        padding-bottom: 1rem;
    }

    #login-form .col-sm-6 {
        padding-left: 6px;
        padding-right: 6px;
    }

    #login-form button {
        width: 5.7rem;
    }
</style>
