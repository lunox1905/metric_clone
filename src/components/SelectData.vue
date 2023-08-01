<script setup lang="ts">
    import { ref, type Ref } from 'vue'
    import IconSelectDown from '@/assets/icons/IconSelectDown.svg'
    import type { DataSeleted } from "@/types";

    interface Props {
        data: DataSeleted,
        type?: string
    }

    const props = defineProps<Props>();

    interface selected  {
        image?: string,
        text: string,
        value?: string | number,
        disabled?: boolean
    }
    const emit = defineEmits(['update:selectValue'])
    const data = ref(props.data)
    const showListOption: Ref<boolean> = ref(false)
    const selected:  Ref<Object> = ref(data.value[0])
    const handleClickItemOption = (data : selected) => {
        emit('update:selectValue', data.value )
        selected.value = data
        showListOption.value = !showListOption.value
    }

    const handleClickOverWrapper = () => {
        showListOption.value = false
    }
</script>

<template>
    <div class="select-wrapper" :class="props.type ? props.type : 'normal'">    
        <div class="select-selected" @click="showListOption = !showListOption" :class="{focus: showListOption}">
        
            <span class="align-middle"><img v-if="(selected as selected).image" :src="(selected as selected).image" alt="">
            {{ (selected as selected).text }}</span>
            <span class="align-middle"><IconSelectDown/></span>
        </div>
        <div class="list-option" v-show="showListOption">
            <div v-for="item  in data" class="item-option algin-middle" 
                :value="item?.value"
                @click="!item.disabled && handleClickItemOption(item)"
                :class="{disable: item.disabled, active: item.value === (selected as selected).value}"
            >
                <span><img v-if="item?.image" :src="item.image" alt=""> {{ item?.text }}</span>
            </div>
        </div>
    </div>
    <div v-show="showListOption" @click="handleClickOverWrapper" class="over-wrapper"></div>
</template>

<style scoped lang="scss">
    .select-wrapper {
        position: relative;
        span {
            display: flex;
            align-items: center;
            font-size: 16px;
            
        }
        .select-selected {
            width: 100%;
            padding: 0 12px;
            height: 100%;
            border: 1px solid #ccc;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .focus {
            border: 2px solid #ccc;
        }
        .list-option {
            position: absolute;
            top: 40px;
            border: 1px solid #ccc;
            background-color: white;
            z-index: 103;
            width: 100%;
            padding: 4px 0;
            border-radius: 8px;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            .item-option {
                height: 32px;
                padding: 0 12px;
                display: flex;
                align-items: center;
                cursor: pointer;
                &:hover {
                    background-color: #ccc;
                }
            }
            .active {
                background-color: #f2dbb9;
            }
            .disable {
                cursor: not-allowed;
                &:hover {
                    background-color: transparent;
                }
            }
        }
    } 
    .over-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        top:0;
        z-index: 102;
    }

    .normal {
        width: 100%;
        height: 40px;
        svg {
            width: 12px;
            height: 16px;
        }
        img {
            width: 20px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }

    .small {
        height: 32px;
        svg {
            width: 12px;
            height: 16px;
            margin-left: 10px;
        }
        .list-option {
            top: 34px;
        }
        img {
            width: 16px;
            border-radius: 50%;
            margin-right: 5px;
        }
    }
</style>