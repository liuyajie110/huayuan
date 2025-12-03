<template>
  <view class="card-input">
    <view class="card-input-name">
      <image :src="img" class="card-input-img" mode="widthFix"></image>
      <text class="card-input-title">{{ title }}</text>
    </view>
    <view class="card-input-content">
      <input type="text" />
      <up-icon name="arrow-down" color="#C8C8C8"></up-icon>
    </view>
    <view class="card-input-picker">
      <up-picker :show="pickerType" :title="pickerTitle" cancelText="" confirmText="完成" closeOnClickOverlay></up-picker>
    </view>
  </view>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const pickerType = ref(false);
  const pros = defineProps({
    title: {
      type: String,
      default: '',
      required: true,
    },
    img: {
      type: String,
      default: '',
      required: true,
    },
    pickerTitle: {
      type: String,
      default: '',
    },
  });
</script>
<style lang="scss" scoped>
  .card-input {
    width: 100%;
  }
  .card-input-name {
    display: flex;
    align-items: center;
    padding: 68rpx 0 20rpx 0;
  }
  .card-input-title {
    padding-left: 6rpx;
  }
  .card-input-content {
    width: 100%;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16rpx 16rpx 16rpx 16rpx;
    input {
      width: 90%;
      height: 80rpx;
    }
  }
  .card-input-img {
    width: 48rpx;
  }
  .card-input-picker {
    :deep(.u-toolbar__title) {
      font-family: 'SourceHanSerifCN-SemiBold';
      font-size: 36rpx;
      color: #345645;
    }
  }
</style>
