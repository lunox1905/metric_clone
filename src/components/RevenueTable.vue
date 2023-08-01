<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import { CustomerService } from '@/services/apiRevenueTable';
    import IconStar from '@/assets/icons/IconStar.svg'
    import IconAnalytics from '@/assets/icons/IconAnalytics.svg'
    import IconTrending from '@/assets/icons/IconTrending.svg'
    import IconForecast from '@/assets/icons/IconForecast.svg'
    import convertNumber from '@/utils/convertNumberToPrice';
    onMounted(() => {
        
        revenueData.value = CustomerService.getData()
    });
    
    const revenueData = ref();
    const data = ref([
        {
            image: 'https://img-cdn-f.metric.vn/x1tu_gtVlCWanVkGO6lLvPIbQfg=/400x400/cf.shopee.vn/file/93b3f6d4799b06f9279f817540daa4d1',
            title: 'Apple iPhone 14 Pro Max 128GB',
            rating: {
                score: 4,
                amount: 756
            },
            totalSold: 3700,
            shopName: 'Apple Flagship Store'
        }
    ])

    const headerStyle = ref({
        alignItem: 'center',
        textAlign: 'center',
        height: '50px',
        maxHeight: '50px',
        background: '#fafafa'
    })

    const colStyleCommon = ref({
        textAlign: 'center',
        minWidth: '152px',
        height: '120px',
        borderBottom: '1px solid #ccc'
    })

    const firstColStyle = ref({
        textAlign: 'center',
        minWidth: '350px',
        height: '120px',
        background: 'white',
        borderBottom: '1px solid #ccc'
    })

    const lastColStyle = ref({
        textAlign: 'center',
        minWidth: '140px',
        background: 'white',
        borderBottom: '1px solid #ccc'
    })

    const isAuth = ref(false)
    function av() {
        console.log('dsd')
    }
    function handleScroll(event : any) {
      console.log('sdsd')
    }
</script>

