<template>
    <div class="container">
        <div class="row">
            <ArticleList/>
            <MarkDown/>
        </div>
    </div>
</template>

<script>
    import Chapter from '../edit/Chapter.vue'
    import ArticleList from '../edit/ArticleList.vue'
    import MarkDown from '../edit/MarkDown.vue'
    export default {
        components: {
            Chapter,
            MarkDown,
            ArticleList,
        }
    }
</script>
