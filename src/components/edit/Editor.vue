<template>
    <div class=".col-sm-6 col-md-6">
        <div class="row">
            <div class=".col-sm-12 col-md-12">
                <div class="edit-area" :class="{ hide: isActive }">
                    <button type="button" @click="deleteItem()" class="btn btn-default btn-sm">Delete</button>
                    <textarea ref="input"
                              v-model="writingText"
                              @input="update">
                </textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
        components: {},
    }
</script>

