import Http from 'axios'

export default {
    data: function () {
        return {
            data : null
        }
    },
    mounted: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function () {
            Http.get('/static/db.json', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((res) => {
                    console.log(res.data);
                    this.data = res.data;
                }).catch((err) => {
                    console.log(err);
                });
        },
        btnClick: function (el, ev) {
            console.log(el);
        }
    }
}