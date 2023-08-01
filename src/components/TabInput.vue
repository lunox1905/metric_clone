
<script lang="ts">
  import { ref, watch, nextTick, onMounted, computed } from "vue";
  export default {
    props: {
      name: { type: String, default: "" },
      modelValue: { type: Array, default: () => [] },
      options: { type: [Array, Boolean], default: false },
      allowCustom: { type: Boolean, default: true },
      showCount: { type: Boolean, default: false },
      placehold: {type: String}
    },
    setup(props, { emit }) {
      // Tags
      const tags = ref(props.modelValue);
      const newTag = ref("");
      const id = Math.random().toString(36).substring(7);
      const searchList = computed(() => {
       
        if(newTag.value) {
          const list = tags.value.filter(tag => tag === newTag.value)
          if(list.length) return list
          else return [newTag.value]
        } else {
          return tags.value
        }
      })
      const isShowSearchList = ref(false)
      const addTag = (tag : string) => {
        if (!tag) return; // prevent empty tag
        
        const arrTag = tag.split(',')
        // only allow predefined tags when allowCustom is false

        arrTag.forEach(tag => {
          if (!props.allowCustom && !props.options.includes(tag)) return;
        // return early if duplicate
          if (tags.value.includes(tag)) {
            handleDuplicate(tag);
            return;
          }
          tags.value.push(tag);
        })
        
        newTag.value = ""; // reset newTag
      };
      const removeTag = (index) => {
        tags.value.splice(index, 1);
      };
  
      // handling duplicates
      const duplicate = ref(null);
      const handleDuplicate = (tag) => {
        duplicate.value = tag;
        setTimeout(() => (duplicate.value = null), 1000);
        newTag.value = "";
      };
  
      // positioning and handling tag change
      const paddingLeft = ref(10);
      const tagsUl = ref(null);
      const onTagsChange = () => {
        // position cursor
        const extraCushion = 15;
        paddingLeft.value = tagsUl.value.clientWidth + extraCushion;
        // scroll to end of tags
        tagsUl.value.scrollTo(tagsUl.value.scrollWidth, 0);
        // emit value on tags change
        emit("update:modelValue", tags.value);
      };
      
      watch(tags, () => nextTick(onTagsChange), { deep: true });
      onMounted(onTagsChange);
  
      // options
      const availableOptions = computed(() => {
        if (!props.options) return false;
        return props.options.filter((option) => !tags.value.includes(option));
      });

      
  
      return {
        tags,
        newTag,
        addTag,
        removeTag,
        paddingLeft,
        tagsUl,
        availableOptions,
        id,
        duplicate,
        searchList,
        isShowSearchList
      };
    },
  };
  </script>
<template>
  <div class="tag-input" :class="{ 'with-count': showCount }">
    <input
      v-model="newTag"
      type="text"
      :list="id"
      autocomplete="off"
      @keydown.enter="addTag(newTag)"
      @keydown.prevent.tab="addTag(newTag)"
      @keydown.delete="newTag.length || removeTag(tags.length - 1)"
      :style="{ 'padding-left': `${paddingLeft}px` }"
      :placeholder="tags.length ? '' : placehold"
      @focus="isShowSearchList = true"
      @blur="isShowSearchList = false"
    />

    <datalist v-if="options" :id="id">
      <option v-for="option in availableOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </datalist>

    <ul class="tags" ref="tagsUl">
      <li
        v-for="(tag, index) in tags"
        :key="tag"
        class="tag"
        :class="{ duplicate: tag === duplicate }"
      >
        <span>{{ tag }}</span>
        <button class="delete" @click="removeTag(index)">x</button>
      </li>
    </ul>
    <div v-if="showCount" class="count">
      <span>{{ tags.length }}</span> tags
    </div>
    <div class="search-list" v-show="isShowSearchList">
      <div class="search-item" v-if="searchList.length" v-for="tag in searchList">{{ tag }}</div>
      <div class="no-item" v-else>
        <span>No data</span>
      </div>
    </div>
  </div>
</template>
  <style scoped lang="scss">
  .tag-input {
    position: relative;
    height: 40px;
    input {
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  }
  ul {
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10px;
    max-width: 75%;
    overflow-x: auto;
  }
  .tag {
    background: rgb(145, 200, 233);
    padding: 0 10px;
    border-radius: 4px;
    color: white;
    white-space: nowrap;
    transition: 0.1s ease background;
  }
  input {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .delete {
    color: white;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    padding-bottom: 3px;
  }
  @keyframes shake {
    10%,
    90% {
      transform: scale(0.9) translate3d(-1px, 0, 0);
    }
  
    20%,
    80% {
      transform: scale(0.9) translate3d(2px, 0, 0);
    }
  
    30%,
    50%,
    70% {
      transform: scale(0.9) translate3d(-4px, 0, 0);
    }
  
    40%,
    60% {
      transform: scale(0.9) translate3d(4px, 0, 0);
    }
  }
  .tag.duplicate {
    background: rgb(235, 27, 27);
    animation: shake 1s;
  }
  .count {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    display: block;
    font-size: 0.8rem;
    white-space: nowrap;
  }
  .count span {
    background: #eee;
    padding: 2px;
    border-radius: 2px;
  }
  .with-count input {
    padding-right: 60px;
  }
  .with-count ul {
    max-width: 60%;
  }

  .search-list {
    background-color: white;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding: 4px 0;
    border-radius: 8px;
    .search-item {
      padding: 2px 16px;
      background-color: wheat;;
    }
    .no-item {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        color: #ccc;
        font-size: 15px;
      }
    }
  }
  </style>