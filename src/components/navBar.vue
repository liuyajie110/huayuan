<template>
  <view class="nav-bar">
    <up-navbar safeAreaInsetTop :placeholder="props.placeholder" class="nav-bar-components" bgColor="transparent">
      <template #left v-if="leftIcon">
        <!-- <image :src="backPng" mode="widthFix" class="nav-bar-back" @click="navBarBack" /> -->
      </template>
      <template #center>
        <view class="nav-bar-title">
          <template>
            <slot name="navbar-voice"></slot>
          </template>
          <text class="nav-bar-title" :style="props.textStyle">{{ props.title }}</text>
        </view>
      </template>
    </up-navbar>
  </view>
</template>
<script lang="ts" setup>
  // import backPng from '@/static/icons/icon-left-back.png';
  const props = defineProps({
    title: {
      type: String,
      default: '标题',
    },
    leftIcon: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: Boolean,
      default: true,
    },
    textStyle: {
      type: Object,
      default: {},
    },
  });
  const navBarBack = () => {
    uni.navigateBack();
  };
</script>
<style lang="scss" scoped>
  .nav-bar {
    width: 100%;
  }
  .nav-bar-title {
    font-size: 32rpx !important;
    font-family: 'SourceHanSerifCN-Medium' !important;
  }
  .nav-bar-back {
    width: 54rpx;
    font-size: 0;
  }
  .nav-bar-title {
    display: flex;
  }
</style>
