<template>
    <div>
        <!-- <div id="map-container"></div> -->

        <div class="cssmenu">
            <ul>
                <li><a>首页</a></li>
                <li><a>企业介绍</a></li>
                <li><a>公告</a></li>
                <li><a>新闻</a></li>
                <li><a>产品介绍</a></li>
                <li><a class="last">联系我们</a></li>
            </ul>
        </div>

        <div>小视频:</div>
        <video class="video-js vjs-default-skin video-js" muted controls autoplay preload="none" width="420"
            style="width=100% max-width:280px"
            src="https://v.dyjyzyk.dtdjzx.gov.cn/resource-oss/resource/030b9e46-b8ea-47ec-9feb-fb8c3eead801/aa0bb0000215a379846b325e08baaa88-1611646939387-415551998.mp4"></video>

        <br/>
        <!-- <div contenteditable>192.168.102.135</div> -->
        <!-- <form action="http://localhost:8080/api/partymember/import/030b9e46-b8ea-47ec-9feb-fb8c3eead801" method="POST" enctype="multipart/form-data"> -->
        <!-- <input type="file" name="file" ></input>  -->
        <!-- <input type="submit" value="开始上传"></input> -->
        <!-- </form> -->

        <!-- <input type="text" value="hi" id="my-text"></input> -->



        <textarea id="textarea" v-model="msgText" style="width: 386px; height: 260px">
        </textarea>

        <!-- <input type="button" value="粘贴" @click="insertAtCursor()" /> -->
        <el-button type="primary" @click="insertAtCursor()">粘贴</el-button>
        <hr />
        <WangEditor />
        <hr />
        <AMap />

    </div>
</template>






<script>
import WangEditor from "@/components/WangEditor.vue";
import AMap from "@/components/AMap.vue";
export default {
    components: {
        WangEditor,AMap
    },
    mounted() {
        
    },
    data() {
        return {
            msgText:""
        }
    },
    methods: {
      
        async insertAtCursor() {
            let myField = document.getElementById('textarea')
            let myValue = ""
            await navigator.clipboard.readText()
                .then(txt => {
                    myValue = txt;
                })

            //IE 浏览器 
            if (document.selection) {
                myField.focus();
                sel = document.selection.createRange();
                sel.text = myValue;
                sel.select();
            }

            //FireFox、Chrome等 
            else if (myField.selectionStart || myField.selectionStart == '0') {
                var startPos = myField.selectionStart;
                var endPos = myField.selectionEnd;

                // 保存滚动条 
                var restoreTop = myField.scrollTop;
                myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);

                if (restoreTop > 0) {
                    myField.scrollTop = restoreTop;
                }

                myField.focus();
                myField.selectionStart = startPos + myValue.length;
                myField.selectionEnd = startPos + myValue.length;
            } else {
                myField.value += myValue;
                myField.focus();
            }
        },
    }
}
</script>

<style>

        /*
            通过浮动实现导航条
        */
        .cssmenu > ul{
            /* 重点列表类型 */
            list-style-type:none;
            /* margin: 0; */
            /* padding: 0; */
            float:left;
        }

        .cssmenu {
            overflow: hidden;
            padding-top: 10px;
        }

        /* 实现横排 */
        .cssmenu > ul >li{
            float:left;
            display:block;
            margin:0 20px;
        }

        .cssmenu >ul >li >a{
            font-weight: 800;
            color: #630808;
            /* 文字划线样式 */
            text-decoration:none;
        }

</style>