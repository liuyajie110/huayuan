<template>
  <view class="login">
    <view class="login-main">
      <view class="login-main-img">
        <image class="login-img" :src="loginMainBc" mode="scaleToFill"></image>
      </view>
    </view>
    <view class="login-content">
      <view class="login-navbar"><NavBar title="登录" leftIcon></NavBar></view>
      <view class="login-header">
        <view class="login-header-img">
          <!-- <image :src="logo" mode="widthFix"></image> -->
        </view>
        <view class="login-text">
          <text>花禄</text>
        </view>
      </view>
      <view :class="configType == 0 ? 'login-form form-config-true' : 'login-form'">
        <view class="login-form-config" v-if="configType !== 0">
          <view class="login-form-config-title">
            <!-- <image :src="phoneIcon" mode="widthFix" /> -->
            <text>手机号</text>
          </view>
          <view class="login-form-config-input">
            <input type="number" placeholder="请输入手机号" />
          </view>
          <view class="login-form-config-title title-next">
            <!-- <image :src="codeIcon" mode="widthFix" placeholder-class="input-placeholder" /> -->
            <text>验证码</text>
          </view>
          <view class="login-form-config-input input-code">
            <input type="number" placeholder="请输入验证码" placeholder-class="input-placeholder" />
            <view class="input-line"></view>
            <text class="input-send">发送验证码</text>
          </view>
          <view class="login-btn">
            <view class="login-btn-list"><button>登录</button></view>
            <view class="login-btn-text">或</view>
          </view>
        </view>
        <view class="login-btn-list" v-if="!loginFormData.agree"><button @click="agree">一键登录</button></view>
        <view class="login-btn-list" v-if="loginFormData.agree"><button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">一键登录</button></view>
        <view class="login-btn-agree">
          <view class="login-radio" @click="loginFormData.agree = !loginFormData.agree">
            <view class="login-radio-circle" v-if="loginFormData.agree"></view>
          </view>
          <view class="login-btn-agree-text">
            <text @click="loginFormData.agree = !loginFormData.agree">我已阅读并同意</text>
            <text @click="navigateTo('/pages/agreement/index')" class="link-text">《用户协议》</text>和<text @click="navigateTo('/pages/agreement/privacy')" class="link-text">《隐私政策》</text></view
          >
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue';
  import { onLoad } from '@dcloudio/uni-app';
  import NavBar from '@/components/navBar.vue';
  import { navigateTo } from '@/utils/routerJump';
  import { setupShare } from '@/utils/share';
  // import logo from '@/static/images/logo.png';
  // import phoneIcon from '@/static/icons/phone-icon.png';
  // import codeIcon from '@/static/icons/code-icon.png';
  import { agreementApi } from '@/api/agreement/agreement';
  import { authLoginApi } from '@/api/login';
  const loginMainBc = 'https://img.woshiwo.me/applet/rdd/web/1.png';
  const loginFormData = reactive({
    phone: '',
    password: '',
    agree: false,
  });
  const configType = ref(0);

  onMounted(async () => {
    //获取配置
    let res = await agreementApi({});
    configType.value = res.config;
  });
  const agree = () => {
    if (!loginFormData.agree) {
      uni.showToast({
        title: '请先同意用户协议和隐私政策',
        icon: 'none',
      });
      return false;
    }
  };

  const getPhoneNumber = (e: any) => {
    // 一键登录
    if (e.detail.code) {
      //获取用户信息
      getUser(e.detail.code);
    } else {
      uni.showToast({
        title: '获取手机号失败',
        icon: 'none',
      });
    }
  };

  const getUser = (phoneCode: string) => {
    //微信登录
    uni.login({
      provider: 'weixin',
      success: function (loginRes: any) {
        login(phoneCode, loginRes.code);
      },
    });
  };
  const login = async (phonecode: string, wxCode: string) => {
    try {
      let res = await authLoginApi({
        code_phone: phonecode,
        code_openid: wxCode,
      });
      uni.setStorageSync('token', res.token);
    } catch (err) {
      uni.showToast({
        title: '登录失败，请稍后重试',
        icon: 'none',
      });
      return;
    }
  };

  onLoad(() => {
    setupShare('1123123123213', '/pages/index/index', '3');
  });
