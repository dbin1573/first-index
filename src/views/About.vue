<template>
  <div class="about">
    <!--    <link href="/favicon.ico" rel="icon" type="image/x-icon"/>-->

    <!--    <title>DBin-首页</title>-->

    <div class="content">
      <img
        src="https://cn.bing.com/th?id=OHR.JabiruStork_ZH-CN0218761234_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
        style="background: #2c3e50"
        width="75%"
      />
    </div>

    <div class="side_top">
      <div class="head_top">
        <img src="https://dbin-blob.github.io/img/avatar.jpg" />
      </div>

      <div class="head_menu">
        <div>
          <button @click="jump('csdn')">去我的csdn</button>
        </div>
        <div>
          <button @click="jump('blob')">去我的blob</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jump(common) {
      switch (common) {
        case "csdn":
          //window.location.href = "https://blog.csdn.net/DBin1573"
          window.open("https://blog.csdn.net/DBin1573");
          break;
        case "blob":
          window.open("https://dbin-blob.github.io/");
          break;
        default:
          console.log("你发现了新大陆哟");
      }
    }
  }
};
</script>

<style lang="scss">
.about {
  & .content {
    & > img {
      height: 80%;
      width: 80%;
    }
  }

  /*侧边栏*/
  & .side_top {
    /*绝对定位*/
    position: absolute;
    top: 0;
    right: 0;
    background-color: #7c8e98;
    height: 100%;
    width: 300px;

    /*头像*/
    & .head_top {
      height: 110px;
      padding-top: 30px;
      padding-bottom: 30px;
      text-align: center;

      & .head_menu div * {
        text-align: center;
      }

      & > img:hover {
        border: 2px solid white;
        /*圆角*/
        border-radius: 50%;
        width: 120px;
        height: 120px;
      }

      & > img {
        border: 2px solid white;
        /*圆角*/
        border-radius: 50%;
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
