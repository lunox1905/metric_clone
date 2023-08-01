export const CustomerService = {
    getData() {
        let arr = []
        let data = {
            product: {
                image: 'https://img-cdn-f.metric.vn/x1tu_gtVlCWanVkGO6lLvPIbQfg=/400x400/cf.shopee.vn/file/93b3f6d4799b06f9279f817540daa4d1',
                title: 'Apple iPhone 14 Pro Max 256GB',
                rating: {
                    score: 4,
                    amount: 370
                },
                totalSold: 3210,
                shop: 'Apple flagship store',
                updatedAt: '27/7/2023'
            },
            price: 27300000,
            priceOfType: 27300000,
            revenueOfDay: 1000,
            productHasBuyOfDay: 1000,
            totalRevenue: 1021210000,
            totalRating: 4,
            category: 'Điện Thoại & Phụ Kiện -> Điện Thoại',
            trademark: 'apple'

        }
        for(let i = 0; i < 20; i++) {
            arr.push(data)
        }
        return arr
    },

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    },

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    },

    getCustomers(params) {
        const queryParams = params
            ? Object.keys(params)
                  .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&')
            : '';

        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
    }
};
