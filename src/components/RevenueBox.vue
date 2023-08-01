<script setup lang="ts">
    import { ref } from 'vue'
    import convertNumberToPrice from '@/utils/convertNumberToPrice'
    const props = defineProps({
        icon: { type: Object, required: true },
        title: { type: String, required: true},
        text: { type: Number, required: true},
    })
    const colorIcon = ref(props.icon.color)
</script>

<template>
    <div class="wrapper">
        <div class="icon" :class="props.icon.color">
            <component :is="props.icon.value" v-bind="props.icon.value"></component>
        </div>
        <p class="title">{{ props.title }}</p>
        <h3 class="text">{{ convertNumberToPrice(props.text) }}</h3>

        <div class="d-flex justify-content-center">
            <slot>

            </slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .wrapper {
        width: 100%;
        height: 230px;
        padding: 24px;
        background-color: white;
        border-radius: 12px;
        h3 {
            font-size: 25px;
            margin-bottom: 18px;
        }
        .icon {
            width: 56px;
            height: 56px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid v-bind(colorIcon);
            svg {
                width: 25px;
                height: 25px;
            }
        }
        p {
            margin: 15px 0 7px 0;
        }
    }
</style>