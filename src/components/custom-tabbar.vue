<template>
  <up-tabbar :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
    <up-tabbar-item text="首页" icon="home" @click="change"></up-tabbar-item>
    <up-tabbar-item text="放映厅" icon="photo" @click="change"></up-tabbar-item>
    <up-tabbar-item text="直播" icon="play-right" @click="change"></up-tabbar-item>
    <up-tabbar-item text="我的" icon="account" @click="change"> </up-tabbar-item>
  </up-tabbar>
</template>
<script lang="ts" setup>
  const change = () => {
    console.log('11');
  };
</script>
