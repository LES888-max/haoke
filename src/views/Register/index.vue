<template>
  <div>
    <van-nav-bar title="账号登录" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="register">
        <van-button block native-type="submit" type="primary">登录</van-button>
      </div>
      <div class="login">
        <p>还没有账号，去注册~</p>
      </div>
    </van-form>
  </div>
</template>

<script>
import { registerApi } from "@/api";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(value) {
      this.loading();
      const res = await registerApi(value);
      console.log(res);
      const status = res.data.status;
      if (status == 200) {
        const token = res.data.body;
        this.$toast.success("登陆成功！");
        this.$router.push("/my");
        this.$store.commit("SET_TOKEN", token);
      } else {
        this.$toast.fail(res.data.description);
      }
    },
    onClickLeft() {
      this.$router.back();
    },
    loading() {
      this.$toast.loading({
        message: "加载中",
        forbidClick: true,
      });
    },
  },
};
</script>

<style scoped lang="less">
:deep(.van-nav-bar) {
  .van-nav-bar__content {
    background-color: #21b97a;
    .van-icon,
    .van-nav-bar__title {
      color: #fff;
    }
  }
}
:deep(.van-form) {
  margin-top: 15px;
  .van-cell {
    height: 60px;
    line-height: 60px;
    .van-field__control {
      font-size: 17px;
    }
  }
  .register {
    margin: 30px 15px 0;
    .van-button__text {
      font-size: 18px;
    }
  }
  .login {
    margin-top: 30px;
    p {
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
