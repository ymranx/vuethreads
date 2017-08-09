import Http from 'axios'

let threaddb = localStorage.getItem("threaddb");

export default {
    data: function () {
        return {
            data: null
        }
    },
    mounted: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function () {
            if (threaddb && threaddb != "") {
                this.data = JSON.parse(threaddb);
            } else {
                Http.get('/static/db.json', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((res) => {
                        this.data = res.data;
                        localStorage.setItem("threaddb", JSON.stringify(res.data));
                    }).catch((err) => {
                        console.log(err);
                    });
            }

        },
        btnClick: function (el, ev) {
            console.log(el);
        }
    }
}