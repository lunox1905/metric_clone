<script setup lang="ts">
    import Header from '../components/Header.vue'
    import SideBar from "../components/SideBar.vue";
    import Footer from '@/components/Footer.vue';
    import { ref } from 'vue'
    const widthSideBar = ref('230px')
</script>

<template>
    
    <SideBar :width="widthSideBar" @update:witdhSidebar="newValue => widthSideBar = newValue"></SideBar>
    <main class="main-wrapper" >
        <Header :width="widthSideBar"></Header>
        <RouterView></RouterView>
        <Footer></Footer>
    </main>
</template>

<style scoped>
.main-wrapper {
    width: calc(100% - v-bind(widthSideBar));
    margin-left: v-bind(widthSideBar);
    margin-top: 90px;
    background-color: #faf9fb;
}
</style>
  
  