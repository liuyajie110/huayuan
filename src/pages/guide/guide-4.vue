<template>
  <view class="guide-4">
    <view class="guide-4-banner">
      <image class="guide-4-banner-img" src="https://img.woshiwo.me/applet/hualu/guide/guide-4-banner.png" mode="scaleToFill"></image>
    </view>
    <view class="guide-4-content fade-in-enter-active" v-if="currentIndex === 0">
      <view> 很久以前...... </view>
      <view> 上神们为历劫或守护人间， </view>
      <view> 将自己的元神化为无数 <text class="guide-4-gold">灵魂碎片，</text> </view>
      <view> 散落凡尘，化为凡身 </view>
      <view class="long-top"> <text class="guide-4-gold">你，</text> </view>
      <view> 很可能是其中一缕来自上界的<text class="guide-4-bigtext">魂光 </text></view>
    </view>

    <view class="guide-4-content fade-in-enter-active" v-if="currentIndex === 1">
      <view> 而我‘花禄’， </view>
      <view> 是为<text class="guide-4-gold">指引你回归 </text> 而生的系统 </view>
      <view class="long-top"> 我的名字，便是你的修行法门： </view>
      <view class="long-top"> <text class="guide-4-gold"> 一花一世界，</text> </view>
      <view><text class="guide-4-gold">禄为花之果，花为禄之灵</text> </view>
    </view>

    <view class="guide-4-content fade-in-enter-active" v-if="currentIndex === 2">
      <view> 花禄相济，方得圆满</view>
      <view> 我将引导你，</view>
      <view> 通过 <text class="guide-4-gold">平衡</text> ‘花’与‘禄’的修行， </view>
      <view> 寻回散落的碎片， </view>
      <view class="long-top"> 凝聚力量， <text class="guide-4-gold">重聚元神</text> </view>
      <view class="guide-4-3-finally">还差最后一步，即可开始恢复金身</view>
      <view class="guide-4-3-button"><view class="guide-4-3-button-login">一键登录</view></view>
      <view class="guide-4-3-text">我已阅读并同意《用户协议》和《隐私政策》</view>
    </view>
  </view>
</template>
<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  let currentIndex = ref(0);
  let timer: any = null;
  onMounted(() => {
    timer = setInterval(() => {
      if (currentIndex.value < 2) {
        currentIndex.value++;
      } else {
        if (timer) clearInterval(timer);
      }
    }, 3000); // 每3秒切换一次
  });
</script>
<style scoped lang="scss">
  .guide-4 {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .guide-4-banner,
  .guide-4-banner-img {
    width: 100%;
    height: 100vh;
  }
  .guide-4-content {
    position: absolute;
    top: 348rpx;
    left: 110rpx;
    font-family: 'SourceHanSerifCN-Regular';
    font-weight: 500;
    font-size: 32rpx;
    color: #ffffff;
    line-height: 76rpx;
    letter-spacing: 1px;
    text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.5);
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
  .guide-4-gold {
    font-family: 'SourceHanSerifCN-SemiBold';
    font-size: 36rpx;
    color: #fffacd;
  }
  .guide-4-bigtext {
    font-size: 36rpx;
  }
  .long-top {
    padding-top: 100rpx;
  }
  .guide-4-3-finally {
    font-size: 32rpx;
    text-transform: none;
    background: linear-gradient(0deg, #ffbc47 0%, #ffcc92 50%, #fffc9f 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-top: 280rpx;
  }
  .guide-4-3-button {
    width: 528rpx;
    height: 96rpx;
    border-radius: 160rpx 160rpx 160rpx 160rpx;
    background: #a29381;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    padding: 11rpx;
    box-sizing: border-box;
    margin-top: 60rpx;
    opacity: 0.8;
    .guide-4-3-button-login {
      width: 100%;
      height: 100%;
      border: 1px solid #ffffff;
      border-radius: 160rpx 160rpx 160rpx 160rpx;
      display: flex;
      align-content: center;
      justify-content: center;
    }
  }
  .guide-4-3-text {
    font-size: 24rpx;
    color: #ffffff;
  }
  // 淡入动画关键帧：从透明到完全显示，同时轻微上移
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20rpx); // 初始位置偏下20rpx
    }
    100% {
      opacity: 1;
      transform: translateY(0); // 最终位置回归正常
    }
  }

  // 过渡动画生效时触发动画
  .fade-in-enter-active {
    animation: fadeIn 5s ease-out forwards; // 动画持续5秒，缓出效果
  }

  // 隐藏时不显示（可选，避免残留）
  .fade-in-leave-active {
    opacity: 0;
  }
</style>
