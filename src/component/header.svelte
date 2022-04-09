<script>
    import { link } from "svelte-spa-router";

    let selected;
    let options = [
        { id: 1, text: `강의실 1` },
        { id: 2, text: `강의실 2` },
        { id: 3, text: `강의실 3` },
    ];

    // 로그인 여부 (임시)

    let user = {loggedIn:true};
    // let user = {loggedIn:false};
</script>

<div class="container">
    <div class="row">
        <div class="col col-lg-4"></div>
        <div class="col col-lg-2">
            <div class="home-btn">
                <button type="button" class="btn btn-outline-secondary btn-light" onclick="location.href='/'">HOME</button>
            </div>
        </div>

        <div class="col col-lg-2">
            {#if user.loggedIn}
                <div class="dropdown">
                    <button type="button" class="btn btn-outline-secondary btn-light dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    강의실 선택
                    </button>
            
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {#each options as option}
                            <li><a class="dropdown-item" href="/">{option.text}</a></li>
                        {/each}
                    </ul>
                </div>
            {/if}

        </div>
        <div class="col col-lg-4"></div>
    </div>
</div>

<style>
    .container {
        margin: 0;
        padding: 0;
        max-width: 1920px;
        height: 4rem;
        background-color: rgb(155, 155, 155);
        text-align: center;
    }

    .row {
        width: 100%
    }

    .container .col-lg-2 div{
        line-height: 4rem;
    }

    .dropdown-menu {
        line-height: 2rem;
    }

    .dropdown-item {
        color: rgb(123, 131, 138);
    }

    .dropdown-item:hover, .dropdown-item:focus {
        color: #1e2125;
        background-color: #e9ecef;
        text-decoration: none;
    }

    .dropdown-item:active {
        color: rgb(255, 255, 255);
        background-color: rgb(123, 131, 138);
        text-decoration: none;
    }
</style>
