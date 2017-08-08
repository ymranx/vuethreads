<template>
  <div class="app-thread">
    <div class="post-user">
      <img class="avatar" src="/static/user1.png" />
      <span class="adetails">
        <div class="tuname uname">Hello </div>
        <div class="ttime"> 13 hr ago</div>
      </span>
    </div>
    <div class="ttext">UBUNTU Members - Testing A New Kind of Justice My great friend Scott Cundill, who was involved with me in the epic lawsuit against the banks, has launched a bri...
    </div>
    <div class="post-btns">
      <a class="cmmnt-btn"> Comment </a>
    </div>
    <ul class="comments">
      <li class="comment">
        <img class="comment-avatar" src="/static/user1.png" />
        <div class="comment-section">
          <span class="uname">Abhijit </span>
          <span class="comment-text">Testing A New Kind of Justice My great friend Scott Cundill, who was involved with me in the epic lawsuit against the banks, has launched a </span>
          <div>
            <a class="cmmnt-btn"> Comment </a>
          </div>
          <ul class="comments">
            <li class="comment">
              <img class="comment-avatar" src="/static/user2.png" />
              <div class="comment-section">
                <span class="uname">Abhijit </span>
                <span class="comment-text">Testing A New Kind of Justice My great friend Scott Cundill, who was involved with me in the epic lawsuit against the banks, has launched a </span>
                <div>
                  <a class="cmmnt-btn"> Reply </a>
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