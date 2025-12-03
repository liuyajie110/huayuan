<template>
  <view class="guide-2" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <view class="guide-2-banner">
      <image class="guide-2-banner-img" src="https://img.woshiwo.me/applet/hualu/guide/guide-2.png" mode="scaleToFill"></image>
    </view>
    <view class="guide-2-induction">
      <view class="guide-2-induction-content">
        <image class="guide-2-arrow-img" src="https://img.woshiwo.me/applet/hualu/guide/guide-2-arrow.png" mode="widthFix"></image>
        <image class="guide-2-hand-img" src="https://img.woshiwo.me/applet/hualu/guide/guide-2-hand.png" mode="widthFix"></image>
        <view class="guide-2-induction-text">
          <text>感应花神</text>
          <text>感应仙君</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { navigateTo } from '@/utils/routerJump';
  let start = ref(0);
  let end = ref(0);

  const handleTouchStart = (e: any) => {
    start.value = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: any) => {
    end.value = e.changedTouches[0].clientX;
    const diffX = start.value - end.value;
    if (diffX > 0) {
      // 左滑 女性角色
      navigateTo('/pages/guide/guide-4');
    } else {
      // 右滑 男性角色
      navigateTo('/pages/guide/guide-4');
    }
  };
</script>
<style scoped lang="scss">
  .guide-2 {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .guide-2-banner,
  .guide-2-banner-img {
    width: 100%;
    height: 100vh;
    font-size: 0;
  }
  .guide-2-induction {
    width: 100%;
    height: 304rpx;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
  }
  .guide-2-induction-content {
    width: 504rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 88rpx;
    position: relative;
  }
  .guide-2-arrow-img {
    width: 426rpx;
    font-size: 0;
  }
  .guide-2-hand-img {
    width: 100rpx;
    font-size: 0;
    position: absolute;
    top: 118rpx;
    /* 滑动动画属性 */
    animation: slide 2.5s ease-in-out infinite;
    transform-origin: center;
  }
  /* 左右滑动动画 */
  @keyframes slide {
    0% {
      transform: translateX(-30rpx); /* 最左侧位置 */
    }
    50% {
      transform: translateX(50rpx); /* 滑动到最右侧 */
    }
    100% {
      transform: translateX(-30rpx); /* 滑动回最左侧 */
    }
  }
  .guide-2-induction-text {
    padding-top: 28rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: 'SourceHanSerifCN-Regular';
    font-size: 32rpx;
    color: #ffffff;
    text-shadow: 2rpx 2rpx 16rpx #ffee7f;
  }
</style>
