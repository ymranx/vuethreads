<template>
  <div class="app-thread" v-if="json">
    <div class="post-user" >
      <img class="avatar" :src="getuserById(json.thread.uid).pic" />
      <span class="adetails">
        <div class="tuname uname">{{getuserById(json.thread.uid).uname}} </div>
        <div class="ttime"> 13 hr ago</div>
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
          </div>
          <ul class="comments" v-if="comment.replies.length">
            <li v-for="reply in comment.replies" class="comment">
              <img class="comment-avatar" :src="getuserById(reply.uid).pic" />
              <div class="comment-section">
                <span class="uname">{{getuserById(reply.uid).uname}} </span>
                <span class="comment-text">{{reply.text}} </span>
                <div>
                  <a class="cmmnt-btn" @click="openReplyBox(comment.id)"> Reply </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="comment-box"> 
      <input tupe="text"/>
      <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script type="text/javascript" src="../js/thread.js"></script>
<style lang="less" src="../styles/thread.less"></style>