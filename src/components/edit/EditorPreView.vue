<template>
    <div class=".col-sm-6 col-md-6">
        <button type="button" @click="showEditor()" class="btn btn-default btn-sm">{{isEditorHideTitle}}</button>
        <div class="preview" v-html="compiledMarkdown"></div>
    </div>
</template>
s
<script>
    import marked from 'marked';
    export default{
        data(){
            return {
                isEditorHide: true,
            }
        },
        watch: {},
        methods: {
            showEditor(){
                this.$store.getters.htmlEditorIsActive ? this.$store.dispatch('showEditor') : this.$store.dispatch('hideEditor');
            },
        },
        computed: {
            compiledMarkdown() {
                return marked(this.$store.getters.getWritingText, {
                    smartLists: true,
                    breaks: true,
                    sanitize: true
                })
            },
            isEditorHideTitle() {
                return this.$store.getters.htmlEditorIsActiveTitle;
            },
        },
    }
</script>

