<template>
  <view class="hualu">
    <view class="hualu-nav-bar"><navBar :leftIcon="false" title="花禄" :placeholder="false"></navBar></view>
    <view class="hualu-content">
      <view class="hualu-content-banner">
        <image class="hualu-content-banner-img" src="https://img.woshiwo.me/applet/hualu/huaLu/banner.png" mode="scaleToFill" />
      </view>
      <view>
        <hualu-animation />
      </view>
      <view class="hualu-user-icon">
        <image class="hualu-user-img" src="http://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/huaLu/hulu-user-icon.png" mode="widthFix" />
        <view class="hualu-user-progress">
          <Progress />
        </view>
      </view>
      <view class="hualu-list">
        <view class="hualu-list-xg">
          <image class="hualu-list-img" src="https://img.woshiwo.me/applet/hualu/huaLu/hualu-list-xg.png" mode="widthFix" />
          <text class="hualu-list-text">原神仙骨</text>
        </view>
        <view class="hualu-list-upgrade">
          <image class="hualu-list-img" src="https://img.woshiwo.me/applet/hualu/huaLu/hualu-list-upgrade.png" mode="widthFix" />
          <text class="hualu-list-text">升级工具</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import navBar from '@/components/navBar.vue';
  import Progress from './components/progress.vue';
  import hualuAnimation from './components/hualuAnimation.vue';
</script>

<style scoped lang="scss">
  .hualu {
    width: 100%;
    height: 100vh;
  }
  .hualu-content {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .hualu-content-banner,
  .hualu-content-banner-img {
    width: 100%;
    height: 100%;
  }
  .hualu-list {
    position: absolute;
    bottom: 120rpx;
  }
  .hualu-list {
    width: 100%;
    padding: 0 36rpx;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .hualu-list-xg,
  .hualu-list-upgrade {
    width: 47%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 32px 32px 32px 32px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 22rpx 0 18rpx 34rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .hualu-list-text {
      font-family: 'SourceHanSerifCN-Regular';
      color: #2c5c39;
      padding-top: 10rpx;
    }
    .hualu-list-img {
      width: 110rpx;
    }
  }
  .hualu-user-icon {
    position: absolute;
    top: 180rpx;
    right: 70rpx;
    display: flex;
    align-items: center;
    width: fit-content;
    .hualu-user-img {
      width: 100rpx;
    }
  }
</style>
