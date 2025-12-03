<template>
  <!-- 垂直高度进度条容器 -->
  <view class="progress">
    <!-- 进度填充块：高度绑定progress值 -->
    <view class="progress__fill" :style="{ height: `${progress}%` }"></view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // 进度值（0-100），可外部传入或动态修改
  const progress = ref(10);
</script>

<style lang="scss" scoped>
  .progress {
    width: 8rpx;
    height: 164rpx;
    background-color: #f5f5f5;
    border: 1rpx solid linear-gradient(90deg, rgba(234, 204, 134, 1), rgba(244, 223, 174, 1), rgba(234, 204, 134, 1)) 1 1;
    border-radius: 20rpx;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &__fill {
      width: 100%;
      background: linear-gradient(180deg, #fdeabd 0%, #cdb16f 100%);
      border-radius: 20rpx 20rpx 0 0;
      transition: height 0.5s ease;
    }
  }
</style>
