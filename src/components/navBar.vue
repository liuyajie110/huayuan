<template>
  <view class="nav-bar">
    <uni-nav-bar :fixed="true" status-bar :left-icon="leftIcon ? left : ''" :title="props.title" @clickLeft="back" :border="false" />
  </view>
</template>
<script lang="ts" setup>
  const props = defineProps({
    title: {
      type: String,
      default: '标题',
    },
    leftIcon: {
      type: Boolean,
      default: false,
    },
  });
  const back = () => {
    uni.navigateBack();
  };
</script>
<style lang="scss" scoped>
  .nav-bar {
    width: 100%;
  }
</style>
