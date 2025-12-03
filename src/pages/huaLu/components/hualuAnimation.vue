<template>
  <view class="hualu-animation">
    <view class="hualu-gif">
      <view class="hualu-gif-content">
        <image class="hualu-gif-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/huaLu/boll.png" mode="widthFix" />
        <image class="hualu-img-outside" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/huaLu/hulu-ball-outside.png" mode="widthFix" />
        <view class="hualu-text">
          <text class="hualu-text-1">自媒体打造</text>
          <text class="hualu-text-2">情感分析</text>
          <text class="hualu-text-3">沟通表达</text>
          <text class="hualu-text-4">创业/副业</text>
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
  .hualu-gif {
    position: absolute;
    width: 100%;
    top: 410rpx;
    display: flex;
    justify-content: center;
    .hualu-gif-content {
      position: relative;
      .hualu-gif-img {
        width: 400rpx;
      }
      .hualu-img-outside {
        position: absolute;
        top: -25rpx;
        left: -40rpx;
        width: 470rpx;
      }
      .hualu-text {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        font-family: 'SourceHanSerifCN-Medium';
        font-size: 28rpx;
        color: #347053;
        width: 100%;
        height: 100%;
        .hualu-text-1 {
          width: 100%;
          position: absolute;
          top: -10rpx;
          left: 120rpx;
        }
        .hualu-text-2 {
          position: absolute;
          top: 180rpx;
          right: -40rpx;
        }
        .hualu-text-3 {
          position: absolute;
          bottom: -20rpx;
          left: 160rpx;
        }
        .hualu-text-4 {
          position: absolute;
          left: -50rpx;
          top: 190rpx;
        }
      }
    }
  }
</style>
