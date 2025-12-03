<template>
  <view class="ai-conversation">
    <view class="ai-conversation-navbar">
      <navBar title="花禄系统" left-icon>
        <template v-slot:navbar-voice>
          <view class="voice-view">
            <image src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/voice.png" mode="widthFix" class="voice"></image>
          </view>
        </template>
      </navBar>
    </view>
    <view class="ai-conversation-banner">
      <image src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/banner/ai-conversation-banner.png" mode="widthFix"></image>
    </view>
    <view class="ai-conversation-header">
      <!-- <aiheader /> -->
    </view>
  </view>
</template>
<script setup lang="ts">
  import navBar from '@/components/navBar.vue';
  import aiheader from './components/aiheader.vue';
</script>
<style lang="scss" scoped>
  .ai-conversation-header {
    width: 100%;
  }
  .voice-view {
    position: relative;
    .voice {
      width: 48rpx;
      position: absolute;
      left: -80rpx;
      top: 0;
    }
  }
</style>
