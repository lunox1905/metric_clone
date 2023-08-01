<script setup lang="ts">
    import Input from '@/components/Input.vue';
    import SelectData from '@/components/SelectData.vue'
    import RevenueBox from '@/components/RevenueBox.vue';
    import IconAnalytics from '@/assets/icons/IconAnalytics.svg'
    import IconSelectDown from '@/assets/icons/IconSelectDown.svg'
    import Button from '@/components/Button.vue';
    import BarChart from '@/components/BarChart.vue';
    import CollumChart from '@/components/CollumChart.vue';
    import RevenueContainerVue from '@/components/RevenueContainer.vue';
    import PieChart from '@/components/PieChart.vue';
    import RevenueTableVue from '@/components/RevenueTable.vue';
    import TabInput from '@/components/TabInput.vue'
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    import { dataByPrice, dataByCategory, dataByTradeMark } from '@/services/apiRevenue'
    const props = defineProps({
        isAnalytic: { type: Boolean}
    })
    const isAnalytic = ref(props.isAnalytic)
    const tags = ref([])
    const inputValue = ref('')
    const sValue = ref('')
    const dataSelect = ref([
        {
            text: 'shope',
            value: 'shope',
            image: 'https://lh3.googleusercontent.com/mvI9jsrKjP7Q7ZqYOXuJTRZF9Q1e4PZJjjmNAyzh6OKtxtSUNPK920MMFsXploU60VPMqHCdJLEMzaEF_ktvIXuII2IEamnw0Cr5Cb97_803ePqQQYOLtHQLrVUe9e2DPZ3MoxTp'
        },
        {
            text: 'Tiki',
            value: 'Tiki',
            disabled: true,
            image: 'https://lh3.googleusercontent.com/mvI9jsrKjP7Q7ZqYOXuJTRZF9Q1e4PZJjjmNAyzh6OKtxtSUNPK920MMFsXploU60VPMqHCdJLEMzaEF_ktvIXuII2IEamnw0Cr5Cb97_803ePqQQYOLtHQLrVUe9e2DPZ3MoxTp'
        },
        {
            text: 'Lazada',
            value: 'Lazada',
            disabled: true,
            image: 'https://lh3.googleusercontent.com/mvI9jsrKjP7Q7ZqYOXuJTRZF9Q1e4PZJjjmNAyzh6OKtxtSUNPK920MMFsXploU60VPMqHCdJLEMzaEF_ktvIXuII2IEamnw0Cr5Cb97_803ePqQQYOLtHQLrVUe9e2DPZ3MoxTp'
        }
    ])
    const timeData = [
      {
        text: 'Trong 30 ngày',
        value: 30,
      }, 
      {
        text: 'Trong 7 ngày',
        value: 7
      }
    ]

    const catagorySelectData = [
      {
        text: 'Tất cả',
        value: 'all'
      },
      {
        text: 'Sắc Đẹp',
        value: 'sac-dep'
      },
      {
        text: 'Nhà Cửa & Đời Sống',
        value: 'nha-cua-doi-song'
      },
      {
        text: 'Thời Trang Nữ',
        value: 'thoi-trang-nu'
      },
      {
        text: 'Điện Thoại & Phụ kiện',
        value: 'dien-thoai'
      },
      {
        text: 'Mẹ & Bé',
        value: 'me'
      },
      {
        text: 'Sức Khỏe',
        value: 'suc-khoe'
      },
      {
        text: 'Thiết Bị Gia Dụng',
        value: 'thiet-bi-gia-dung'
      },
    ]
    const revenue = ref(1224240000)
    
   
      function s() {
        console.log(sValue.value)
        console.log(tags.value)
      }
</script>

