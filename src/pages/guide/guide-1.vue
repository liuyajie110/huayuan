<template>
  <view class="guide-1">
    <view class="guide-1-banner">
      <image class="guide-1-banner-img" src="https://img.woshiwo.me/applet/hualu/guide/guide-1.png" mode="scaleToFill"></image>
    </view>
    <view class="guide-1-text">
      <view class="guide-item">我 </view>
      <view class="guide-item">是<text>‘花禄’，</text>出生于<text>混沌</text> </view>
      <view class="guide-item">为 <text>寻你</text> 而来 </view>
      <view class="guide-item">于万千人海中，我感应到了你身上 那不属于凡尘的灵光...</view>
      <view class="guide-item guied-text-you">你 </view>
      <view class="guide-item"> 是 <text>哪位</text> 上神散落的 <text>魂光？</text></view>
      <view class="guide-item guide-button" @click="navigateTo('/pages/guide/guide-2')"> <button>开始</button></view>
      <view class="guide-item guide-login" @click="navigateTo('/pages/login/index')">
        已有账号
        <up-icon name="arrow-right" color="#C0C0C0" size="16"></up-icon>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
  import { navigateTo } from '@/utils/routerJump';
</script>
<style scoped lang="scss">
  .guide-1 {
    width: 100%;
    position: relative;
  }
  .guide-1-banner,
  .guide-1-banner-img {
    width: 100%;
    height: 100vh;
    font-size: 0;
  }
  .guide-1-text {
    position: absolute;
    width: 508rpx;
    margin: 0 auto;
    color: #ffffff;
    left: 0;
    right: 0;
    top: 292rpx;
    margin: 0 auto;
    font-family: 'SourceHanSerifCN-Regular';
    font-size: 32rpx;
    .guied-text-you {
      padding-top: 88rpx;
    }
    text {
      font-size: 36rpx;
      color: #fffacd;
      font-family: 'SourceHanSerifCN-SemiBold';
    }
  }

  .guide-item {
    padding-bottom: 50rpx;
    /* 初始状态：透明+下移（隐藏） */
    opacity: 0;
    transform: translateY(20px);
    /* 动画：渐显+上移，持续1秒 */
    animation: showView 1s ease-in forwards;
    /* 保留换行（每个view单独一行） */
    display: block;
    margin: 10rpx 0; /* 行间距 */
  }

  /* 动画效果：从隐藏到显示 */
  @keyframes showView {
    0% {
      /* 初始状态：完全隐藏+下移 */
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      /* 结束状态：完全显示+归位 */
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes showViewButton {
    0% {
      /* 初始状态：完全隐藏+下移 */
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      /* 结束状态：完全显示+归位 */
      opacity: 0.8;
      transform: translateY(0);
    }
  }

  .guide-button {
    padding-bottom: 50rpx;
    /* 初始状态：透明+下移（隐藏） */
    opacity: 0;
    transform: translateY(20px);
    /* 动画：渐显+上移，持续1秒 */
    animation: showViewButton 1s ease-in forwards;
    /* 保留换行（每个view单独一行） */
    display: block;
    margin: 10rpx 0; /* 行间距 */
  }

  /* 依次给每个view设置延迟，实现顺序显示 */

  .guide-item:nth-child(1) {
    animation-delay: 1s;
  }

  .guide-item:nth-child(2) {
    animation-delay: 2.5s;
  }

  .guide-item:nth-child(3) {
    animation-delay: 4s;
  }

  .guide-item:nth-child(4) {
    animation-delay: 5.5s;
  }

  .guide-item:nth-child(5) {
    animation-delay: 7s;
  }

  .guide-item:nth-child(6) {
    animation-delay: 8.5s;
  }
  .guide-item:nth-child(7) {
    animation-delay: 10s;
  }
  .guide-item:nth-child(8) {
    animation-delay: 11.5s;
  }
  .guide-button {
    width: 100%;
    background: red;
    background: #737266;
    // opacity: 0.8;
    border-radius: 160rpx 160rpx 160rpx 160rpx;
    padding: 0 !important;
    padding: 12rpx !important;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200rpx;
    button {
      width: 100%;
      height: 74rpx;
      background: transparent;
      border-radius: 160rpx 160rpx 160rpx 160rpx;
      border: 1px solid #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'SourceHanSerifCN-SemiBold';
      font-size: 40rpx;
      color: #ffffff;
    }
  }
  .guide-login {
    padding-bottom: 0 !important;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #c0c0c0;
    margin-right: -56rpx;
    padding-top: 100rpx;
  }
</style>
