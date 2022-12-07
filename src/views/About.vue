<template>
    <div class="about">
        <!--    <link href="/favicon.ico" rel="icon" type="image/x-icon"/>-->

        <!--    <title>DBin-首页</title>-->
        <div class="content" @click="drawer = !drawer">
            <el-button>我的信息</el-button>

        </div>
        <ImageCut></ImageCut>

        <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
            <div class="side_top">
                <div class="head_top">
                    <img src="https://dbin-blob.github.io/img/avatar.jpg" />
                </div>

                <div class="head_menu">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>卡片-博客</span>
                            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        </div>

                        <div @click="jump('csdn')">去我的csdn</div>
                        <div @click="jump('blob')">去我的blob</div>
                    </el-card>
                </div>
            </div>
        </el-drawer>

    </div>
</template>

<script>
import ImageCut from "@/components/ImageCut.vue";
export default {
    components: {
        ImageCut
    }, 
    data() {
        return {
            drawer: false
        }
    },
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
        &>img {
            height: 100%;
            width: 100%;
        }
    }

    /*侧边栏*/
    & .side_top {

        background-color: #7c8e98;
        height: 100%;
        width: 100%;

        /*头像*/
        & .head_top {
            height: 110px;
            padding-top: 30px;
            padding-bottom: 30px;
            // text-align: center;

            & .head_menu div * {
                text-align: center;
            }

            &>img:hover {
                border: 2px solid white;
                /*圆角*/
                border-radius: 50%;
                width: 120px;
                height: 120px;
            }

            &>img {
                border: 2px solid white;
                /*圆角*/
                border-radius: 50%;
                width: 100px;
                height: 100px;
            }
        }
    }
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 480px;
}
</style>
