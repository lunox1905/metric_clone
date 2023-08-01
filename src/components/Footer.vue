<script lang="ts" setup>
    const aboutMetric = [
        'Chính sách bảo vệ thông tin cá nhân khách hàng',
        'Quy định dùng thử dịch vụ',
        'Hình thức thanh toán',
        'Chính sách bảo hành và bảo trì',
        'Chính sách đổi trả sản phẩm',
        'Chính sách đặt hàng',
        'Điều kiện giao dịch chung'
    ]

    const contacts = [
        {
            title: 'Tên đơn vị',
            content: 'CÔNG TY CỔ PHẦN KHOA HỌC DỮ LIỆU'
        },
        {
            title: 'Người đại diện',
            content: 'TRẦN MINH TUẤN'
        },
        {
            title: 'Địa chỉ',
            content: 'Tầng 6 Tòa nhà AZ Lâm Viên, 107A Nguyễn Phong Sắc, phường Dịch Vọng Hậu, quận Cầu Giấy, thành phố Hà Nội, Việt Nam'
        },
        {
            title: 'Điện thoại',
            content: '033.806.2221'
        },
        {
            title: 'Email',
            content: 'info@metric.vn'
        },
        {
            title: 'Số giấy chứng nhận đăng ký kinh doanh',
            content: '0108677693'
        },
        {
            title: 'ngày cấp',
            content: '03 / 04 / 2019, nơi cấp: Sở Kế hoạch và Đầu tư thành phố Hà Nội'
        },
    ]
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="logo">
                        <img src="https://metric.vn/mimg/metric_logo_slogan.svg" alt="">
                    </div>
                    <div class="footer-description">
                        <p class="text-start"><strong>Metric</strong> là Nền tảng Số liệu Thương mại Điện tử dành cho Doanh nghiệp, Thương hiệu và Nhà bán.
                            Metric tạo ra báo cáo phân tích dữ liệu thị trường chỉ trong 30 giây,
                             giúp việc thực thi và ra quyết định kinh doanh nhanh hơn 5 lần.</p>
                    </div>
                    <div>
                        <img class="img" src="https://lh3.googleusercontent.com/bZLHKWWcqriZqy2n9V50TR7q8le3DwZ3wj-gLM7CV4sJgoluQmboRTsXjvwqBfiSX_wevs9t9uzZYK6hdyhUorsv9TmylqT83NVsdA63SwIS-UTaBPlgyi5DIpU1iJwq7EX6Q2_SnA" alt="">
                    </div>
                </div>
                <div class="col">
                    <h3 class="title">VỀ METRIC</h3>
                    <ul>
                        <li class="text-start" v-for="item in aboutMetric">{{ item }}</li>
                    </ul>
                </div>
                <div class="col">
                    <h3 class="title">LIÊN HỆ</h3>
                    <ul>
                        <li v-for="item in contacts">
                            <p class="text-start">{{ item.title }}: {{ item.content }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
    $font-size-text: 15px;
    footer {
        width: 100%;
        background-color: #f2f3fa;
        padding: 30px 50px;
        .logo {
            img {
                width: 215px;
            }
        }
        .footer-description {
            margin: 20px 0;
            display: flex;
            justify-content: start;
            p {
                margin: 0;
                font-size: $font-size-text;
                line-height: 20px;
            }
        }
        h3 {
            font-size: 15px;
        }
        ul {
            list-style: none;
            li {
                display: flex;
                padding: 5px 0;
                font-size: $font-size-text;
                p {
                    margin: 0;
                    
                }
            }
        }
        div {
            .img {
                width: 200px;
            }
        }
    }
</style>