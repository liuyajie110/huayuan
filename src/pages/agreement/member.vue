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
			<button class="retry-btn" @click="getVipUrl">重试</button>
		</view>

		<!-- 协议内容 -->
		<web-view v-if="vipUrl" :src="vipUrl" @error="handleWebviewError"></web-view>
	</view>
</template>

<script>
	import {
		agreementApi
	} from '@/api/agreement/agreement.js'

	export default {
		data() {
			return {
				vipUrl: '',
				loading: true,
				error: false,
				errorMessage: ''
			};
		},
		onLoad() {
			this.getVipUrl();
		},
		methods: {
			getVipUrl() {
				this.loading = true;
				this.error = false;
				this.vipUrl = '';

				agreementApi({})
					.then(data => {
						console.log('接口返回数据:', data);

						// 获取会员协议链接并处理格式（去除反引号和空格）
						let vipAgree = (data.vip_agree || '').toString();
						// 去除反引号和可能的空格
						vipAgree = vipAgree.replace(/[`\s]/g, '');

						if (!vipAgree) {
							this.errorMessage = '未获取到会员协议内容';
							this.error = true;
						} else if (!vipAgree.startsWith('http://') && !vipAgree.startsWith('https://')) {
							this.errorMessage = '会员协议链接格式不正确';
							this.error = true;
						} else {
							this.vipUrl = vipAgree;
						}

						this.loading = false;
					})
					.catch(err => {
						console.error('获取会员协议失败:', err);
						this.errorMessage = err.message || '加载失败，请重试';
						this.error = true;
						this.loading = false;
					});
			},
			handleWebviewError(e) {
				console.error('网页加载错误:', e);
				this.errorMessage = '会员协议加载失败';
				this.error = true;
				this.loading = false;
			}
		}
	};
</script>

<style scoped>
	.container {
		width: 100%;
		height: 100vh;
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