<template>
  <div class="container">
    
    <div class="container-input">
      <div class="row">
        <div class="col">
          <div class="item-input">
            <h3 class="title-input">Kênh bán hàng</h3>
            <SelectData 
                :data="dataSelect"
                @update:selectValue="(newValue: string) => sValue = newValue"
            />
          </div>
          <div class="item-input">
            <h3 class="title-input">Thời gian</h3>
            <SelectData 
                :data="timeData"
                
            />
          </div>
          <div class="item-input">
            <h3 class="title-input">Danh mục sản phẩm</h3>
            <SelectData 
                :data="catagorySelectData"
                @update:selectValue="(newValue: string) => sValue = newValue"
            />
          </div>
          </div>
          <div class="col">
            <div class="item-input">
              <h3 class="title-input">Từ khóa (từ khoá hoặc link shop/link sản phẩm)</h3>
              <TabInput v-model="tags" placehold="Nhập từ khóa cách nhau bởi dấu phẩy"/>
            </div>
            <div class="item-input">
              <Input type="checkbox" placehold="Tìm kiếm thông minh" :value="inputValue"/>
            </div>
            <div class="item-input">
              <h3 class="title-input">Hữu ích</h3>
              <Input type="checkbox" placehold="Lọc sản phẩm ảo bất thường" :value="inputValue"/>
            </div>
          </div>
        </div>
        <div class="box-action">
          <Button title="Hiện bộ lọc nâng cao" type="toggle" :icon="IconSelectDown"></Button>
          <Button title="Làm mới bộ lọc" :icon="IconSelectDown"></Button>
          <Button title="Phân tích" type="primary" :icon="IconSelectDown"></Button>
        </div>
      </div>
      <div class="container-analytics" v-show="isAnalytic">
      <div class="container-anlytic-market" >
        <h1>Báo Cáo phân tích thị trường</h1>
        <p class="time-report">
          Từ <strong>20-06-2023</strong> đến <strong>19-07-2023</strong>
        </p>
        <div class="list-revenue-box d-flex">
          <div class="item">
            <RevenueBox title="Doanh số" :text="revenue" :icon="{value: IconAnalytics, color: 'green'}">
              <Button title="Chi tiết tăng trưởng"
                  :icon="IconAnalytics" 
                  backgroundColor="#f5f5f5" 
                  width="100%"
                  :disabled=true
                >
              </Button>
              </RevenueBox>
          </div>
          <div class="item">
            <RevenueBox title="Doanh số" :text="revenue" 
              :icon="{value: IconAnalytics, color: 'green'}"
            >
              <Button title="Chi tiết tăng trưởng"
                :icon="IconSelectDown" 
                backgroundColor="#f5f5f5" 
                width="100%"
                :disabled=true
              >
              </Button>
            </RevenueBox>
          </div>
          <div class="item">
            <RevenueBox title="Doanh số" :text="revenue" :icon="{value: IconAnalytics, color: 'green'}"/>
          </div>
          <div class="item">
            <RevenueBox title="Doanh số" :text="revenue" :icon="{value: IconAnalytics, color: 'green'}"/>
          </div>
        </div>
      </div>
      <h2 class="title-analytic-by-revenue">Phân tích thị trường theo doanh số</h2>
      <div class="option-analytic-by-revenue">
        <Button title="Doanh số" type="primary"></Button>
        <Button title="Số sản phẩm đã bán"></Button>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <RevenueContainerVue title="Ngành hàng">
            <template #option>
              <span>Phân tích chiều sâu</span>
            </template>
            <BarChart :data="dataByCategory"/>
          </RevenueContainerVue>
        </div>
        <div class="col-sm-12">
          <RevenueContainerVue title="Mức giá">
            <template #option>
              <span>Phân tích chiều sâu</span>
            </template>
            <CollumChart :data="dataByPrice"/>
          </RevenueContainerVue>
        </div>
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-6">
              <RevenueContainerVue title="Top 10 thương hiệu">
                <template #option>
                  <span>Phân tích chiều sâu</span>
                </template>
                <PieChart :data="dataByTradeMark"/>
              </RevenueContainerVue>
            </div>
            <div class="col-sm-6">
              <RevenueContainerVue title="Kiểu shop">
                <PieChart :data="dataByTradeMark"/>
              </RevenueContainerVue>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <RevenueContainerVue title="Vùng miền">
          <template #option>
              <span>Phân tích chiều sâu</span>
            </template>
          <PieChart :data="dataByTradeMark"/>
        </RevenueContainerVue>
      </div>
      <div class="col-sm-12">
        <RevenueContainerVue title="Sản phẩm bán chạy">
            <template #option>
              <Button title="Tải về danh sách"
                :icon="IconSelectDown" 
                backgroundColor="#f5f5f5" 
                :disabled=true
              >
              </Button>
            </template>
            <RevenueTableVue />
        </RevenueContainerVue>
      </div>
    </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.container {
  padding: 16px;
  .container-input {
    background-color: white;
    border-radius: 16px;
    margin-bottom: 40px;
    padding: 30px;
    .item-input {
      margin-bottom: 20px;
      .title-input {
        font-size: 15px;
      }
    }
  }
  .box-action {
    display: flex;
    justify-content: end;
    button {
      margin-left: 18px;
    }
  }
  .list-revenue-box {
    $border-color-revenue-box: #ccc;
    padding: 0;
    border-radius: 12px;
    background-color: white;
    border: 1px solid $border-color-revenue-box;
    .item {
      width: calc(100% / 4);
      border-right: 1px solid $border-color-revenue-box;
    }

    .item:last-child {
      border-right: none;
    }
  }

  .title-analytic-by-revenue {
    font-size: 20px;
    margin: 25px 0;
  }

  .option-analytic-by-revenue {
    margin: 30px 0;
    button {
      margin: 0 6px;
    }
  }
}
  
</style>