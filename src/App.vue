<template>
    <div class="container">
        <div class="row">
            <div class="col-md-1">
                <Menu></Menu>
            </div>
            <div class="col-md-11" :class="{ hide: isChapter }">
                <Chapter></Chapter>
            </div>
            <div class="col-md-11" :class="{ hide: isEditor }">
                <Edit></Edit>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from './components/layout/Menu.vue'
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
            Menu,
            Chapter,
            Edit
        }
    }
</script>
