<template>
    <div>
        <EditTitle></EditTitle>
        <div class="edit-area" :class="{ hide: isActive }">
        <textarea ref="input"
                  v-model="writingText"
                  @input="update">
        </textarea>
            <button type="button" @click="deleteItem()" class="btn btn-default btn-sm">Delete</button>
        </div>
    </div>
</template>

<script>
    import EditTitle from './EditTitle.vue'
    export default{
        data(){
            return {}
        },
        methods: {
            update(e){
                this.$store.dispatch('updateText', e.target.value);
            },
            deleteItem(){
                this.$store.dispatch('deleteArticle');
            },
        },
        computed: {
            writingText() {
                return this.$store.getters.getWritingText;
            },
            getTitle() {
                const c = this.$store.getters.getCurrentArticle;
                return c ? c.title : "";
            },
            isActive() {
                return this.$store.getters.htmlEditorIsActive;
            },
        },
        components: {
            EditTitle,
        },
    }
</script>

<style>
    .edit-area {
        width: 100%;
    }

    .edit-area textarea {
        width: 100%;
    }
</style>
