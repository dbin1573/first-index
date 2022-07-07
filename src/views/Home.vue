<template>
  <div class="home headImg">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
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
</style>
