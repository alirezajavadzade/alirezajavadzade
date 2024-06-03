<template>

    <Head>
        <Meta name="description" content="صفحه اصلی سایت علیرضا جوادزاده">
        </Meta>
    </Head>
    <div class="main-section">
        <div class="content-box">
            <img src="~/assets/images/alireza.jpg" class="portfolio-img">
            <div class="info-box">
                <h1 class="portfolio-title">علیرضا جوادزاده</h1>
                <p class="portfolio-text">برنامه نویس ، توسعه دهنده سایت و اپلیکیشن</p>
                <div class="icon-box">
                    <NuxtLink to="mailto:“alirezajavadzade76@gmail.com”" target="_blank">
                        <img src="~/assets/images/gmail.svg" class="icon">
                    </NuxtLink>
                    <NuxtLink to="https://instagram.com/alirezajavadzadee" target="_blank">
                        <img src="~/assets/images/instagram.svg" alt="" class="icon">
                    </NuxtLink>
                    <NuxtLink to="https://www.linkedin.com/in/alireza-javadzade-3a25271a1" target="_blank">
                        <img src="/assets/images/linkedin.svg" class="icon" />
                    </NuxtLink>
                    <NuxtLink to="tel:09123460671" target="_blank">
                        <img src="/assets/images/phone.svg" class="icon" />
                    </NuxtLink>
                    <NuxtLink to="https://t.me/+989123460671" target="_blank">
                        <img src="/assets/images/telegram.svg" class="icon" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'default'
});


</script>

<style scoped>
.main-section {
    height: 100%;
    min-height: 90dvh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.info-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media(min-width:768px) {
    .content-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .info-box {
        padding-right: 3rem;
        margin-left: 2rem;
    }
}

.portfolio-img {
    border-radius: 100%;
    filter: contrast(130%) grayscale(100%);
    max-width: 360px;
    max-height: 360px;
}

.portfolio-title {
    font-size: 48px;
    font-weight: bold;
}


.portfolio-text {
    color: #767676;
    overflow: hidden;
    white-space: nowrap;
    border-left: 2px solid;
    width: 0;
    animation: typing 1.5s steps(20, end) forwards, blinking 1.5s infinite;
}

@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

@keyframes blinking {
    0% {
        border-color: transparent
    }

    50% {
        border-color: black
    }

    100% {
        border-color: transparent
    }
}

.icon-box {
    margin-top: 1rem;
    display: flex;
}

.icon {
    max-width: 30px;
    margin-left: 10px;
}
</style>