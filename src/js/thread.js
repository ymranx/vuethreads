
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
        // console.log()
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
                    "id": "00" + Math.round(Math.random() * 2000),
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
                localStorage.setItem('threaddb', JSON.stringify(this.json));
                this.showCommentBox = false;
            }
        },
        
        closeCommentBox() {
            this.showCommentBox = false;
        }
    }
}