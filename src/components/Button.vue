<script setup lang="ts">
    import { ref } from 'vue'
    const props = defineProps({
        title: { type: String, required: true},
        type: { 
            type: String,
            validator: (value: string) => {
                return ['normal', 'toggle', 'primary'].includes(value)
            },
            default: 'normal'
        },
        backgroundColor: { type: String},
        disabled: { type: Boolean},
        icon: { type: String},
        width: {type: String}
    })
    

    const typeBtn = ref(props.type)
</script>

<template>
    <button :class="[{'disable': disabled}, typeBtn]" :style="{backgroundColor: backgroundColor, width: width}">
        <component v-if="props.icon" :is="props.icon" v-bind="props.icon"></component>
        <span>{{ title }}</span>
    </button>
</template>

<style scoped lang="scss">

    button {
        padding: 8px 16px;
        font-size: 14px;
        border-radius: 8px;
        position: relative;
        svg {
            width: 13px;
        }
        span {
            margin-left: 10px;
        }
    }
    .normal {
        border: 1px solid #ccc;
        background-color: white;  
    }

    .primary {
        background-color: var(--primary-color);
        border: none;
        color: white;
    }

    .toggle {
        border: none;
        color: rgb(24, 144, 255);
        background-color: transparent;
    }
    .disable {
        cursor: not-allowed;
        &::after {
            position: absolute;
            content: 'Nâng cấp tài khoản để sử dụng tính năng này';
            background-color: var(--background-color-alert-disable);
            color: white;
            border-radius: 12px;
            width: 100%;
            bottom: 140%;
            padding: 10px;
            text-align: start;
            opacity: 0.9;
            left: 0;
            display: none;
        }
        &::before {
            background: var(--background-color-alert-disable);
            content: "";
            height: 10px;
            left: 50%;
            position: absolute;
            bottom: 115%;
            opacity: 0.9;
            transform: translateY(-50%) rotate(-45deg);
            width: 10px;
            z-index: 100;
            display: none;
        }

        &:hover {
            &::after, &::before {
                display: block;
            }
        }
    }
</style>