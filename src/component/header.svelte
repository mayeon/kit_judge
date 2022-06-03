<script>
    import { axios, axiosInstance, sourceURL } from "../functions/source.js"
    import { push } from "svelte-spa-router";
    import { link } from "svelte-spa-router";
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    import IconButton, { Icon } from "@smui/icon-button";

    // 로그인 여부 (임시)
    let user = { loggedIn: true };
    // {loggedIn:false};
    const prominent = false;
    const dense = true;

    async function getUserInfo() {
        try {
            await axiosInstance.get("/user/me", 
            ).then(res => {
                // for debug
                console.log(res.data);
            }).catch(err => {
                console.log("my info requset fail : " + err);
            }).finally(()=>{
                console.log("my info request end")
            });
        } catch(err) {
            console.log(err)
        }
    }
</script>

<div class="top-bar">
    <TopAppBar variant="static" {prominent} {dense} color="secondary">
        <Row>
            <Section>
                <Title on:click={() => push("/")}
                    >금오공대 과제 채점 시스템</Title
                >
            </Section>

            <Section>
                <a href="/class" use:link> 강의실 </a>
            </Section>

            <Section>
            {#if user.loggedIn}
                <!-- 페이지 넘어가면서 값 넘기는걸 못해서 일단 콘솔에 찍기용 -->
                <IconButton
                    class="material-icons user-info-btn"
                    on:click={() => getUserInfo()}
                    ><span class="material-symbols-outlined">
                        account_circle
                    </span></IconButton
                >

                <!-- <IconButton
                    class="material-icons user-info-btn"
                    on:click={() => push("/")}
                    ><span class="material-symbols-outlined">
                        account_circle
                    </span></IconButton
                > -->

                <Title on:click={() => push("/")}
                    >로그아웃</Title
                >
            {/if}
            </Section>
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
