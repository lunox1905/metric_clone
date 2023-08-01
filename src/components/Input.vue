<script setup lang="ts">
    const props = defineProps(['title', 'placehold', 'type', 'value'])
    defineEmits(['update:modelValue'])

</script>

<template>
    <div v-if="props.type === 'checkbox'" >
        
        <div class="form-check">
            <input class="form-check-input" type="checkbox" :value="props.value" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                {{ props.placehold }}
            </label>
        </div>
    </div>
    <div v-if="props.type === 'input'" class="wrapper-input">
        
        <input
            :placeholder="props.placehold"
            :value="props.value"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
    </div>

</template>

<style scoped lang="scss">
    .wrapper-input {
        width: 100%;
        input {
            width: 100%;
            height: 40px;
            padding: 0 12px;
            border: 1px solid #ccc;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>