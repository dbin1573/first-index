<template >
    <div>
        <!-- {{ formData }} -->
        <div v-for="(url,index) in formData" :key="index">
            <!-- {{url}} -->
            <el-image v-if="checkImage(url)" style="width: 100%" :src="url"></el-image>
            <!-- muted静音 autoplay才能使用自动播放 -->
            <video v-if="checkVideo(url)" style="max-width: 100%" autoplay controls>
                <source :src="url" :type="getVideoType(url)" />
            </video>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        formData: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            list: [],
            display: true
        }
    },

    mounted() {
    },
    methods: {
        
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
    }
}
</script>

<style>

</style>