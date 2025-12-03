<template>
  <view class="guide-3">
    <view class="guide-3-banner">
      <image class="guide-3-banner-img" src="https://img.woshiwo.me/applet/hualu/guide/guide-3.png" mode="scaleToFill"></image>
    </view>
    <view class="guide-3-content">
      <view class="guide-3-text">
        <view class="guide-3-text-title"
          >你的魂光尚且微弱，但仍与本体<br />
          有着千丝万缕的联系。
        </view>
        <view class="guide-3-text-subtitle">
          <view> 凭灵魂深处的<text>第一直觉，</text></view>
          <view> 哪位感到宿命般的 <text> 熟悉？</text> </view>
        </view>
      </view>
      <view class="guide-3-icon">
        <!-- <image src="@/static/guide/guide-3-left.png" mode="aspectFit" class="icon-img" />
        <image src="@/static/guide/guide-3-right.png" mode="aspectFit" class="icon-img" /> -->
      </view>
      <view class="guide-3-button">
        <view class="guide-3-button-confirm">
          <text>确认</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
  .guide-3 {
    width: 100%;
    position: relative;
  }
  .guide-3-banner {
    width: 100%;
    background: #1d1c19;
  }
  .guide-3-banner-img {
    width: 100%;
    height: 100vh;
  }
  .guide-3-content {
    width: 100%;
    position: absolute;
    top: 114rpx;
    box-sizing: border-box;
  }
  .guide-3-text {
    width: 100%;
    padding-left: 66rpx;
    padding-right: 112rpx;
    box-sizing: border-box;
  }
  .guide-3-text-title {
    font-size: 32rpx;
    color: #bab6a7;
    font-family: 'SourceHanSerifCN-Regular';
  }
  .guide-3-text-subtitle {
    color: #ffffff;
    font-family: 'SourceHanSerifCN-Regular';
    padding-top: 26rpx;
    text {
      font-family: 'SourceHanSerifCN-SemiBold';
      font-size: 34rpx;
    }
    view:nth-child(2) {
      text-align: right;
    }
  }
  .guide-3-icon {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 30rpx;
    box-sizing: border-box;
    padding-top: 445rpx;
    .icon-img {
      width: 60rpx;
      height: 60rpx;
    }
  }
  .guide-3-button {
    margin-top: 555rpx;
    display: flex;
    justify-content: center;
    .guide-3-button-confirm {
      width: 280rpx;
      height: 96rpx;
      background: #4a4a41;
      border-radius: 160rpx 160rpx 160rpx 160rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 11rpx;
      box-sizing: border-box;
      opacity: 0.8;
      text {
        width: 100%;
        height: 100%;
        font-family: 'SourceHanSerifCN-Medium';
        font-size: 32rpx;
        color: #fff7d9;
        border-radius: 160rpx 160rpx 160rpx 160rpx;
        border: 1px solid #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
