<script setup lang="ts">
    import { ref } from 'vue'
    import SelectData from './SelectData.vue';
    const props = defineProps(['width'])
    const widthSideBar = props.width

    interface languages {
        value: string
        text: string
    }
    const languages = ref([
        {
            value: 'vi',
            text: 'Tiếng việt',
            image: 'https://img.icons8.com/color/48/000000/vietnam-circular.png'
        },
        {
            value: 'en',
            text: 'English',
            image: 'https://img.icons8.com/color/48/000000/usa-circular.png'
        }
    ])
    const selected = ref(languages.value[0].text)
    
</script>

<template>
    <div class="wrapper-header">
        <div class="screen-name">
            <h2 class="title">Phân tích</h2>
        </div>
        <div class="option">
            <SelectData 
                  :data="languages"
                  @update:selectValue="(newValue: string) => selected = newValue"
                  type="small"
              />
            <div class="bar"></div>
            <div class="user-profile">
                <button type="button" class="btn">Đăng nhập</button>
            </div>
        </div>    
    </div>
</template>

<style lang="scss" scoped>
    .wrapper-header {
        align-items: center;
        background-color: #fff;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        height: 50px;
        justify-content: space-between;
        line-height: 64px;
        padding: 16px;
        position: fixed;
        top: 0;
        z-index: 101;
        width: calc(100% - v-bind(widthSideBar));
        .screen-name {
            h2 {
                margin: 0;
                font-size: 21px;
                font-weight: 500;
            }
        }
        .option {
            display: flex;
            align-items: center;
            select {
                height: 32px;
                width: 126px;
                padding: 0 15px;
                border-radius: 8px;
                font-size: 16px;
                border-color: #6d6b6b;
            }
        }

        .bar {
            width: 1px;
            height: 20px;
            background-color: #e2e1e1;
            margin: 0 20px;
        }
        .user-profile {
            display: flex;
            align-items: center;
            button {
                height: 32px;
                border: none;
                position: relative;
                padding: 0;
                &::after {
                    content: '';
                    display: none;
                    position: absolute;
                    height: 2px;
                    left: 0;
                    right: 0;
                    background-color: rgb(231, 144, 38);
                    bottom: -5px;
                }
                &:hover {
                    &::after {
                        display: block;
                    }
                }
            }
        }
    }
   
</style>