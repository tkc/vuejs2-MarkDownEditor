<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <Chapter></Chapter>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                <ArticleList></ArticleList>
            </div>
            <div class="col-md-10">
                <MarkDown></MarkDown>
            </div>
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
