<script setup>
 import {getCurrentScope, onMounted, ref, watch} from 'vue';
 import {getExchangeRate, convertCurrency} from '../fetching.js';

 const currency = ref([
    {
        name: 'USD',
        fullName: 'Dollar',
        icon: '/currency/usd.png',
        background: '#ffe8ab',
    },
    {
        name: 'EUR',
        fullName: 'Euro',
        icon: '/currency/eur.png',
        background: '#e2ffdd',
    },
    {
        name: 'BYN',
        fullName: 'Bel rub',
        icon: '/currency/byn.png',
        background: '#dde2ff',
    },
    {
        name: 'JPY',
        fullName: 'Yen',
        icon: '/currency/jpy.png',
        background: '#f6ddff',
    },
]);

 const convertedAmount = ref({});
 

 onMounted(async () => {
    for(const cur of currency.value) {
        const result = await convertCurrency(1, cur.name, 'RUB');
        convertedAmount.value[cur.name] = result;
    }
 })

</script>

<template>
    <div class="assets">
        <div class="assets-box" v-for="cur in currency" :key="cur.name">
            <div class="assets-box-left">
                <div class="assets-box-left-icons box-icons" :style="{backgroundColor: cur.background}">
                    <img :src="cur.icon" alt="" class="assets-box-left-icon">
                </div>
                <div class="assets-box-left-title">
                    <h2 class="assets-box-left-fullname"> {{ cur.fullName }}</h2>
                    <h3 class="assets-box-left-name"> {{ cur.name }}</h3>
                </div>
            </div>

            <div class="assets-box-right">
                <h2>{{ convertedAmount[cur.name] }} </h2>
                <div class="assets-box-right-icons box-icons">
                    <img class="assets-box-right-icon" src="/currency/rub.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    .assets {
        &-box {
            width: 350px;
            padding: 10px 20px;
            border-radius: 8px;
            background-color:#1f2025;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 20px;

            .box-icons {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                border-radius: 10px;
            }

            &-left {
                display: flex;
                align-items: center;
                gap: 0 10px;
              
                &-title {
                    display: flex;
                    flex-direction: column;
                    gap: 5px 0;
                }

                &-name {
                    font-size: 14px;
                    color: #606064;
                }
            }

            &-right {
                display: flex;
                align-items: center;
                gap: 0 10px;

                &-icons {
                    background-color: #FFE6FB;    
                }
            }
            
        }
    }
</style>