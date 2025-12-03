<template>
  <view class="ai-header">
    <view class="ai-header-content">
      <view class="ai-header-content-text">创业/副业</view>
      <view class="ai-header-content-text">自媒体打造</view>
      <view class="ai-header-content-text">沟通表达</view>
      <view class="ai-header-content-text">情感分析</view>
    </view>
    <view class="ai-header-down">
      <view class="ai-header-title">
        <view>介绍文案</view>
        <view>介绍文案</view>
      </view>
      <view class="ai-header-subtitle">
        <text>猜你想问</text>
      </view>
      <view class="ai-header-list">
        <view class="ai-header-list-item">
          <view class="ai-header-list-item-text">推荐问题?</view>
          <view><up-icon name="arrow-right" size="16" color="#C0C0C0"></up-icon></view>
        </view>
        <view class="ai-header-list-item">
          <view class="ai-header-list-item-text">推荐问题?</view>
          <view><up-icon name="arrow-right" size="16" color="#C0C0C0"></up-icon></view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
  .ai-header {
    width: 100%;
  }
  .ai-header-content {
    width: 100%;
    display: flex;
    padding: 0 36rpx;
    box-sizing: border-box;
    .ai-header-content-text {
      width: 25%;
      text-align: center;
      padding: 11rpx 0;
      font-family: 'SourceHanSerifCN-Medium';
      font-size: 28rpx;
    }
    .ai-header-content-text:nth-child(1) {
      background: #fffbe7;
      color: #005868;
      border-radius: 12rpx 0 0 12rpx;
    }
    .ai-header-content-text:nth-child(2) {
      background: #e4f6ff;
      color: #005868;
    }
    .ai-header-content-text:nth-child(3) {
      background: #e0f2e3;
      color: #135d2d;
    }
    .ai-header-content-text:nth-child(4) {
      background: #f5eff3;
      color: #57135d;
      border-radius: 0 12rpx 12rpx 0;
    }
  }
  .ai-header-down {
    width: 100%;
    padding: 0 48rpx;
    box-sizing: border-box;
  }
  .ai-header-title {
    font-family: 'SourceHanSerifCN-Regular';
    font-size: 24rpx;
    color: #c0c0c0;
  }
  .ai-header-subtitle {
    font-family: 'SourceHanSerifCN-Regular';
    font-size: 32rpx;
    color: #666666;
    padding-top: 16rpx;
  }
  .ai-header-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20rpx 0;
    border-bottom: 1px solid #dddddd;
  }
  .ai-header-list-item-text {
    font-size: 28rpx;
    color: #666666;
    font-family: 'SourceHanSerifCN-Light';
  }
</style>
