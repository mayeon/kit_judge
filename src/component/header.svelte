<script>
    import { push } from "svelte-spa-router";
    import { link } from "svelte-spa-router";
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";

    // 로그인 여부 (임시)
    let user = 
    {loggedIn:true};
    // {loggedIn:false};
    const prominent = false;
    const dense = true;

</script>

<TopAppBar variant="static" {prominent} {dense}>
    <Row>
        <Section>
            <Title on:click={() => push("/")}>금오공대 과제 채점 시스템</Title>
        </Section>
        <Section>
            <!-- <a href="/class" use:link> 강의실 </a> -->
            {#if user.loggedIn}
            <div class="dropdown">
                <button type="button" class="btn btn-light dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                강의실 선택
                </button>
        
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {#each options as option}
                        <!-- <li><a class="dropdown-item" href="#{option.url}">{option.text}</a></li> -->
                        <li><a class="dropdown-item" href="/class">{option.text}</a></li>
                    {/each}
                </ul>
            </div>
        {/if}
        </Section>
    </Row>
</TopAppBar>
<style>
    a {
        color: aliceblue;
    }

    #dropdownMenuButton1 {
        margin: 0px;
        padding-top: 0.25rem;
        padding-top: 0.25rem;
    }

    .dropdown-menu {
        line-height: 2rem;
    }

    .dropdown-item {
        color: #1e2125;
    }

    .dropdown-item:hover, .dropdown-item:focus {
        background-color: #e9ecef;
        text-decoration: none;
    }

    .dropdown-item:active {
        color: rgb(255, 255, 255);
        background-color: rgb(123, 131, 138);
        text-decoration: none;
    }
</style>
