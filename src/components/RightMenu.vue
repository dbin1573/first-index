<template>
    <div>
        <!-- 右键菜单 -->
        <ul id="rightMenu" style="width: 100px">
            <li @click="handleMenu('notify')">通知</li>
            <li @click="handleMenu('close')">关闭</li>
        </ul>
    </div>
</template>

<script>
export default {
    mounted() {
        this.initMenu();
    },
    beforeDestroy() {
        this.closeMenu()
    },
    destroyed() {
        this.closeMenu()
    },
    methods: {
        handleMenu(command) {
            switch (command) {
                case 'notify':
                    this.$notify({
                        title: '消息',
                        message: '通知🪣',
                        type: 'success'
                    });
                    this.notifyCoder()
                    break;
                case 'close':
                    this.$notify.info({
                        title: '消息',
                        message: '关个球球⚽️'
                    });
                    this.closeMenu()
                    break;
            }
        },
        initMenu() {
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
            };
        },
        closeMenu() { 
            document.documentElement.oncontextmenu = function () {
                // 允许右键显示
                return true;
            }
            setTimeout(() => {
                this.initMenu();
            },1000*3)
        },
        lockMenu() {
            
            //总是显示菜单
            document.documentElement.onclick = function () {
                menu.style.display = "display";
            };
        },
        notifyCoder() {
            
        }
    }
};
</script>
 <!-- <script>
    var script = document.createElement('script');
    script.type = 'text/javascript';

    // 传参并指定回调执行函数为onBack
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=onBack';
    document.head.appendChild(script);

    // 回调执行函数
    function onBack(res) {
        alert(JSON.stringify(res));
    }
 </script> -->

<style>
</style>
