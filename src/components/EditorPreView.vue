<template>
    <div>
        <div class="preview" v-html="compiledMarkdown"></div>
    </div>
</template>

<script>
    import marked from 'marked';
    export default{
        computed: {
            compiledMarkdown() {
                return marked(this.$store.getters.getWritingText, {
                    smartLists: true,
                    breaks: true,
                    sanitize: true
                })
            },
        },
    }
</script>

<style>
    textarea, .editor div {
        display: inline-block;
        width: 49%;
        height: 100%;
        vertical-align: top;
        box-sizing: border-box;
        padding: 0 20px;
    }
    textarea {
        border: none;
        border-right: 1px solid #ccc;
        resize: none;
        outline: none;
        background-color: #f6f6f6;
        font-size: 14px;
        font-family: 'Monaco', courier, monospace;
        padding: 20px;
        height: 700px;
    }
</style>

