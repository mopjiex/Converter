<script setup>

</script>

<template>
    <div class="main">
         <div class="main-links">
            
            <div class="main-link">
                <img src="/arrow-up.png" alt="" class="main-link-img">
                <h2 class="main-link-title">Send</h2>
            </div>
            <RouterLink to="/converter">
                <div class="main-link">
                    <img src="/arrow-down.png" alt="" class="main-link-img">
                    <h2 class="main-link-title">Convert</h2>
                </div>
            </RouterLink>
            <div class="main-link">
                <img src="/converter.png" alt="" class="main-link-img">
                <h2 class="main-link-title">Deposit</h2>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
.main {
    &-links {
    display: flex;
    align-items: center;
    gap: 0 20px;
    
    }
    &-link {
    background-color: #2a2b30;
    width: 100px;
    padding: 10px 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px 0;
    transition: all .3s;
    &-img {
        width: 30px;
        height: 30px;
    }
    &-title {
        font-size: 20px;
        text-align: center;
    }

    &:hover {
        transform: scale(1.1);
    }
}
}</style>