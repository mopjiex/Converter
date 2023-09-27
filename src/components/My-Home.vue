<script setup>
    import myLinks from './My-Links.vue';
    import myAssets from './My-Assets.vue';
</script>

<template>
    <div class="home">
        <myLinks/>
        <h2 class="home-title">My assets</h2>
        <myAssets/>
    </div>
</template>

<style lang="scss">
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px 0;
        &-title {
            font-size: 20px;
            text-align: center;
        }
    }
</style>