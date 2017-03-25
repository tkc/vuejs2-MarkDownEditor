<template>
    <div id="mark-down" class="col-md-9">
            <div class=".col-sm-12 col-md-12">
                <EditTitle></EditTitle>
            </div>

        <Editor></Editor>
        <EditorPreView></EditorPreView>
    </div>
</template>

<script>
    import EditTitle from './EditTitle.vue'
    import Editor from './Editor.vue'
    import EditorPreView from './EditorPreView.vue'
    export default{
        components: {
            EditTitle,
            Editor,
            EditorPreView,
        },
    }
</script>
