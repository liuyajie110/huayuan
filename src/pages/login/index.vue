<template>
  <view class="login">
    <NavBar title="登录"></NavBar>
    <view @click="go">登录页面内容</view>
  </view>
</template>
<script lang="ts" setup>
  import { onLoad } from '@dcloudio/uni-app';
  import NavBar from '@/components/navBar.vue';
  import { setupShare } from '@/utils/share';
  const go = () => {
    uni.navigateTo({
      url: '/pages/index/index',
    });
  };
  onLoad(() => {
    setupShare('1123123123213', '/pages/index/index', '3');
  });
</script>
<style lang="scss" scoped>
  .login {
    width: 100%;
  }
</style>
