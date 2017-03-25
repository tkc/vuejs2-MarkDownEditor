<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <HeaderTitle></HeaderTitle>
            </div>
        </div>
        <div class="row" :class="{ hide: isChapter }">
            <div class="col-md-12">
                <Chapter></Chapter>
            </div>
        </div>
        <div class="row" :class="{ hide: isEditor }">
            <div class="col-md-12">
                <Edit></Edit>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p>footer</p>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTitle from './components/layout/Header.vue'
    import Chapter from './components/layout/Chapter.vue'
    import Edit from './components/layout/Edit.vue'
    export default {
        computed: {
            isChapter() {
                return this.$store.getters.htmlLayoutChapter;
            },
            isEditor() {
                return this.$store.getters.htmlLayoutEditor;
            },
        },
        mounted() {
            this.$store.dispatch('init');
        },
        components: {
            HeaderTitle,
            Chapter,
            Edit
        }
    }
</script>
