<template>
    <div>
        <p>chapter</p>
        <select v-model="chapterId" class="form-control">
            <option v-for="chapter in chapters" :value="chapter.id">
                {{chapter.title}}
            </option>
        </select>
    </div>
</template>

<script>
    export default{
        data(){
            return {
            }
        },
        watch: {
            selected (selected) {
                this.$store.dispatch('updateChapterId', selected);
            }
        },
        computed: {
            chapterId() {
                return this.$store.getters.getChapterSelectedId;
            },
            chapters() {
                return this.$store.getters.getChapters;
            },
        },
        mounted() {
            // todo
            this.$store.dispatch('updateChapterId', 1);
        }
    }
</script>
