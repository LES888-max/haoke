<template>
  <div class="my">
    <header>
      <div v-if="isLogin" class="login">
        <div class="box1">
          <div class="myIcon">
            <img
              src="http://liufusong.top:8080/img/profile/avatar.png"
              alt=""
            />
          </div>
          <div>
            <div class="name">好客_845296</div>
            <div class="loginout">
              <a @click="loginOut">退出</a>
            </div>
            <div class="editor">
              编辑个人资料 <i class="iconfont icon-arrow"></i>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="nologin">
        <div class="box2">
          <div class="myIcon">
            <img
              src="http://liufusong.top:8080/img/profile/avatar.png"
              alt=""
            />
          </div>
          <div>
            <div class="name">游客</div>
            <div class="register">
              <router-link to="/login">去登陆</router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <van-grid square :column-num="3" :border="false">
        <van-grid-item
          v-for="(item, index) in arr"
          :key="index"
          :text="item.text"
          @click="click(index)"
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
import { getToken, removeToken } from "@/util/auth";
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
      isLogin: false,
    };
  },
  methods: {
    loginOut() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "是否确认退出",
        })
        .then(() => {
          // on confirm
          removeToken();
          this.isLogin = false;
        })
        .catch(() => {
          // on cancel
        });
    },
    click(index) {
      const token = getToken();
      if (token == null) {
        this.$router.push("/login");
      }
      if (index == 0) {
        this.$router.push("/favorate");
      } else if (index == 1) {
        this.$router.push("/rent");
      }
    },
  },
  created() {
    this.isLogin = !!getToken();
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
  .login,
  .nologin {
    height: 260px;
    position: relative;
  }
  .box1,
  .box2 {
    z-index: 10;
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .myIcon {
      position: relative;
      transform: translateY(-50%);
      border-radius: 50%;
      width: 70px;
      height: 70px;
      border: 5px solid #f5f5f5;
      display: inline-block;
      box-shadow: 0 2px 2px #bdbdbd;
      img {
        width: 100%;
      }
    }
  }
  .box2 {
    .name {
      margin-top: -20px;
      margin-bottom: 10px;
    }
    .register {
      color: #999;
      font-size: 12px;
      margin-top: 20px;

      a {
        border-radius: 3px;
        color: #fff;
        display: inline-block;
        font-size: 13px;
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
        background-color: #21b97a;
      }
    }
  }
  .box1 {
    .name {
      margin-top: -20px;
      margin-bottom: 10px;
    }
    .loginout {
      color: #999;
      font-size: 12px;

      a {
        border-radius: 3px;
        color: #fff;
        display: inline-block;
        font-size: 13px;
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
        background-color: #21b97a;
      }
    }
    .editor {
      color: #999;
      font-size: 12px;
      margin-top: 10px;
      i {
        transform: rotate(-90deg);
        display: inline-block;
        margin-top: 2px;
        font-size: 12px;
      }
    }
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
}
</style>
