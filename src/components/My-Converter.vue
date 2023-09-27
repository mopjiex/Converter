<script setup>
    import MyContent from './My-Content.vue'
    import MyKeyboard from './My-Keyboard.vue'
    import { convertCurrency } from '../fetching.js'
    import {ref, reactive} from 'vue';


    const currencyCountry = ['RUB', 'USD', 'EUR', 'BYN', 'KZT', 'JPY'];
    const currencyCountry2 = [...currencyCountry].reverse();

    const inputValue = reactive({
        input1: 0,
        input2: 0,
    });

    const selectedOption = ref('RUB');
    const selectedOption2 = ref('USD');
    
    const handleSelectedChange = selectedValue => {
        selectedOption.value = selectedValue;
    }

    const handleSelectedChange2 = selectedValue => {
        selectedOption2.value = selectedValue;
    }

    const summirovanie = () => {
        convertCurrency(inputValue.input1, selectedOption.value, selectedOption2.value).then(result => inputValue.input2 = result)
    }
    
    const keyboardDelete = () => {
        inputValue.input1 = (inputValue.input1).toString().slice(0, -1);
        summirovanie();
    }

    const keyboardClear = () => {
        inputValue.input1 = 0;
        summirovanie();
    }

    const keyboard = (digit) => {
        inputValue.input1 = parseFloat(inputValue.input1.toString() + digit);
        if(isNaN(inputValue.input1)) inputValue.input1 = 0;
        summirovanie();
    }


</script>

<template>
    <div class="converter">
        <div class="container">
            <div class="converter-top">
                <RouterLink to="/">
                    <div class="back">
                        <img src="/arrow-left-2.png" alt="" class="back-img">
                    </div>
                </RouterLink>
                <h1 class="converter-title">Convert</h1>
            </div>
            
            <MyContent
                title="Send"  
                backroundColors="#ffe8ab"
                :options="currencyCountry"
                v-model="inputValue.input1"
                @selectChange="handleSelectedChange"
                @input="summirovanie"
            />
            <MyContent 
                title="Receive"
                backroundColors="#f6ddff"
                :options="currencyCountry2"
                v-model="inputValue.input2"
                @selectChange="handleSelectedChange2"
            />

            <MyKeyboard 
                @inputDigit="keyboard" 
                @deleteDigit="keyboardDelete"
                @clearAll="keyboardClear"
            />
        </div>
    </div>    
</template>


<style lang="scss">
    
    .container {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .converter {
        &-top {
            display: flex;
            align-items: center;
            gap: 0 60px;
            margin-bottom: 35px;

            .back {
                width: 25px;
                height: 25px;
                background-color: #2c2d32;
                border-radius: 8px;
                transition: all .3s;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }

        &-title {
        font-size: 32px;
        text-align: center;
        }

        
    }
    
</style>