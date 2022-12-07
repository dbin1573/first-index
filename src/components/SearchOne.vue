<!-- 搜索框🔍 -->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>🔍嘻嘻🤭</p>
        <el-autocomplete style="width:100%" v-model="formData.url" :fetch-suggestions="querySearch" placeholder="请输入内容"
            @select="handleSelect" @change="changeUrl" clearable>
            <i class="el-icon-s-promotion el-input__icon cursorhand" slot="prefix" @click="handleSelectItem"></i>
            <template slot-scope="{ item }">
                <span class="name">{{ item.name }}</span> -
                <span class="addr">{{ item.url }}</span>
            </template>
        </el-autocomplete>

        <ViewContent :formData="list"></ViewContent>

    </div>
</template>

<script>
const context = require.context("../../static/data", true, /\.json$/);
const moduleData = context.keys().map((obj) => {
    return context(obj);
});

console.log("加载json: \n" + JSON.stringify(moduleData));

import ViewContent from "@/components/ViewContent.vue";
export default {
    components: {
        ViewContent
    },
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            list:[],
            formData: {
                // url:""
                // url: "http://iptar-file.oss-cn-hangzhou.aliyuncs.com/3fab0629-c882-489e-a1f2-8da3034f7fb4.mp3",
                // url: "https://v.dyjyzyk.dtdjzx.gov.cn/resource-oss/resource/030b9e46-b8ea-47ec-9feb-fb8c3eead801/aa0bb0000215a379846b325e08baaa88-1611646939387-415551998.mp4",
            },
            restaurants: [],
            dialogVisible: false,
        };
    },
    mounted() {
        this.request()
    },
    methods: {
        /**
         * 输入搜索内容
         */
        changeUrl(val) {
            console.log(val);
            this.formData.url = val;
            this.handleFormData(val)
        },
        /**
         * 处理下拉框选中
         */
        handleSelect(item) {
            console.log("选中："+JSON.stringify(item));
            this.formData.url = item.url;
            this.formData.type = item.type;
            
            this.handleFormData(item.url, item.type)
        },
        /**
         * 点击搜索图标
         */
        handleSelectItem() {
            let data = this.formData
            this.handleFormData(data.url, data.type)
        },
        /**
         * 搜索
         */
        querySearch(queryString, callback) {
            var restaurants = this.restaurants;
            var results = queryString
                ? restaurants.filter(this.createFilter(queryString))
                : restaurants;
            // 调用 callback 返回建议列表的数据
            callback(results);
        },
        /**
         * 过滤
         */
        createFilter(queryString) {
            return (restaurant) => {
                let name = restaurant.name.toLowerCase();
                let url = restaurant.url.toLowerCase();
                queryString = queryString.toLowerCase()
                // return (restaurant.url.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                return queryString.includes(url) || queryString.includes(name);
            };
        },
        // 载入本地数据
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
        /**
         * 请求远程数据
         */
        request(msg="") {
            fetch("https://mock.apifox.cn/m1/978004-0-default/api/resource/movieList.json?page=" + msg)
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    this.restaurants = result.data || []
                    
                })
                .catch(error => {
                    console.log('error', error)
                    // 备用
                    this.restaurants = this.loadAll();
                });
        },
        handleKeydown() {
            this.dialogVisible = true;
        },

        handleFormData(url, type) {

            if (!url) {
                // this.display = false
                this.$set(this, "list", [])
                return false;
            }

            let val = url.replace('\'', '\"') || null;
            let result = ''
            try {
                result = JSON.parse(val)
            } catch (e) {
                if (val.includes(",")) {
                    result = val.split(',')
                } else if (val.includes("，")) {
                    result = val.split('，')
                } else if (val.includes(" ")) {
                    result = val.split(' ')
                } else {
                    result = [val];
                }
            }

            // this.list = result;
            this.$set(this, "list", result)

            return true;
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
