<template>
  <view class="container">
    <!-- 加载状态 -->
    <view v-if="loading" class="loading-state">
      <view class="spinner"></view>
      <text>加载中...</text>
    </view>

    <!-- 错误状态 -->
    <view v-if="error" class="error-state">
      <text class="error-text">{{ errorMessage }}</text>
      <button class="retry-btn" @click="getAgreementUrl">重试</button>
    </view>

    <!-- 协议内容 -->
    <web-view v-if="agreementUrl" :src="agreementUrl" @error="handleWebviewError"></web-view>
  </view>
</template>

<script setup>
  import { ref } from 'vue';
  import { onLoad } from '@dcloudio/uni-app';
  import { agreementApi } from '@/api/agreement/agreement';

  const agreementUrl = ref('');
  const loading = ref(true);
  const error = ref(false);
  const errorMessage = ref('');

  const back = () => {
    uni.navigateBack();
  };

  const getAgreementUrl = () => {
    loading.value = true;
    error.value = false;
    agreementUrl.value = '';

    agreementApi({})
      .then((data) => {
        console.log('接口返回数据:', data);

        // 处理用户协议链接格式
        let userAgree = (data.user_agree || '').toString();
        userAgree = userAgree.replace(/[`\s]/g, ''); // 去除反引号和空格

        if (!userAgree) {
          errorMessage.value = '未获取到用户协议内容';
          error.value = true;
        } else if (!userAgree.startsWith('http://') && !userAgree.startsWith('https://')) {
          errorMessage.value = '用户协议链接格式不正确';
          error.value = true;
        } else {
          agreementUrl.value = userAgree;
        }

        loading.value = false;
      })
      .catch((err) => {
        console.error('获取用户协议失败:', err);
        errorMessage.value = err.message || '加载失败，请重试';
        error.value = true;
        loading.value = false;
      });
  };

  const handleWebviewError = (e) => {
    console.error('网页加载错误:', e);
    errorMessage.value = '用户协议加载失败';
    error.value = true;
    loading.value = false;
  };

  onLoad(() => {
    getAgreementUrl();
  });
</script>

<style scoped>
  .container {
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;
  }

  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .spinner {
    width: 50rpx;
    height: 50rpx;
    border: 5rpx solid #f3f3f3;
    border-top: 5rpx solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20rpx;
  }

  .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 40rpx;
  }

  .error-text {
    color: #e74c3c;
    font-size: 32rpx;
    margin-bottom: 30rpx;
    text-align: center;
  }

  .retry-btn {
    background-color: #3498db;
    color: white;
    padding: 15rpx 40rpx;
    border-radius: 8rpx;
    font-size: 28rpx;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
