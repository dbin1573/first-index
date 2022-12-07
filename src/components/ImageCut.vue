<template>
    <div id="container">
        <el-input placeholder="请输入内容" v-model="url" @change="changeImg"></el-input>
        <el-input placeholder="请输入内容" style="width:100px" v-model="height" @change="changeImg"></el-input>
        <el-input placeholder="请输入内容" style="width:100px" v-model="width" @change="changeImg"></el-input>
        <p></p>
        <canvas id="canvas" :width="width" :height="height"></canvas>
        <canvas id="outCanvas" width="310" height="240"></canvas>
        
        <!-- <img id="outImg"> -->
        <div id="info"></div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            height: 300,
            width: 300,
            // url:"https://zhixueleida-prod.oss-cn-hangzhou.aliyuncs.com/null&988afde8039040069947bc9aad0fd409.png"
            url:"https://media.prod.mdn.mozit.cloud/attachments/2013/06/22/5397/7a3ec0cae64a95ad454ac3bc2c71c004/rhino.jpg"
        }
    },
    mounted() {
        this.init(this.url);
    },
    methods: {
        changeImg() {
            this.init(this.url);
        },

        init(url) {
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');

            // 读取图片
            var img = new Image();
            img.src = url + '?' + new Date().getTime();
            img.setAttribute('crossOrigin', '');
            img.onload = function () {
                ctx.drawImage(img, 0, 0);
                img.style.display = 'none';
            };

            var info = document.getElementById('info');
            var outCanvas = document.getElementById('outCanvas');
            var outCxt = outCanvas.getContext("2d")

            function pick(event) {
                var x = event.offsetX;
                var y = event.offsetY;

                // 获取局部图片
                var pixel = ctx.getImageData(x, y, 200, 200);
                outCanvas.width = 100;
                outCanvas.height = 100

                // 绘制图像
                outCxt.putImageData(pixel, 0, 0, 0, 0, outCanvas.width, outCanvas.height)
                // var img2 = outCanvas.toDataURL("image/png");

                info.textContent = "x:" + x + ",y:" + y;
            }

            canvas.addEventListener('mousemove', pick);
        }
    }
}

</script>

<style>
    #top{
        margin-bottom: 50px;
    }
</style>