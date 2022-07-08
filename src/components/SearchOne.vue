<!-- 搜索框🔍 -->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>🔍嘻嘻🤭</p>
        <el-autocomplete style="width:100%" v-model="formData.url" :fetch-suggestions="querySearch" placeholder="请输入内容"
            @select="handleSelect">
            <i class="el-icon-s-promotion el-input__icon cursorhand" slot="prefix" @click="handleSelectItem"></i>
            <template slot-scope="{ item }">
                <span class="name">{{ item.name }}</span> -
                <span class="addr">{{ item.value }}</span>
            </template>
        </el-autocomplete>
        <!-- <el-input v-model="formData.url" @keydown.enter.native="handleKeydown()" placeholder=""></el-input> -->
        <el-image v-if="checkImage(formData.url)" style="width: 100%" :src="formData.url"></el-image>

        <!-- muted静音 autoplay才能使用自动播放 -->
        <video v-if="checkVideo(formData.url)" style="max-width: 100%" autoplay controls>
            <source :src="formData.url" :type="getVideoType(formData.url)" />
        </video>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="60%" append-to-body close-on-click-modal>
            <span>
                <el-image v-if="checkImage(this.formData.url)" style="width: 100%; height: 100%" :src="formData.url">
                </el-image>
            </span>
            <span slot="footer" class="dialog-footer cursorhand" @click="dialogVisible = false">
                hi dbin
            </span>
        </el-dialog>
    </div>
</template>

<script>
const context = require.context("../../static/data", true, /\.json$/);
const moduleData = context.keys().map((obj) => {
    return context(obj);
});

console.log("加载json: \n" + JSON.stringify(moduleData));

export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            formData: {
                // url:""
                // url: "http://iptar-file.oss-cn-hangzhou.aliyuncs.com/3fab0629-c882-489e-a1f2-8da3034f7fb4.mp3",
                url: "https://v.dyjyzyk.dtdjzx.gov.cn/resource-oss/resource/030b9e46-b8ea-47ec-9feb-fb8c3eead801/aa0bb0000215a379846b325e08baaa88-1611646939387-415551998.mp4",
            },
            restaurants: [],
            dialogVisible: false,
        };
    },
    mounted() {
        this.restaurants = this.loadAll();
    },
    methods: {
        handleSelect(item) {
            console.log(item);
            this.formData.url = item.value;
            this.formData.name = item.name;
        },
        handleSelectItem() {
            
            // this.formData.url = item.value;
        },
        querySearch(queryString, callback) {
            var restaurants = this.restaurants;
            var results = queryString
                ? restaurants.filter(this.createFilter(queryString))
                : restaurants;
            // 调用 callback 返回建议列表的数据
            callback(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                let name = restaurant.name.toLowerCase();
                let value = restaurant.value.toLowerCase();
                queryString = queryString.toLowerCase()
                // return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                return queryString.includes(value) || queryString.includes(name);
            };
        },
        loadAll() {
            let restaurants = context.keys().map((obj) => {
                return context(obj);
            });
            let restaurantResults = [];
            for (const items of restaurants) {
                restaurantResults.push(...items);
            }
            return restaurantResults || [];
        },
        handleKeydown() {
            this.dialogVisible = true;
        },
        // 检查图片类型
        checkImage(val) {
            console.log(val);
            if (!val || !val instanceof String) {
                return false;
            }
            val = val.toLowerCase();
            if (
                val.endsWith(".png") ||
                val.endsWith(".jpg") ||
                val.endsWith(".jpeg")
            ) {
                return true;
            }
            return false;
        },
        checkVideo(val) {
            if (!val || !val instanceof String) {
                return false;
            }
            val = val.toLowerCase();
            if (val.endsWith(".mp4") || val.endsWith(".mp3")) {
                return true;
            }
            return false;
        },
        getVideoType(val) {
            if (!val || !val instanceof String) {
                return "";
            }
            if (val.endsWith(".mp4")) {
                return "video/mp4";
            }
            if (val.endsWith(".mp3")) {
                return "audio/mpeg";
            }
        },
    },
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
.cursorhand {
    cursor: pointer;
}
</style>
