<script>
    import { axiosInstance, sourceURL } from "../functions/source.js"
    import { push } from "svelte-spa-router";
    import { link } from "svelte-spa-router";
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    import IconButton, { Icon } from "@smui/icon-button";
    import { get } from "svelte/store"
    import { userInfoStore, isLoggedIn } from "../functions/store.js";

    const prominent = false;
    const dense = true;

    async function getUserInfo() {
        try {
            console.log("my info requset");
            await axiosInstance.get("/user/me")
            .then(res => {
                const userData = {
                    student_id: res.data.student_id,
                    name: res.data.name,
                    email: res.data.email
                };
                userInfoStore.set(userData);
                push("/user");
            }).catch(err => {
                console.log("my info requset fail : " + err);
            }).finally(() => {
                console.log("my info request end")
            });
        } catch(err) {
            console.log(err)
        }
    }

    async function logout() {
        try {
            console.log("logout requset");
            await axiosInstance.delete("/auth/logout")
            .then(res => {
                sessionStorage.removeItem('access_token');
                sessionStorage.removeItem('refresh_token');
                sessionStorage.removeItem('type');
                isLoggedIn.deleteStorage();
                push("/");
            }).catch(err => {
                console.log("logout request fail : " + err);
            }).finally(() => {
                console.log("logout request end")
            }); 
        } catch(err) {
            console.log(err);
        }
    }
</script>

<div class="top-bar">
    <TopAppBar variant="static" {prominent} {dense} color="secondary">
        <Row>
            <!-- 로그인 성공 -->
            {#if ($isLoggedIn || isLoggedIn.getStorage())}
                <Section>
                    <Title on:click={() => push("/class")}
                        >금오공대 과제 채점 시스템</Title
                    >
                </Section>

                <Section>
                    <a href="/class" use:link> 강의실 </a>
                </Section>

                <Section>
                    <IconButton
                        class="material-icons user-info-btn"
                        on:click={() => getUserInfo()}
                        ><span class="material-symbols-outlined">
                            account_circle
                        </span>
                    </IconButton>

                    <Title on:click={() => logout()}
                        >로그아웃</Title
                    >
                </Section>
            {:else}
                <Section>
                    <Title on:click={() => push("/")}
                        >금오공대 과제 채점 시스템</Title
                    >
                </Section>

                <!-- 공간차지용 -->
                <Section>
                </Section>

                <Section>
                </Section>
            {/if}
        </Row>
    </TopAppBar>
</div>

<style>
    a {
        color: #263238;
    }

    .top-bar {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
</style>
