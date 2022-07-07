<template>
  <div class="home headImg">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SearchOne msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchOne from "@/components/SearchOne.vue";

export default {
  name: "Home",
  components: {
    SearchOne
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
