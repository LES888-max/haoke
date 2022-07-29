<template>
  <div>
    <van-grid direction="horizontal" :column-num="2" :border="false">
      <van-cell title="租房小组" value="更多" />
      <van-grid-item>
        <van-image
          width="50px"
          height="50px"
          src="http://liufusong.top:8080/img/groups/1.png"
        />
        <div>
          <p>家住回龙观</p>
          <p>归属的感觉</p>
        </div>
      </van-grid-item>
      <van-grid-item
        ><van-image
          width="50px"
          height="50px"
          src="http://liufusong.top:8080/img/groups/2.png"
        />
        <div>
          <p>宜居四五环</p>
          <p>大都市生活</p>
        </div>
      </van-grid-item>
      <van-grid-item
        ><van-image
          width="50px"
          height="50px"
          src="http://liufusong.top:8080/img/groups/3.png"
        />
        <div>
          <p>喧嚣三里屯</p>
          <p>繁华的背后</p>
        </div>
      </van-grid-item>
      <van-grid-item
        ><van-image
          width="50px"
          height="50px"
          src="http://liufusong.top:8080/img/groups/4.png"
        />
        <div>
          <p>比邻十号线</p>
          <p>地铁心连心</p>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "Team",
};
</script>

<style>
.van-grid-item .van-grid-item__content--center {
  justify-content: space-around;
}
</style>
