<template>
    <div class="form-group">
        <ul class="list-group">
            <li class="list-group-item" v-for="chapter in chapters">
                {{chapter.title}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            chapters() {
                console.log(this.$store.getters.getChapters);
                return this.$store.getters.getChapters;
            },
        },
        components: {}
    }
</script>
