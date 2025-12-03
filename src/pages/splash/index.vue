<template>
  <view class="splash" :style="{ opacity: opacityVal }">
    <view class="splash-banner">
      <image class="splash-banner-img" src="https://img.woshiwo.me/applet/hualu/splash/splash_banner.png" mode="widthFix"></image>
    </view>
    <view class="splash-mask">
      <image class="splash-mask-img" src="https://img.woshiwo.me/applet/hualu/splash/splash_mask.png" mode="widthFix"></image>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { onLoad } from '@dcloudio/uni-app';
  let opacityVal = ref(1);
  let timer = ref(1);
  onLoad(() => {
    startFadeOut();
  });
  const startFadeOut = () => {
    timer.value = setInterval(() => {
      opacityVal.value -= 0.05;
      if (opacityVal.value <= 0) {
        clearInterval(timer.value);
        // 动画结束后跳转页面（关闭当前启动页，跳转到首页）
        uni.redirectTo({
          url: '/pages/guide/guide-1', // 目标页面路径
        });
      }
    }, 100);
  };
</script>
<style scoped lang="scss">
  .splash {
    width: 100%;
    position: relative;
  }
  .splash-banner,
  .splash-banner-img {
    width: 100%;
  }
  .splash-mask {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .splash-mask-img {
    width: 523rpx;
    position: absolute;
    top: 284rpx;
  }
</style>
