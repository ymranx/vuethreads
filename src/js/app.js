export default {
    data: function () {
        return {
            list: []
        }
    },
    mounted: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function () {
            //   Http.get('api/users')
            //     .then((res) => {
            //       console.log(res.data);
            //       this.list = res.data;
            //     }).catch((err) => {
            //       console.log(err);
            //     });
        },
        btnClick: function (el, ev) {
            console.log(el);
        }
    }
}