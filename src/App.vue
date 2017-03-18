<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-md-12">
                <HeaderTitle></HeaderTitle>
            </div>
        </div>
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
    import HeaderTitle from './components/HeaderTitle.vue'
    import Chapter from './components/Chapter.vue'
    import ArticleList from './components/ArticleList.vue'
    import MarkDown from './components/MarkDown.vue'
    export default {
        components: {
            HeaderTitle,
            Chapter,
            MarkDown,
            ArticleList,
        }
    }
</script>
