<template>
    <div class="form-group">
        <ul class="list-group">
            <li class="list-group-item" v-for="chapter in chapters">
                <button type="button" @click="select(chapter)" class="btn btn-default btn-sm">Select</button>
                {{chapter.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            chapters() {
                return this.$store.getters.getChapters;
            },
        },
        components: {}
    }
</script>
