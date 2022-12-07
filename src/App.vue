<template>
  <div id="nav">
    <div id="head">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/Three">Three</router-link> |
        <router-link to="/login">login</router-link>
    </div>
    <router-view/>
    <div id="notify"></div>
  </div>
</template>

<script>

function notify(msg = "hi msg") {

    let notifyDom = document.getElementById("notify")
    notifyDom.style.display = 'block'
    notifyDom.textContent = msg

    setTimeout(() => {
        notifyDom.style.display = "none"
    }, 3000)

}

// 自定义 监听事件
window.addEventListener("myEvent", function (event) {
    notify(event.data)
})

function dispatchNotify(data = "msg...") {
    // 1.创建自定义事件
    var event = document.createEvent("HTMLEvents");
    // 2.初始化testEvent事件
    event.initEvent("myEvent", false, true);
    event.data = data;
    // 3.触发自定义事件
    window.dispatchEvent(event);
}

window.dbinUtil = {
    notify: notify,
    dispatchNotify: dispatchNotify
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}
#head {
    // position: absolute;
    
}
#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style type="text/css">
    #nav {
        max-width: 100%;
    }
/*     
    @keyframes notify {
        from {
            top: -50px

        };
        to {
            top: 50px
        };
    } */

    #notify {
        position: absolute;
        background: rgb(173, 226, 93);
        top: 30px;
        left: calc( 50% - 200px );
        height: 50px;
        width: 300px;

        border-radius: 5px;
        text-align: center;
        vertical-align: middle;

        font-weight: bold;

        /* animation-duration: 2s; */
        animation: notify 1s;
        -webkit-animation: notify 1s;
        display: none;

    }
</style>

