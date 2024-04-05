<template>
    <div class="content-box">
        <div class="loader"></div>
        <p class="loading-text">در حال تکمیل اطلاعات این صفحه هستم</p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.content-box {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.loading-text {
    margin-top: 3rem;
}

.loader {
    width: 100px;
    height: 25px;
    border: 2px solid;
    box-sizing: border-box;
    border-radius: 50%;
    display: grid;
    animation: l2 2s infinite linear;
}

.loader:before,
.loader:after {
    content: "";
    grid-area: 1/1;
    border: inherit;
    border-radius: 50%;
    animation: inherit;
    animation-duration: 3s;
}

.loader:after {
    --s: -1;
}

@keyframes l2 {
    100% {
        transform: rotate(calc(var(--s, 1)*1turn))
    }
}
</style>