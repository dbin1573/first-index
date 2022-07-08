<template>
  <div id="editor"></div>
</template>

<script>
export default {
    mounted(){
        this.initEditor()
    },
    methods: {
        initEditor(){
            const E = window.wangEditor
            const editor = new E("#editor")
            editor.create()
        },
    }
}
</script>

<style>
    #editor {
        /* width: 1000px; */
    }
</style>