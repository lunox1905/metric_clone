<script setup lang="ts">
    import { ref } from 'vue'
    import IconAnalytics from '@/assets/icons/IconAnalytics.svg'
    import IconArrowLeft from '@/assets/icons/IconArrowLeft.svg'
    import IconTrending from '@/assets/icons/IconTrending.svg'
    import IconSearch from '@/assets/icons/IconSearch.svg'
    import IconForecast from '@/assets/icons/IconForecast.svg'
    import IconReport from '@/assets/icons/IconReport.svg'
    import IconUser from '@/assets/icons/IconUser.svg'
    const props = defineProps(['width'])
    const emit = defineEmits(['update:witdhSidebar'])
    const widthSideBar = ref(props.width)
    const link = ref('/analytics')
    const menuItem = [
        {
            title: 'Phân tích',
            link: '/analytics',
            icon: IconAnalytics,
            disabled: false
        },
        {
            title: 'Dự báo',
            link: '/',
            icon: IconForecast,
            disabled: false
        },
        {
            title: 'Theo dõi shop',
            link: '',
            icon: IconUser,
            disabled: true
        },
        {
            title: 'Tìm shop đối thủ',
            link: '',
            icon: IconSearch,
            disabled: true
        },
        {
            title: 'Trending bán chạy',
            link: '',
            icon: IconTrending,
            disabled: true
        },
        {
            title: 'Báo cáo',
            link: '',
            icon: IconReport,
            disabled: true
        }
    ]
    const isExpanded = ref(true)
    const handleClick = () => {
        isExpanded.value = !isExpanded.value
        if(isExpanded.value) widthSideBar.value = '230px'
        else widthSideBar.value = '80px'
        emit('update:witdhSidebar', widthSideBar.value)
    }
</script>

<template>
    <div class="wrapper-sidebar" :class="{'is-expanded':isExpanded}">
        <div class="logo">
            <img v-if="isExpanded" src="https://metric.vn/mimg/metric_logo_slogan.svg" alt="logo">
            <img v-else src="https://metric.vn/mimg/metric_logo.svg" alt="logo">
        </div>
        <div class="toggle-sidebar" @click="handleClick">
            <icon-arrow-left/>
        </div>
        <ul class="list-menu">
            <li v-for="item in menuItem" class="list-group-item" :class="{disable: item.disabled, active: link === item.link}">
                <router-link :to="item.link" >
                    <component :is="item.icon" v-bind="item.icon"></component>
                    <span>{{ item.title }}</span>
                </router-link> 
                <span class="show-alert">Nâng cấp tài khoản để sử dụng tính năng này</span>
            </li>
            
        </ul>
    </div>
    
</template>

<style lang="scss" scoped>
    $background-color-list-sidebar: #fff2e6;
    $border-color-active-btn: rgb(238 199 185);
    .wrapper-sidebar {
        height: 100vh;
        background-color: #fff;
        border-right: 1px solid #f0f0f0;
        left: 0;
        overflow: unset;
        padding: 0 16px;
        position: fixed;
        top: 0;
        width: v-bind(widthSideBar);

        display: flex;
        flex-direction: column;
        z-index: 101;
        transition: 0.1s ease-in-out;
        .toggle-sidebar {
            position: absolute;
            background-color: white;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 4px 0 10px #f7f7f7;
            right: -15px;
            top: 32px;
            z-index: 120;
            svg {
                width: 18px;
                height: 18px;
            }
        }
        .logo {
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 8px auto 16px auto;
            img {
                height: 20px;
            }
        }
        
        .list-menu {
            list-style: none;
            margin: 0;
            li {
                justify-content: center;
                height: 42px;
                padding: 0 10px;
                display: flex;
                font-size: 15px;
                align-items: center;
                margin: 5px 0 5px 0;
                border-radius: 8px;
                cursor: pointer;
                a {
                    display: flex;
                    align-items: center;
                    color: rgb(154, 147, 147);
                    text-decoration: none;
                    svg {
                        width: 14px;
                    }
                    span {
                        margin-left: 10px;
                        display: none;
                        transition: 0.2s ease-in-out;
                    }
                }
                &:hover {
                    background-color: $background-color-list-sidebar;
                }
                
            }

            .show-alert {
                position: absolute;
                left: 190px;
                line-height: 40px;
                height: 40px;
                width: 330px;
                color: white;
                border-radius: 8px;
                padding: 0 10px;
                background-color: black;
                display: none;
            }
            .disable {
                cursor: not-allowed;
                position: relative;
                a {
                    cursor: not-allowed;
                }
                &::after {
                    position: absolute;
                    content: 'Nâng cấp tài khoản để sử dụng tính năng này';
                    left: 190px;
                    line-height: 40px;
                    height: 40px;
                    width: 330px;
                    color: white;
                    border-radius: 8px;
                    padding: 0 10px;
                    background-color: var(--background-color-alert-disable);
                    z-index: 200;
                    display: none;
                }

                &::before {
                    background: var(--background-color-alert-disable);
                    content: "";
                    height: 10px;
                    left: 185px;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%) rotate(-45deg);
                    width: 10px;
                    z-index: 100;
                    display: none;
                }

                &:hover {
                    &::after {
                        display: block;
                    }
                    &::before {
                        display: block;
                    }
                }
                
            }

            .active {
                border: 1px solid  $border-color-active-btn;
                background-color: $background-color-list-sidebar;
                a {
                    color: var(--primary-color);
                }
            }
        }
    }

    .wrapper-sidebar.is-expanded {
        padding: 0 24px;
        .logo {
            width: 181px;
            height: 54px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 8px auto 16px auto;
            img {
                width: 120px;
                height: 24px;
            }
        }
        .toggle-sidebar {
            transform: rotate(-180deg);
            svg {
                width: 18px;
                height: 18px;
            }
        }
        .list-menu {
            li {
                justify-content: start;
                a {
                    span {
                        display: block;
                        transition: display 0.1s ease-in-out;
                    }
                }
            }
        }
    }

    
</style>