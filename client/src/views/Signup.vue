<template>
<div class="container">
    <div class="columns signup">
        <div class="column is-one-third"></div>
            <div class="column">
                <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input class="input is-danger" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="verifypassword" placeholder="VerifyPassword">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control">
                    <button class="button is-success">
                    Register
                    </button>
                </p>
                </div>
            </div>
            <div class="column">
            </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.signup {
    margin-top: 10%;
}

</style>