<template>
  <view class="guide-5">
    <view class="guide-5-banner">
      <image class="guide-5-banner-img" src="https://img.woshiwo.me/applet/hualu/guide/guide-5-banner.png" mode="scaleToFill"></image>
    </view>
    <view class="guide-5-content">
      <view class="guide-5-content-text">
        <view class="guide-5-content-text-title">获得金身小像</view>
        <view>从此刻起，我将伴你开启修行， </view>
        <view>寻回散落的力量和灵魂碎片。 </view>
        <view>每日与元神图<text>感应</text>，可滋养魂光。 </view>
        <view> 待 <text>60日</text> 后，元神稳固方可金身重现。 </view>
      </view>
      <view class="guide-5-content-button">
        <view class="guide-5-content-button-text">开启</view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
  .guide-5 {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .guide-5-banner,
  .guide-5-banner-img {
    width: 100%;
    height: 100vh;
  }
  .guide-5-content {
    width: 100%;
    position: absolute;
    bottom: 286rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .guide-5-content-text {
      width: 664rpx;
      background: rgba(255, 234, 176, 0.2);
      border-radius: 24rpx 24rpx 24rpx 24rpx;
      padding: 50rpx 0;
      box-sizing: border-box;
      text-align: center;
      font-family: 'SourceHanSerifCN-Medium';
      font-weight: 400;
      font-size: 32rpx;
      color: #4c4c4c;
      line-height: 62rpx;
      .guide-5-content-text-title {
        padding-bottom: 16rpx;
        background: linear-gradient(1.8532999064023055deg, #ffc042 0%, #b29354 50%, #ffc042 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      text {
        font-size: 36rpx;
        font-family: 'SourceHanSerifCN-SemiBold';
        color: #8c6b29;
      }
    }
    .guide-5-content-button {
      width: 528rpx;
      height: 96rpx;
      margin-top: 52rpx;
      background: #fef6e5;
      opacity: 0.8;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 160rpx 160rpx 160rpx 160rpx;
      padding: 11rpx;
      box-sizing: border-box;
      .guide-5-content-button-text {
        width: 100%;
        height: 100%;
        border-radius: 160rpx 160rpx 160rpx 160rpx;
        border: 1rpx solid #ecdcb8;
        font-family: 'SourceHanSerifCN-SemiBold';
        font-size: 40rpx;
        color: #7f5a10;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
