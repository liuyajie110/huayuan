<template>
  <view class="hiddenrealm">
    <view class="hiddenrealm-nav-bar"><navBar :leftIcon="false" title="心神秘境" :placeholder="false" :textStyle="{ color: '#ffffff' }"></navBar></view>
    <view class="hiddenrealm-content">
      <view class="hiddenrealm-content-banner">
        <image class="hiddenrealm-content-banner-img" src="https://img.woshiwo.me/applet/hualu/hiddenRealm/banner.png" mode="scaleToFill"></image>
      </view>
      <view class="hiddenrealm-button">
        <view class="hiddenrealm-button-view">
          <text class="hiddenrealm-button-text">开始探索</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
  import navBar from '@/components/navBar.vue';
</script>
<style lang="scss" scoped>
  .hiddenrealm {
    width: 100%;
    height: 100vh;
  }
  .hiddenrealm-content {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .hiddenrealm-content-banner,
  .hiddenrealm-content-banner-img {
    width: 100%;
    height: 100%;
  }
  .hiddenrealm-button {
    width: 100%;
    position: absolute;
    bottom: 240rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    .hiddenrealm-button-view {
      width: 384rpx;
      height: 98rpx;
      background: rgba(0, 0, 0, 0.14);
      border-radius: 72rpx 72rpx 72rpx 72rpx;
      border: 2rpx solid rgba(221, 221, 221, 0.38);
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'SourceHanSerifCN-Medium';
      color: #fff7d9;
      font-size: 32rpx;
    }
  }
</style>
