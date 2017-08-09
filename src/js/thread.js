var users = {};
var repId = null;

export default {
    data: function () {
        return {
            showCommentBox: false
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
            // var reply = {
            //     "id": Math.round(Math.random() * 2000),
            //     "text": "Hello I am santhosh 3",
            //     "uid": "002",
            //     "time": Date.parse(new Date())
            // }
            // if (repid) {
            //     var comm = this.getCommentById(repid);
            //     comm.replies.push(reply);
            // } else {
            //     reply.replies = [];
            //     this.json.thread.comments.push(reply);
            // }
            repId = repid;
            this.showCommentBox = true;
            this.$nextTick(() => {
                $("#commentInput").focus();
            })

        },

        postComment() {
            var ctext = $("#commentInput").val();
            if (ctext) {
                var reply = {
                    "id": Math.round(Math.random() * 2000),
                    "text": ctext,
                    "uid": "002",
                    "time": Date.parse(new Date())
                }
                if (repId) {
                    var comm = this.getCommentById(repId);
                    comm.replies.push(reply);
                } else {
                    reply.replies = [];
                    this.json.thread.comments.push(reply);
                }
                this.showCommentBox = false;
            }
        },
        closeCommentBox() {
            this.showCommentBox = false;    
        },
        btnClick: function (el, ev) {
            $("#commentInput").val("");
            console.log(el);
        }
    }
}