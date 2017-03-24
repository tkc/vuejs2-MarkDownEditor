<template>
    <section>
        <div id="mark-down">
            <div class="editor">
                <h1>Editor</h1>
                <Editor></Editor>
                <EditorPreView></EditorPreView>
            </div>
        </div>
    </section>
</template>

<script>
    import Editor from './Editor.vue'
    import EditorPreView from './EditorPreView.vue'
    export default{
        components: {
            Editor,
            EditorPreView,
        },
    }
</script>
