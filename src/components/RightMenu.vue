<template>
  <div>
    <!-- 右键菜单 -->
    <ul id="rightMenu" style="width: 100px">
      <li>通知</li>
      <li>关闭</li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    //提取到函数外面作为全局变量
    var menu = document.getElementById("rightMenu");

    //自定义一个浏览器右键菜单，单击右键是显示它
    //oncontextmenu上下文菜单事件，右键菜单
    document.documentElement.oncontextmenu = function (event) {
      //显示我们自己定义的右键菜单
      //1.找到菜单
      //提取到函数外面作为全局变量

      //兼容Event对象
      event = event || window.event;

      //2.设置菜单的位置等于鼠标的坐标
      //判断：如果鼠标的位置+菜单的宽度>网页的宽度，那么就改为右边定位
      //鼠标坐标
      var mx = event.clientX;
      var my = event.clientY;
      //菜单宽度
      var menuWidth = parseInt(menu.style.width);
      //网页的宽度(高度用同样的方法解决)
      var pageWidth = document.documentElement.clientWidth;
      //console.log(pageWidth);
      if (mx + menuWidth < pageWidth) {
        menu.style.left = mx + "px";
        menu.style.top = my + "px";
      } else {
        menu.style.right = mx + "px";
        menu.style.top = my + "px";
      }

      //3.显示右键菜单
      menu.style.display = "block";
      // alert('display: block');

      //阻止默认的右键菜单显示
      return false;
    };

    //任何点击 隐藏菜单
    document.documentElement.onclick = function () {
      menu.style.display = "none";
      // alert('display: none');
    };
  },
};
</script>

<style></style>
