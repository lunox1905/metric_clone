<script setup lang="ts">
  import TabList from '@/components/TabList.vue';
  import TabView from 'primevue/tabview';
  import TabPanel from 'primevue/tabpanel';
  import Analytic from '@/components/Analytic.vue';
  import { onMounted } from 'vue';
  import { storeToRefs } from 'pinia'
  import { useTabListStore } from '@/stores/tabList'
  const store = useTabListStore()
  const { tabs, tabActive } = storeToRefs(store)
  import { ref } from 'vue';
  console.log(tabs.value)
</script>

<template>
  <TabList></TabList>
  <TabView v-model:activeIndex="tabActive">
      <TabPanel v-for="tab in tabs">
        <Analytic :isAnalytic="tab.analytic"></Analytic>
      </TabPanel>
      
  </TabView>
</template>

<style lang="scss">
  .p-tabview-nav {
    display: none !important;
  }
  .p-tabview-panels {
    padding: 0 !important;
    background-color: #faf9fb !important;
  }

</style>