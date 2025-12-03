<script setup lang="ts">
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
  onLaunch(() => {});
  onShow(() => {
    console.log('App Show');
  });
  onHide(() => {
    console.log('App Hide');
  });
</script>
<style>
  page {
    width: 100%;
    min-height: 100vh; /* 兼容不同设备 */
  }
  @font-face {
    font-family: 'SourceHanSerifCN-Bold';
    src: url('https://static.woshiwo.me/SourceHanSerifCN-Bold-2.otf');
    font-display: swap;
  }

  @font-face {
    font-family: 'SourceHanSerifCN-Medium';
    src: url('https://static.woshiwo.me/SourceHanSerifCN-Medium-6.otf');
    font-display: swap;
  }

  @font-face {
    font-family: 'SourceHanSerifCN-ExtraLight';
    src: url('https://static.woshiwo.me/SourceHanSerifCN-ExtraLight-3.otf');
    font-display: swap;
  }

  @font-face {
    font-family: 'SourceHanSerifCN-Heavy';
    src: url('https://static.woshiwo.me/SourceHanSerifCN-Heavy-4.otf');
    font-display: swap;
  }

  @font-face {
    font-family: 'SourceHanSerifCN-Light';
    src: url('https://static.woshiwo.me/SourceHanSerifCN-Light-5.otf');
    font-display: swap;
  }

  @font-face {
    font-family: 'SourceHanSerifCN-Regular';
    src: url('https://static.woshiwo.me/SourceHanSerifCN-Regular-1.otf');
    font-display: swap;
  }

  @font-face {
    font-family: 'SourceHanSerifCN-SemiBold';
    src: url('https://static.woshiwo.me/SourceHanSerifCN-SemiBold-7.otf');
    font-display: swap;
  }
</style>