<template>
    <div class="card" :onscroll="handleScroll" >
        <DataTable :value="revenueData" scrollable scrollHeight="1000px" paginator :rows="10" :rowsPerPageOptions="[10, 20, 50]"
        
        >
            <Column field="product" header="Sản phẩm" :header-style="headerStyle" 
                :style="firstColStyle" 
                frozen class="font-bold float"
            >
                <template #body="{ data }">
                    <div class="product-table-revenue">
                        <img :src="data.product.image" alt="">
                        <div class="container">
                            <h5 class="title">
                                <img src="https://metric.vn/mimg/mall_flag.svg" alt="">
                                {{ data.product.title }}
                            </h5>
                            <div class="rating">
                                <div class="star">
                                    <IconStar v-for="n in 5" :class="{'active': n <= data.product.rating.score }" />
                                </div>
                                <span>{{ data.product.rating.amount }} đánh giá</span>
                            </div>
                            <p>Tổng số sản phẩm đã bán: {{ data.product.totalSold }}</p>
                            <p>
                                <img src="https://lh3.googleusercontent.com/mvI9jsrKjP7Q7ZqYOXuJTRZF9Q1e4PZJjjmNAyzh6OKtxtSUNPK920MMFsXploU60VPMqHCdJLEMzaEF_ktvIXuII2IEamnw0Cr5Cb97_803ePqQQYOLtHQLrVUe9e2DPZ3MoxTp" alt="">
                                {{ data.product.shop }}
                            </p>
                        </div>
                        <div class="special-icon">i
                            <div class="alert-hover-special-icon">
                                <p>{{ data.product.title }}</p>
                                <p>{{ data.product.updatedAt }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </Column>
            <Column field="price" header="Giá bán" :header-style="headerStyle" :style="colStyleCommon" sortable>
                <template #body="{data}">
                    <span>{{ convertNumber(data.price) }}đ</span>
                </template>
            </Column>
            <Column field="priceOfType" header="Giá trong phân loại hàng" :header-style="headerStyle" :style="colStyleCommon">
                <template #body="{data}">
                    <span>{{ convertNumber(data.priceOfType) }}đ</span>
                </template>
            </Column>
            <Column field="revenueOfDay" header="Doanh số trong khoảng ngày đã chọn" :header-style="headerStyle" :style="colStyleCommon" sortable>
                <template #body="{data}">
                    <span v-if="isAuth">{{ convertNumber(data.revenueOfDay) }}đ</span>
                    <span v-else class="warn-upgrade">Nâng cấp tài khoản</span>
                </template>
            </Column>
            <Column field="productHasBuyOfDay" header="Sản phẩm đã bán trong khoảng ngày đã chọn" sortable :header-style="headerStyle" :style="colStyleCommon">
                <template #body="{data}">
                    <span v-if="isAuth">{{ data.productHasBuyOfDay }}</span>
                    <span v-else class="warn-upgrade">Nâng cấp tài khoản</span>
                </template>
            </Column>
            <Column field="totalRevenue" header="Tổng doanh thu" :header-style="headerStyle" :style="colStyleCommon" sortable>
                <template #body="{data}">
                    <span>{{ convertNumber(data.totalRevenue) }}đ</span>
                </template>
            </Column>
            <Column field="totalRating" header="Tổng đánh giá" :header-style="headerStyle" :style="colStyleCommon" sortable>
                <template #body="{data}">
                    <span v-if="isAuth">{{ data.totalRating }}</span>
                    <span v-else class="warn-upgrade">Nâng cấp tài khoản</span>
                </template>
            </Column>
            <Column field="category" header="Ngành hàng" :header-style="headerStyle"  :style="colStyleCommon">
            </Column>
            <Column field="trademark" :header-style="headerStyle" header="Thương hiệu" :style="colStyleCommon"></Column>
            <Column  header="Thông tin" :header-style="headerStyle"
                :style="lastColStyle" 
                alignFrozen="right" frozen
                class="font-bold float"
            >
                <template #body="">
                    <div class="table-data-option">
                        <div class="d-flex justify-content-center align-items-center">
                            <IconAnalytics/>
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <IconForecast/>
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <IconTrending/>
                        </div>
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<style lang="scss">
    .p-column-header-content {
        justify-content: center;
        position: relative;
        &::after {
            position: absolute;
            content: '';
            right: 0;
            height: 20px;
            width: 1px;
            background: #ccc;
        }
    }
    .p-paginator-bottom {
        margin: 0;
        padding: 0;
    }
    .p-paginator {
        justify-content: end !important;
        .p-paginator-page {
            height: 30px !important;
            width: 30px !important;
            border-radius: 8px;
            border: 1px solid #ccc;
        }
    }
    .p-paginator .p-paginator-pages .p-paginator-page {
        height: 32px !important;
            min-width: 32px !important;
            border-radius: 4px;
            border: 1px solid #ccc;

    }

    .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
        background-color: white;
        border-color: var(--primary-color) !important;
    }

    .card {
        border: none;
        table {
            th, td {
                padding: 0px !important;
            }
            th {
                padding: 0 0 0 6px !important;
                span:first-child {
                    font-weight: 650;
                    font-size: 14px;
                }
                span:last-child {
                    margin-right: 6px;
                }
                
            }
            .warn-upgrade {
                color: rgb(63, 148, 245);
            }
            .product-table-revenue {
                display: flex;
                padding: 8px;
                height: 100%;
                width: 100%;
                position: relative;
                img {
                    width: 62px;
                    height: 62px;
                    border: 1px solid #c6ecee;
                }
                .container {
                    text-align: start;
                    h5 {
                        font-size: 14px;
                        img {
                            width: 28px;
                            height: 14px;
                        }
                    }

                    .rating {
                        display: flex;
                        align-items: center;
                        .star {
                        display: flex;
                        margin-right: 5px;
                        svg {
                            color: #ccc;
                            width: 10px;
                            height: 10px;
                        }
                        .active {
                            color: var(--primary-color);
                        }
                        
                    }
                    }
                    span,p {
                        font-size: 11px;
                        
                    }
                    p {
                        margin: 5px 0;
                        line-height: 12px;
                        img {
                            height: 12px;
                            width: 12px;
                            border-radius: 50%;
                        }
                    }
                }
                .special-icon {
                    position: absolute;
                    width: 13px;
                    height: 13px;
                    background-color: #ccc;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 11px;
                    top: 10px;
                    right: 0;
                    border-radius: 50%;
                    &:hover {
                        .alert-hover-special-icon {
                            display: block;
                        }
                    }
                    .alert-hover-special-icon {
                        position: absolute;
                        width: 250px;
                        left: -122px;
                        bottom: 25px;
                        font-size: 15px;
                        padding: 0px 10px;
                        border-radius: 4px;
                        opacity: 0.9;
                        color: white;
                        background-color: var(--background-color-alert-disable);
                        display: none;
                        p {
                            text-align: start;
                            margin: 0;
                            padding: 4px 0;
                        }
                        p:first-child {
                            border-bottom: 2px solid white;
                        }

                        &::before {
                            background: var(--background-color-alert-disable);
                            content: "";
                            height: 7px;
                            left: 50%;
                            position: absolute;
                            bottom: -7px;
                            transform: translateY(-50%) rotate(-45deg);
                            width: 7px;
                            z-index: 105;
                        }
                    }
                }
                
            }
            .table-data-option {
                display: flex;
                justify-content: space-around;
                padding: 0 12px;
                div {
                    width: 20px;
                    height: 20px;
                    background-color: #edecec;
                    border-radius: 50%;
                    svg {
                        width: 12px;
                        height: 12px;
                    }
                }
            }
        }
    }
</style>