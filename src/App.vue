<template>
    <div class="container">
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
            <div class="col-md-12">
                <Edit></Edit>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTitle from './components/edit/HeaderTitle.vue'
    import Edit from './components/layout/Edit.vue'
    import Chapter from './components/layout/Chapter.vue'
    export default {
        components: {
            HeaderTitle,
            Edit,
            Chapter
        }
    }
</script>
