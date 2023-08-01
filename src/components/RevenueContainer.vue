<script setup lang="ts">
    
    const props = defineProps({
        analytic: { type: Boolean, default: true },
        title: { type: String, required: true},
    })
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="header-revenue">
                <div class="title">
                    <h2>{{ props.title }}</h2>
                    <p>Doanh số</p>
                </div>
                <div class="option">
                    <slot name="option">

                    </slot>
                </div>
            </div>
            <div class="container-revenue">
                <slot>

                </slot>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .wrapper {
        width: 100%;
        background-color: white;
        border-radius: 18px;
        padding: 20px;
        margin: 20px 0;

        .header-revenue {
            display: flex;
            justify-content: space-between;
            margin: 10px 0 20px 0;
            .title {
                position: relative;
                h2, p {
                    margin: 0 0 8px 30px;
                }
                h2 {
                    font-size: 21px;
                }
                &::after {
                    content: '';
                    position: absolute;
                    height: 32px;
                    border-radius: 4px;
                    width: 16px;
                    background-color: var(--primary-color);
                    top: 0;
                }
            }
        }
        
    }
</style>