</script>
<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .login-content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .login-navbar {
    width: 100%;
  }

  .login-main,
  .login-main-img,
  .login-img {
    width: 100%;
    height: 100%;
    font-size: 0;
  }
  .login-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    .login-header-img {
      font-size: 0;
      margin-top: 134rpx;
      image {
        width: 142rpx;
      }
    }
  }
  .login-text {
    padding: 34rpx 0;
    font-weight: bold;
    font-size: 40rpx;
    color: #437650;
    line-height: 32rpx;
    letter-spacing: 4rpx;
    font-family: 'SourceHanSerifCN-Bold';
  }
  .login-form {
    width: 620rpx;
    margin: 0 auto;
  }
  .login-btn {
    padding-top: 84rpx;
  }
  .login-btn-text {
    display: flex;
    justify-content: center;
    padding: 52rpx 0;
    font-size: 36rpx;
    font-family: 'SourceHanSerifCN-Regular';
  }
  .login-btn-list {
    button {
      height: 88rpx;
      background: linear-gradient(90deg, #437650 0%, #437650 100%);
      box-shadow: 6rpx 6rpx 17rpx 0px rgba(0, 67, 21, 0.2);
      border-radius: 40rpx 40rpx 40rpx 40rpx;
      font-size: 36rpx;
      color: #ffffff;
      letter-spacing: 3rpx;
      font-family: 'SourceHanSerifCN-Bold';
    }
  }
  .login-btn-agree {
    display: flex;
    align-items: center;
    padding-top: 48rpx;
  }
  .login-btn-agree-check {
    :deep(.uni-data-checklist) {
      .checklist-box {
        margin: 0;
      }
    }
  }
  .login-btn-agree-text {
    font-weight: 400;
    font-size: 24rpx;
    color: #666666;
    line-height: 28rpx;
    font-family: 'SourceHanSerifCN-Regular';
    .link-text {
      color: #437650;
    }
  }
  .login-form-config-title {
    display: flex;
    align-items: center;
    image {
      width: 50rpx;
    }
    text {
      font-weight: 500;
      font-size: 32rpx;
      color: #004200;
      font-family: 'SourceHanSerifCN-Medium';
    }
  }
  .title-next {
    padding-top: 45rpx;
  }
  .login-form-config-title {
    padding-bottom: 6rpx;
    padding-left: 30rpx;
  }
  .login-form-config-input {
    height: 88rpx;
    background: #f5f7f6;
    box-shadow: 6rpx 6rpx 17rpx 0rpx rgba(0, 67, 21, 0.2);
    border-radius: 50rpx;
    padding-left: 34rpx;
    font-family: 'SourceHanSerifCN-Medium';
    display: flex;
    align-items: center;
    input {
      height: 100%;
    }
    :deep(.input-placeholder) {
      font-size: 28rpx;
      color: #a1a1a1a1;
    }
    .input-line {
      width: 2rpx;
      height: 46rpx;
      background: #437650;
    }
    .input-send {
      font-family: 'SourceHanSerifCN-Medium';
      font-weight: 500;
      font-size: 24rpx;
      color: #004200;
      padding-right: 22rpx;
      padding-left: 10rpx;
    }
  }
  .input-code {
    input {
      width: 430rpx;
    }
  }
  .form-config-true {
    padding-top: 150rpx;
  }
  .login-radio {
    width: 19rpx;
    height: 19rpx;
    border: 2rpx solid #666666;
    border-radius: 50%;
    margin-right: 10rpx;
    padding: 2rpx;
    box-sizing: border-box;
    .login-radio-circle {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background: #004200;
      border-radius: 50%;
    }
  }
</style>
