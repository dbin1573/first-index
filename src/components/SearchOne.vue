<!-- 搜索框🔍 -->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            🔍嘻嘻🤭
        </p>
        <el-input v-model="formData.url" @keydown.enter.native="handleKeydown()" placeholder=""></el-input>
        <el-image v-if="checkImage(this.formData.url)" style="width: 100%;" :src="formData.url"></el-image>
        <audio :src="formData.url"></audio>
        <!-- muted静音 autoplay才能使用自动播放 -->
        <video v-if="checkVideo(this.formData.url)" :src="formData.url" style="width: 100%;" muted autoplay controls></video>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="60%" append-to-body close-on-click-modal>
            <span>
                <el-image v-if="checkImage(this.formData.url)" style="width: 100%; height: 100%" :src="formData.url"></el-image>
            </span>
            <span slot="footer" class="dialog-footer cursorhand" @click="dialogVisible=false">
                hi dbin
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            formData: {
                url: "https://v.dyjyzyk.dtdjzx.gov.cn/resource-oss/resource/030b9e46-b8ea-47ec-9feb-fb8c3eead801/aa0bb0000215a379846b325e08baaa88-1611646939387-415551998.mp4"
            },
            dialogVisible: false
        };
    },
    methods: {
        handleKeydown() {
            this.dialogVisible = true;
        },
        // 检查图片类型
        checkImage(val) {
            console.log(val)
            if (!val) {
                return false
            }
            val = val.toLowerCase()
            if (val.endsWith(".png") || val.endsWith(".jpg") || val.endsWith(".jpeg")) {
                return true;                
            }
            return false
        },
        checkVideo(val) {
            if (!val) {
                return false
            }
            val = val.toLowerCase()
            if (val.endsWith(".mp4")
            ) {
                return true;                
            }
            return false
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
//小手 cursor
.cursorhand{
	cursor: pointer;
}
</style>
