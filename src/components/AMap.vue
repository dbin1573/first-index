<template>
    <div id="map-container" style="height:500px"></div>
</template>

<script>
export default {
    props: {
        // 未使用
        height: {
            type: String,
            default: "500px"
        }
    },
    mounted(){
        this.initMap()
    },
    methods: {

        initMap() {
            dbinUtil.notify("init map")

            var map = new AMap.Map('map-container',{
                zoom:12,
                resizeEnable: true
                // center:[117.000923,36.675807],
            });
            AMap.plugin(['AMap.ToolBar','AMap.PlaceSearch'],function(){//异步加载插件
                var toolbar = new AMap.ToolBar();
                map.addControl(toolbar);
                var PlaceSearch = new AMap.PlaceSearch();
                map.addControl(PlaceSearch);
                var driving = new AMap.Driving();
                map.plugin(driving);
            });

            var marker = new AMap.Marker({
                content: "hi",  // 自定义点标记覆盖物内容
                position:  [36.675807, 117.000923], // 基点位置
                offset: new AMap.Pixel(-17, -42) // 相对于基点的偏移位置
            });

            map.add(marker);
        }
    }
}
</script>

<style>
    #map-container{
        overflow: hidden;
        padding-top: 10px;
        /* height: 500px; */
    }
</style>