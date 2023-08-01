<script setup lang="ts">
    import { storeToRefs } from 'pinia'
    import { useTabListStore } from '@/stores/tabList'
    
    const store = useTabListStore()
    const { tabs, tabActive } = storeToRefs(store)
    // the increment action can just be destructured
    const handleClickAddTab = () => {
        const id = tabs.value[tabs.value.length-1].id + 1
        store.addTab({
            id,
            title: 'Tab Mới',
            analytic: false
        })
        store.setActiveTab(tabs.value.length-1)
    }

    const handleClickTab = (id: number) => {
        store.setActiveTab(id)
    }

    const handleClickDeleteTab = (id: number) => {
        store.deleteTab(id)
        store.setActiveTab(tabs.value.length-1)
       
    }
</script>

<template>
    <div class="tab-wrapper">
        <div class="tab-list">
            <div v-for="(tab, index) in tabs" class="tab" @click="handleClickTab(index)" :class="{'active': tab.id === tabActive}">
                <span>{{ tab.title }}</span>
                <div class="delete-tab" @click.stop="handleClickDeleteTab(tab.id)">x</div>
            </div>
        </div>

        <div class="btn-add-tab" @click="handleClickAddTab">+</div>
    </div>
</template>

<style lang="scss" scoped>
    $border-color: #eaeaea;
    .tab-wrapper {
        align-items: center;
        background-color: #faf9fb;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        height: 38px;
        line-height: 38px;
        width: 100%;
        position: fixed;
        top: 50px;
        z-index: 101;
        border-bottom: 1px solid $border-color;
        cursor: context-menu;
        .tab-list {
            display: flex;
            .tab {
                border-right: 1px solid $border-color;
                padding: 0 25px;
                position: relative;
                line-height: 32px;
                box-sizing: border-box;
                display: flex;
                .delete-tab {
                    position: absolute;
                    right: 4px;
                    width: 8px;
                }
            }
            .active {
                background-color: white;
                border-top: 3px solid var(--primary-color);
            }
        }
        .btn-add-tab {
            height: 38px;
            width: 38px;
            text-align: center;
            border-right: 1px solid $border-color;
            font-size: 20px;
        }
    }
</style>