<template>
  <view class="archive">
    <view class="archive-navBar"><navBar title="档案列表" :placeholder="false" /></view>
    <view class="archive-content">
      <view class="archive-top"><image class="archive-top-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/archive/archive-top.png" mode="widthFix" /></view>
      <view class="archive-user">
        <up-checkbox-group>
          <view class="archive-user-list">
            <view class="archive-user-radio"><up-checkbox shape="circle" iconColor="#416050" activeColor="#ffffff" /></view>
            <view class="archive-user-content">
              <view class="archive-content-left"
                ><image class="archive-content-left-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/my/my-default-icon.png" mode="widthFix"
              /></view>
              <view class="archive-content-center">
                <view class="archive-content-center-name">
                  <text class="archive-content-name-text">AAA8780</text
                  ><image class="archive-content-name-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/archive-man-icon.png" mode="widthFix"
                /></view>
                <view class="archive-user-center-relationship">
                  <text class="archive-user-center-relationship-text">自己</text>
                </view>
              </view>
            </view>
            <view class="archive-user-edit">
              <image class="archive-user-edit-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/archive-editor-icon.png" mode="widthFix"></image>
            </view>
          </view>
        </up-checkbox-group>
      </view>
    </view>
    <view class="archive-btn">
      <!-- <view class="archive-btn-add"> 新建档案 </view> -->
      <view class="archive-btn-edit-add"> 新建档案 </view>
      <view class="archive-btn-select"> 选择完成 </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
  import navBar from '@/components/navBar.vue';
</script>
<style lang="scss" scoped>
  .archive {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }
  .archive-content {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    background-image: linear-gradient(180deg, rgb(186, 248, 253, 0.4), rgb(236, 235, 226, 0.4), rgb(222, 242, 214, 0.4));
  }
  .archive-top,
  .archive-top-img {
    width: 100%;
  }
  .archive-user {
    width: 100%;
    padding: 0 64rpx 200rpx 64rpx;
    box-sizing: border-box;
    margin-top: -280rpx;
  }
  .archive-user-list {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 24rpx 0;
    border-bottom: 2px solid #d7e2d7;
    .archive-user-content {
      flex: 1;
      display: flex;
      align-items: center;
      padding-left: 24rpx;
      .archive-content-center {
        padding-left: 38rpx;
        .archive-content-name-text {
          font-size: 32rpx;
          color: #262626;
          padding-right: 16rpx;
        }
      }
      .archive-content-center-name {
        display: flex;
        align-items: center;
      }
      .archive-user-center-relationship {
        padding-top: 32rpx;
        .archive-user-center-relationship-text {
          background: #ffffff;
          border-radius: 40rpx 40rpx 40rpx 40rpx;
          padding: 2rpx 14rpx;
          font-family: 'SourceHanSerifCN-Light';
          font-size: 24rpx;
        }
      }
    }
    .archive-content-left-img {
      width: 128rpx;
    }
    .archive-content-name-img {
      width: 20rpx;
    }
    .archive-user-edit-img {
      width: 35rpx;
    }
  }

  .archive-user-radio {
    :deep(.u-checkbox__icon-wrap) {
      border-color: #345645 !important;
    }
  }
  .archive-btn {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 60rpx;
    display: flex;
    justify-content: center;
  }
  .archive-btn-add {
    width: 384rpx;
    height: 80rpx;
    background: #345645;
    border-radius: 160rpx 160rpx 160rpx 160rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'SourceHanSerifCN-SemiBold';
    color: #ffffff;
    letter-spacing: 1rpx;
  }
  .archive-btn-edit-add {
    width: 220rpx;
    height: 80rpx;
    background: #deeed7;
    border-radius: 160rpx 160rpx 160rpx 160rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'SourceHanSerifCN-SemiBold';
    font-size: 32rpx;
    color: #345645;
    margin-right: 24rpx;
  }
  .archive-btn-select {
    width: 384rpx;
    height: 80rpx;
    background: #345645;
    border-radius: 160rpx 160rpx 160rpx 160rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'SourceHanSerifCN-SemiBold';
    font-size: 32rpx;
    color: #f9f9f1;
  }
</style>
