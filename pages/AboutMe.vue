<template>
    <div class="main-section">
        <v-row>
            <v-col cols="12">
                <div class="a-title-box">
                    <h1 class="a-title">درباره من</h1>
                </div>
            </v-col>
        </v-row>
        <Comingsoon />
    </div>
</template>

<script setup>

</script>

<style scoped>
.main-section {
    padding: 16px;
    height: 100%;
    min-height: 90dvh;
}

.a-title-box {
    display: flex;
    justify-content: flex-end;
}

.a-title {
    padding-bottom: 4px;
    border-bottom: 1px solid #000;
    display: inline;
    font-weight: normal;
}
</style>