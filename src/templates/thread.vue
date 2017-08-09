<template>
  <div class="app-thread" v-if="json">
    <div class="post-user">
      <img class="avatar" :src="getuserById(json.thread.uid).pic" />
      <span class="adetails">
        <div class="tuname uname">{{getuserById(json.thread.uid).uname}} </div>
        <div class="ttime">
          <timeago :since="1502256419000" :auto-update="60"></timeago>
        </div>
      </span>
    </div>
    <div class="ttext"> {{json.thread.text}}
    </div>
    <div class="post-btns">
      <a class="cmmnt-btn" @click="openReplyBox(null)"> Comment </a>
    </div>
    <ul class="comments">
      <li v-for="comment in json.thread.comments" class="comment">
        <img class="comment-avatar" :src="getuserById(comment.uid).pic" />
        <div class="comment-section">
          <span class="uname">{{getuserById(comment.uid).uname}} </span>
          <span class="comment-text">{{comment.text}} </span>
          <div>
            <a class="cmmnt-btn" @click="openReplyBox(comment.id)"> Reply </a>
            <timeago :since="comment.time" :auto-update="60"></timeago>
          </div>
          <ul class="comments" v-if="comment.replies.length">
            <li v-for="reply in comment.replies" class="comment">
              <img class="comment-avatar" :src="getuserById(reply.uid).pic" />
              <div class="comment-section">
                <span class="uname">{{getuserById(reply.uid).uname}} </span>
                <span class="comment-text">{{reply.text}} </span>
                <div>
                  <a class="cmmnt-btn" @click="openReplyBox(comment.id)"> Reply </a>
                  <timeago :since="reply.time" :auto-update="60"></timeago>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="comment-box" v-if="showCommentBox">
      <span class="input-text">
        <input type="text" id="commentInput" class="" placeholder="Type comment and press 'Enter'"
               v-on:keyup.enter="postComment"/>
        <i class="fa fa-paper-plane-o icon" aria-hidden="true"></i>
      </span>
      <i class="fa fa-times-circle icon close-commentbox" v-on:click="closeCommentBox" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script type="text/javascript" src="../js/thread.js"></script>
<style lang="less" src="../styles/thread.less"></style>