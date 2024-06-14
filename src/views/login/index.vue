<!-- 登录 -->
<template>
  <div class="container">
    <div class="login-container">
      <!-- 左边 -->
      <div class="left">
        <div class="title">欢迎使用</div>
        <div class="desc">Vite + ElementPlus + Vue3 + Pinia</div>
        <div class="img-box">
          <img src="@/assets/woking.gif" alt="" />
        </div>
      </div>
      <!-- 右边 -->
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .login-container {
    display: flex;
    width: 874px;
    min-width: 874px;
    height: 78%;
    min-height: 600px;
    border-radius: 10px;
    box-shadow:0 0 20px 5px rgba(34, 84, 142, .26);
    background-color :white;

    .left {
      width: 50%;
      padding: 47px 54px;

      .title {
        font-size: 32px;
        text-align: left;
        margin-top: 40px;
        margin-bottom: 16px;
      }

      .desc {
        font-size: 28px;
        text-align: left;
        color: rgb(166, 175, 188);
      }

      img {
        width: 100%;
        height: auto;
        margin: 0px 20px;
      }
    }

    .right {
      flex: 1;
      padding: 30px;
    }
  }
}
</style>