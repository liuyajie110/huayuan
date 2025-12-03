<template>
  <view class="dewdrop">
    <!-- 顶部导航栏 -->
    <view class="dewdrop-nav-bar">
      <navBar title="露珠" :placeholder="false"></navBar>
    </view>

    <view class="dewdrop-content">
      <view class="dewdrop-content-top">
        <image class="dewdrop-top-img" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/dewdrop/dewdrop-top.png" mode="widthFix"></image>
      </view>
      <view class="dewdrop-content-main">
        <!-- 我的露珠区域 -->
        <view class="dewdrop-my-area">
          <view class="dewdrop-my-area-left">
            <text class="dewdrop-my-label">我的露珠：</text>
            <image class="dewdrop-my-icon" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/dewdrop-droplet.png" mode="widthFix"></image>
            <text class="dewdrop-my-count">90</text>
          </view>
          <view class="dewdrop-my-area-right">
            <image class="dewdrop-my-time" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/dewdrop-time.png" mode="widthFix"></image>
          </view>
        </view>

        <!-- 分割线+充值标题 -->
        <view class="dewdrop-divider-title">
          <view class="dewdrop-divider-line"></view>
          <text class="dewdrop-divider-text">露珠充值</text>
          <view class="dewdrop-divider-end"></view>
        </view>

        <!-- 充值选项网格 -->
        <view class="dewdrop-recharge-grid">
          <view :class="['dewdrop-recharge-item', item.type == 'select' ? 'dewdrop-recharge-item-select' : null]" v-for="(item, idx) in rechargeList" :key="idx">
            <view class="item-dew-num">
              <image class="item-dew-icon" src="https://iami-oss.oss-cn-hangzhou.aliyuncs.com/applet/hualu/icon/dewdrop-droplet.png" mode="widthFix"></image>
              <text>
                {{ item.dew }}
              </text>
            </view>
            <view class="item-dew-price"> ¥{{ item.price }}.00 </view>
          </view>
        </view>
        <!-- 立即充值按钮 -->
        <view class="dewdrop-btn">
          <view class="dewdrop-btn-view"><text class="dewdrop-btn-text">立即充值</text> </view>
        </view>

        <!-- 协议勾选区 -->
        <view class="dewdrop-agreement-area">
          <radio-group class="dewdrop-agreement-checkbox">
            <label class="dewdrop-agreement-label">
              <radio class="dewdrop-agreement-radio" color="#437650" />
              <text class="dewdrop-agreement-text">我已阅读并同意</text>
              <text class="dewdrop-agreement-protocol">《露珠充值协议》</text>
            </label>
          </radio-group>
        </view>

        <!-- 温馨提示 -->
        <text class="dwedrop-tips-text">温馨提示：露珠充值后，不可退款，不可转赠，不可提现</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import navBar from '@/components/navBar.vue';
  const rechargeList = [
    { dew: 100, price: 10, type: 'select' },
    { dew: 300, price: 30, type: '' },
    { dew: 450, price: 43, type: '' },
    { dew: 800, price: 76, type: '' },
    { dew: 1000, price: 95, type: '' },
    { dew: 2000, price: 188, type: '' },
  ];
</script>

<style scoped lang="scss">
  .dewdrop {
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(180deg, rgb(186, 248, 253, 0.4), rgb(236, 235, 226, 0.4), rgb(222, 242, 214, 0.4));
    position: relative;
  }
  .dewdrop-content {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .dewdrop-content-top,
  .dewdrop-top-img {
    width: 100%;
  }

  /* 我的露珠区域 */
  .dewdrop-my-area {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 54rpx;
    margin-top: -280rpx;
    box-sizing: border-box;
    .dewdrop-my-area-left {
      display: flex;
      align-items: center;
      flex: 1;
    }
    .dewdrop-my-area-right {
      display: flex;
      align-items: center;
    }
    .dewdrop-my-icon {
      width: 36rpx;
    }
    .dewdrop-my-time {
      width: 34rpx;
    }
  }
  .dewdrop-divider-title {
    width: 100%;
    padding: 160rpx 122rpx 112rpx 122rpx;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .dewdrop-divider-line {
      width: 160rpx;
      height: 0px;
      border-radius: 0px 0px 0px 0px;
      border: 2rpx solid;
      opacity: 0.6;
      border-image: linear-gradient(90deg, rgba(52, 86, 69, 0), rgba(52, 86, 69, 1)) 2 2;
    }
    .dewdrop-divider-text {
      font-family: 'SourceHanSerifCN-Regular';
      font-weight: 400;
      font-size: 32rpx;
      color: #345645;
      line-height: 32rpx;
      letter-spacing: 1rpx;
    }

    .dewdrop-divider-end {
      width: 160rpx;
      height: 0rpx;
      border-radius: 0rpx 0rpx 0rpx 0rpx;
      border: 2rpx solid;
      opacity: 0.6;
      border-image: linear-gradient(-90deg, rgba(52, 86, 69, 0), rgba(52, 86, 69, 1)) 2 2;
    }
  }
  .dewdrop-recharge-grid {
    width: 100%;
    padding: 0 53rpx;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16rpx;
    .dewdrop-recharge-item {
      width: 100%;
      text-align: center;
      padding: 28rpx 0;
      background: #ffffff;
      border-radius: 24rpx 24rpx 24rpx 24rpx;
    }
    .dewdrop-recharge-item-select {
      border: 3rpx solid #437650;
    }
    .item-dew-icon {
      width: 24rpx;
    }
    .item-dew-num {
      font-family: 'SourceHanSerifCN-Regular';
      font-size: 32rpx;
      color: #437650;
    }
    .item-dew-price {
      font-family: 'SourceHanSerifCN-Light';
      font-size: 28rpx;
      color: #989898;
      padding-top: 10rpx;
    }
  }
  .dewdrop-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 184rpx;
    .dewdrop-btn-view {
      width: 384rpx;
      background: #345645;
      box-shadow: 6rpx 6rpx 17rpx 0rpx rgba(0, 67, 21, 0.2);
      border-radius: 160rpx 160rpx 160rpx 160rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      .dewdrop-btn-text {
        padding: 20rpx 0;
        font-family: 'SourceHanSerifCN-SemiBold';
        font-size: 32rpx;
        color: #ffffff;
        letter-spacing: 6rpx;
      }
    }
  }
  .dewdrop-agreement-area {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 56rpx 0 278rpx 0;
    font-family: 'SourceHanSerifCN-Light';
    font-size: 24rpx;
  }
  .dewdrop-agreement-checkbox {
    :deep(.dewdrop-agreement-radio) {
      transform: scale(0.7);
      border-radius: 50%;
    }
  }
  .dwedrop-tips-text {
    width: 100%;
    display: flex;
    justify-content: center;
    font-family: 'SourceHanSerifCN-Light';
    font-size: 24rpx;
    color: #666666;
  }
</style>
