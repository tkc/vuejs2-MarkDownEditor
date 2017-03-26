<template>
    <div>
        <button type="button" @click="editChapter" class="btn btn-default btn-sm">{{ editTitle }}</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                editTitle: "edit",
            }
        },
        methods: {
            editChapter(){
                this.$store.dispatch('layoutChapterSwitch');
            },
        },
        computed: {

        }
    }
</script>
