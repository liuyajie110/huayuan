export const baseURL = import.meta.env.VITE_HY_MODE === 'development' ? 'https://iamidev.woshiwo.me' : 'https://iami.woshiwo.me';
const Version = '0.0.1';
/**
 * 网络请求封装
 * @param {string} url - 请求地址
 * @param {string} method - 请求方法：GET, POST,
 * @param {object} data - 请求数据
 * @param {object} config - 配置项
 * @returns {Promise} - 返回Promise对象
 */
export const request = (url: string, method: any = 'GET', data: any = {}, config: any = {}) => {
  const { showLoading = true, loadingText = '加载中' } = config;
  let requestTask: any = null;
  const requestPromise: any = new Promise((resolve, reject) => {
    // 设置默认请求头
    const defaultHeader: any = {
      'Content-Type': 'application/json',
    };
    const token = uni.getStorageSync('token');
    if (token) {
      defaultHeader['Authorization'] = `${token}`;
    }
    defaultHeader['Version'] = Version;
    // 合并请求头
    const requestHeader = {
      ...defaultHeader,
      ...config.header,
    };
    if (showLoading) {
      uni.showLoading({
        title: loadingText,
      });
    }
    // 发起请求
    requestTask = uni.request({
      url: baseURL + url,
      method,
      data,
      header: requestHeader,
      success: (res: any) => {
        const { statusCode, data } = res;
        if (statusCode === 200) {
          if (data.code === 0) {
            resolve(data.data);
          } else if (data.code === 401) {
            // 未登录或token过期
            setTimeout(() => {
              uni.showToast({
                title: data.msg || '请求失败',
                icon: 'none',
                duration: 3000,
              });
            });
            uni.showToast({
              title: '登录已过期，请重新登录',
              icon: 'none',
              duration: 3000,
            });
            uni.clearStorageSync();
            setTimeout(() => {
              uni.navigateTo({
                url: '/pages/login/login',
              });
            }, 1000);
            reject(new Error('登录已过期'));
          } else {
            // 业务错误
            setTimeout(() => {
              uni.showToast({
                title: data.msg || '请求失败',
                icon: 'none',
                duration: 3000,
              });
            });
          }
        } else {
          // HTTP错误
          setTimeout(() => {
            uni.showToast({
              title: `请求失败：${statusCode}`,
              icon: 'none',
              duration: 3000,
            });
          });

          reject(new Error(`HTTP错误：${statusCode}`));
        }
      },
      fail: (err) => {
        if (err.errMsg === 'request:fail abort') {
        } else {
          setTimeout(() => {
            uni.showToast({
              title: '网络错误，请稍后重试',
              icon: 'none',
              duration: 3000,
            });
          });

          reject(new Error('网络错误'));
        }
      },
      complete: () => {
        if (showLoading) {
          uni.hideLoading();
        }
      },
    });
  });

  // 添加取消请求方法
  requestPromise.abort = () => {
    if (requestTask) {
      requestTask.abort();
      requestTask = null;
      console.log('请求已取消');
    }
  };

  return requestPromise;
};

// 封装常用请求方法
/**
 * GET请求
 * @param {string} url - 请求地址
 * @param {object} params - 请求参数
 * @param {object} config - 配置项
 * @returns {Promise}
 */
export const get = (url: any, params = {}, config = {}) => {
  return request(url, 'GET', params, config);
};

/**
 * POST请求
 * @param {string} url - 请求地址
 * @param {object} data - 请求数据
 * @param {object} config - 配置项
 * @returns {Promise}
 */
export const post = (url: any, data = {}, config = {}) => {
  return request(url, 'POST', data, config);
};
