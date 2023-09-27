<script setup>
    import { defineEmits } from 'vue';

    const emit = defineEmits();

    const keyboard = digit => {
        emit('inputDigit', digit)
    }

    const keyboardDelete = () => {
        emit('deleteDigit');
    }

    const keyboardClear = () => {
        emit('clearAll');
    }
</script>

<template>
    <div class="keyboard">
        <div class="keyboard-num btl" @click="keyboard(1)">1</div>
        <div class="keyboard-num" @click="keyboard(2)">2</div>
        <div class="keyboard-num btr" @click="keyboard(3)">3</div>
        <div class="keyboard-num" @click="keyboard(4)">4</div>
        <div class="keyboard-num" @click="keyboard(5)">5</div>
        <div class="keyboard-num" @click="keyboard(6)">6</div>
        <div class="keyboard-num" @click="keyboard(7)">7</div>
        <div class="keyboard-num" @click="keyboard(8)">8</div>
        <div class="keyboard-num" @click="keyboard(9)">9</div>
        <div class="keyboard-num bbl" @click="keyboardClear">C</div>
        <div class="keyboard-num" @click="keyboard(0)">0</div>
        <div class="keyboard-num bbr" @click="keyboardDelete">
            <img src="/arrow-left.png" alt="" class="keyboard-icon">
        </div>
    </div>
</template>


<style lang="scss">
    .keyboard {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(3, 100px);
        

        &-num {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            background-color: #000;
            color: #fff;
            
            cursor: pointer;
            transition: all .3s;
            font-size: 30px;
            &:hover {
                background-color: #242529
            }
        }

        .btl {
            border-top-left-radius: 15px;
        }

        .btr {
            border-top-right-radius: 15px;
        }

        .bbl {
            border-bottom-left-radius: 15px;
        }

        .bbr {
            border-bottom-right-radius: 15px;
        }
    }
</style>