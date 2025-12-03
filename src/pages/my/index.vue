<template>
  <view class="my">
    <view class="my-navbar">
      <navBar title="我的" :placeholder="false" />
    </view>
    <view class="my-mask">
      <image class="my-mask-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/my/my-mask.png" mode="widthFix" />
    </view>
    <view class="my-icon">
      <button class="my-icon-btn" open-type="chooseAvatar">
        <image class="my-icon-img" mode="widthFix" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/my/my-default-icon.png"></image>
      </button>
      <text>Aaron</text>
    </view>
    <view class="my-content">
      <view class="my-content-banner">
        <image class="my-content-banner-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/my/my-content.png" mode="widthFix" />
        <view class="my-content-list">
          <view class="my-content-list-item">
            <view class="my-content-list-icon"><image src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/my/my-luzhu.png" mode="widthFix"> </image></view>
            <view class="my-content-list-text">我的露珠</view>
            <view class="my-content-list-right"><image src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/right-arrow.png" mode="widthFix"> </image></view>
          </view>
          <view class="my-content-list-item">
            <view class="my-content-list-icon"><image src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/my/my-archive.png" mode="widthFix"> </image></view>
            <view class="my-content-list-text">我的档案</view>
            <view class="my-content-list-right"><image src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/right-arrow.png" mode="widthFix"> </image></view>
          </view>
          <view class="my-content-list-item">
            <view class="my-content-list-icon"><image src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/my/my-about.png" mode="widthFix"> </image></view>
            <view class="my-content-list-text">关于我们 </view>
            <view class="my-content-list-right"><image src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/right-arrow.png" mode="widthFix"> </image></view>
          </view>
        </view>
      </view>
    </view>
    <view class="my-back">
      <image class="my-back-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/my/my-back.png" mode="widthFix"></image>
      <text class="my-back-text">退出登录</text>
    </view>
    <up-modal :show="false" :zoom="false" :showConfirmButton="false" class="my-modal">
      <template>
        <view class="my-modal-content">
          <view class="my-modal-title">退出登录</view>
          <view class="my-modal-text">确定要退出登录吗？</view>
          <view class="my-modal-button">
            <view class="my-modal-button-cancel">取消</view>
            <view class="my-modal-button-confirm">确定</view>
          </view>
        </view>
      </template>
    </up-modal>
  </view>
</template>
<script setup lang="ts">
  import navBar from '@/components/navBar.vue';
</script>
<style lang="scss" scoped>
  .my {
    width: 100%;
    min-height: 100vh;
    background: #f1f3eb;
  }
  .my-mask,
  .my-mask-img {
    width: 100%;
  }
  .my-icon {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -118rpx;
  }
  .my-icon-img {
    width: 144rpx;
  }
  .my-icon-btn {
    background: transparent;
  }
  .my-icon-btn::after {
    border: 0;
    border-radius: 0;
  }
  .my-content {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 26rpx;

    .my-content-banner {
      width: 678rpx;
      position: relative;
      .my-content-banner-img {
        width: 100%;
      }
    }
  }
  .my-content-list {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 32rpx 52rpx 0 52rpx;
    box-sizing: border-box;
    .my-content-list-item {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 20rpx 0;
      border-bottom: 2px solid #d7e2d7;
    }
    .my-content-list-text {
      flex: 1;
    }
    .my-content-list-icon {
      width: 54rpx;
      image {
        width: 100%;
      }
    }
    .my-content-list-right {
      width: 40rpx;
      image {
        width: 100%;
      }
    }
  }
  .my-back {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50rpx 0;
    .my-back-img {
      width: 48rpx;
    }
    .my-back-text {
      padding-left: 16rpx;
    }
  }
  .my-modal {
    .my-modal-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    :deep(.u-modal) {
      width: 596rpx !important;
    }
    :deep(.u-modal__content) {
      padding: 60rpx 85rpx;
      background: linear-gradient(0deg, #ffffff 0%, #ffffff 71%, #def2d6 100%);
    }
    .my-modal-title {
      font-size: 36rpx;
      color: #4c4c4c;
      font-family: 'SourceHanSerifCN-Medium';
      font-weight: 500;
    }
    .my-modal-text {
      font-family: 'SourceHanSerifCN-Medium';
      font-size: 28rpx;
      padding: 66rpx 0 70rpx 0;
    }
    .my-modal-button {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .my-modal-button-cancel,
      .my-modal-button-confirm {
        background: #f6f6f6;
        border-radius: 160rpx 160rpx 160rpx 160rpx;
        padding: 18rpx 62rpx;
        color: #666666;
        font-family: 'SourceHanSerifCN-Medium';
      }
      .my-modal-button-confirm {
        color: #345645;
      }
    }
  }
</style>
