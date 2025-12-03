export const registerShareMenu = {
  //注册分享菜单
  onLoad() {
    // 显示分享菜单
    uni.showShareMenu({
      menus: ['shareAppMessage', 'shareTimeline'],
      success: () => {
        console.log('分享菜单已显示');
      },
      fail: (err) => {
        console.error('显示分享菜单失败', err);
      },
    });
  },
};

// 自定义分享内容
export const setupShare = (title: string, path: string, imageUrl: string) => {
  // 获取当前页面实例（小程序中页面栈的最后一个元素）
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];

  // 为当前页面注册 onShareAppMessage 配置
  currentPage.onShareAppMessage = () => {
    return {
      title: title || '默认分享标题', // 支持默认值
      path: path || '/pages/index/index', // 默认路径（首页）
      imageUrl: imageUrl || '', // 可选，默认无图
    };
  };
};
