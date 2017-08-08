var users = {};

export default {
    data: function () {
        return {
        }
    },
    props: ['json'],

    mounted: function () {

    },
    methods: {
        getuserById(uid) {
            if (uid in users) {
                return users[uid];
            }
            var fuser = this.json.users.filter((user) => {
                return user.uid == uid;
            });
            if (fuser.length) {
                users[uid] = fuser[0];
                return fuser[0];
            } else {
                return {};
            }
        },
        getCommentById(cid) {
            var fcomm = this.json.thread.comments.filter((comment) => {
                return comment.id == cid;
            });
            if (fcomm.length) {
                return fcomm[0];
            } else {
                return null;
            }
        },

        openReplyBox: function (repid) {
            var reply = {
                "id": Math.round(Math.random() * 2000),
                "text": "Hello I am santhosh 3",
                "uid": "002",
                "time": "sfsfsafs"
            }
            if (repid) {
                var comm = this.getCommentById(repid);
                comm.replies.push(reply);
            } else {
                reply.replies = [];
                this.json.thread.comments.push(reply);
            }

        },

        btnClick: function (el, ev) {
            console.log(el);
        }
    }
}