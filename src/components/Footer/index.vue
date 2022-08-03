<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/home/search">找房</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/home/news">咨询</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/home/profile"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="less"></style>
