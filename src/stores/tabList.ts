import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Tab } from '@/types';
export const useTabListStore = defineStore('tabList', () => {
  const tabs = ref([
    {
      id: 0,
      title: 'Shoppe',
      analytic: true,
    }
  ])
  const tabActive = ref(0)
  function addTab(tab: Tab) {
    tabs.value.push(tab)
  }

  function setActiveTab (id: number) {
    console.log(id)
    tabActive.value = id
    
  }

  function deleteTab(id: number) {
    tabs.value = tabs.value.filter(tab => tab.id !== id)
  }

  return { tabs, tabActive, addTab, deleteTab,setActiveTab }
})
