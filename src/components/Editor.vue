<template>
    <div class="edit-area">
        <h2>{{getTitle}}</h2>
        <textarea
                ref="input"
                v-model="writingText"
                @input="update">
        </textarea>
        <button type="button" @click="deleteItem()" class="btn btn-default btn-sm">Delete</button>
    </div>
</template>

<script>
    export default{
        methods: {
            update(e){
                this.$store.dispatch('updateText', e.target.value);
            },
            deleteItem(){
                this.$store.dispatch('deleteArticle');
            }
        },
        computed: {
            writingText() {
                return this.$store.getters.getWritingText;
            },
            getTitle() {
                const c = this.$store.getters.getCurrentArticle;
                return c.title;
            }
        }
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
