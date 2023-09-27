<script setup>
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps({
        backroundColors: String,
        title: String,
        options: Array,
        modelValue: Number,
        modelSelect: String,
    })

    const emit = defineEmits();

    const handleInput = (e) => {
        emit('update:modelValue', parseFloat(e.target.value));
    }

    const handleOption = (e) => {
        const selectedValue = e.target.value;
        emit('selectChange', selectedValue);
    }
    
</script>

<template>
    <div class="content" :style="{backgroundColor: backroundColors}">
        <h2 class="content-title">{{title}}</h2>
        <div class="content-inner">
            <input type="number" class="content-input" :value="modelValue" @input="handleInput">
            <select class="content-select" @change="handleOption">
                <option 
                    v-for="option in options"
                    :value="option"
                    :key="option"
                    >
                    {{ option }}
                </option>
            </select>
        </div>
    </div>
</template>

<style lang="scss">
.content {
    width: 300px;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: #F9D9A9;
    color: #2e2e2e;
    margin-bottom: 40px;
    &-title {
        font-size: 22px;
         margin-bottom: 10px;
    }
    &-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &-input {
        padding: 5px 10px;
        font-size: 20px;
        width: 130px;
        background-color: transparent;
        border-bottom: 1px solid #2e2e2e;
    }
    &-select {
        font-size: 20px;
        width: 65px;
        background-color: transparent;
    }
}
</style>