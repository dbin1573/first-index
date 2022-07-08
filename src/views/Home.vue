<template>
  <div class="home headImg">

    <img alt="Vue logo" src="../assets/logo.png" />
    <SearchOne msg="Welcome to Your Vue.js App" />
    <RightMenu/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import SearchOne from "@/components/SearchOne.vue";
import RightMenu from "@/components/RightMenu.vue";

export default {
  name: "Home",
  components: {
    SearchOne,RightMenu
    
  },
    
  created() {
      this.$notify({message: 'Wellcome to dbin'});

  },
  methods: {

  }
};


</script>
<style>
    .headImg {
        padding-top: 22px;
    }


        #rightMenu
        {
            list-style: none;
            background: rgb(255, 255, 255);
            border: solid 1px darkgrey;
            border-radius: 10px;
            margin: 0px;
            padding: 5px;
            position: absolute;
            /*left: 0px;*/
            top: 0px;
            display: none;
        }
        
        #rightMenu li
        {
            cursor: pointer;
            border-bottom: solid 1px rgb(252, 215, 215);
        }
</style>
