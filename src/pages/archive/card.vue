<template>
  <view class="archive-card">
    <view class="archive-card-navbar"><navBar title="档案卡" :placeholder="false" /></view>
    <view class="archive-card-content">
      <view class="archive-card-top">
        <image class="archive-card-top-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/archive/archive-top.png"></image>
      </view>
      <view class="archive-card-user">
        <image class="archive-card-user-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/my/my-default-icon.png" mode="widthFix"></image>
        <button class="archive-card-user-btn">
          <image class="archive-card-user-edit" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/archive-editor-icon.png" mode="widthFix"></image>
        </button>
      </view>
      <view class="archive-card-form">
        <view>
          <card-input title="昵称" img="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/archive-name-icon.png" />
          <card-input title="性别" img="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/archive-sex-icon.png" pickerTitle="性别" />
        </view>
        <!-- <view><card-input title="出生时间" img="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/archive-time-icon.png" pickerTitle="公立" /></view> -->
        <!-- <view><card-input title="出生地点" img="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/archive-address-icon.png" pickerTitle="请选择出生地点" /></view> -->
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
  import navBar from '@/components/navBar.vue';
  import cardInput from './components/cardInput.vue';
</script>
<style lang="scss" scoped>
  .archive-card {
    width: 100%;
    min-height: 100vh;
    position: relative;
    background-image: linear-gradient(180deg, rgb(186, 248, 253, 0.4), rgb(236, 235, 226, 0.4), rgb(222, 242, 214, 0.4));
  }
  .archive-card-content {
    width: 100%;
    .archive-card-top {
      width: 100%;
      .archive-card-top-img {
        width: 100%;
      }
    }
  }
  .archive-card-user {
    margin-top: -105rpx;
    display: flex;
    justify-content: center;
    align-items: baseline;
    .archive-card-user-btn {
      margin: 0;
      padding: 0;
    }
    .archive-card-user-btn::after {
      border: 0;
      border-radius: 0;
    }
    .archive-card-user-img {
      width: 144rpx;
    }
    .archive-card-user-edit {
      width: 35rpx;
    }
  }
  .archive-card-form {
    width: 100%;
    padding: 0 54rpx;
    box-sizing: border-box;
  }
</style>
