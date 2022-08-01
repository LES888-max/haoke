<template>
  <div class="my">
    <header>
      <div v-if="isLogin" class="login">
        <div></div>
      </div>
      <div v-else class="nologin">
        <div></div>
      </div>
    </header>
    <main>
      <van-grid square :column-num="3" :border="false">
        <van-grid-item
          v-for="(item, index) in arr"
          :key="index"
          :text="item.text"
        >
          <template #icon>
            <i :class="item.icon"></i>
          </template>
        </van-grid-item>
      </van-grid>
    </main>
    <div class="join">
      <img src="../../assets/imgs/join.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          icon: "iconfont icon-coll",
          text: "我的收藏",
        },
        {
          icon: "iconfont icon-ind",
          text: "我的出租",
        },
        {
          icon: "iconfont icon-record",
          text: "看房记录",
        },
        {
          icon: "iconfont icon-identity",
          text: "成为房主",
        },
        {
          icon: "iconfont icon-myinfo",
          text: "个人资料",
        },
        {
          icon: "iconfont icon-cust",
          text: "联系我们",
        },
      ],
    };
  },
  computed: {
    isLogin() {
      return !!this.$store.state.tokenObj.token;
    },
  },
};
</script>

<style scoped lang="less">
.my {
  .join {
    img {
      display: block;
      margin: 0 auto;
      width: 93%;
    }
  }
}
.login,
.nologin {
  height: 260px;
  position: relative;
}
.nologin {
  background: url("../../assets/imgs/bg.png") no-repeat;
  background-size: contain;
}
.login {
  background: url("../../assets/imgs/avatar.png") no-repeat center;
  background-size: cover;
}
:deep(.van-grid-item__icon-wrapper) {
  i {
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>
