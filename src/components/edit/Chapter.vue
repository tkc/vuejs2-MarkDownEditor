<template>
    <select v-model="chapterId" class="form-control">
        <option v-for="chapter in chapters" :value="chapter.id">
            {{chapter.title}}
        </option>
    </select>
</template>

<script>
    export default{
        data () {
            return {}
        },
        watch: {
            selected (selected) {
                this.$store.dispatch('updateChapterId', selected);
            }
        },
        computed: {
            chapterId () {
                return this.$store.getters.getChapterSelectedId;
            },
            chapters () {
                return this.$store.getters.getChapters;
            },
        },
    }
</script>
