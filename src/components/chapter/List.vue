<template>
    <div class="form-group">
        <ul class="list-group">
            <ListItem v-for="chapter in chapters" :chapter="chapter"/>
        </ul>

        <div class="form-group">
            <input type="text"
                   name="title"
                   class="form-control"
                   v-model="title"
                   v-validate="'required|max:20'"
                   placeholder="enter title"/>
            <span v-if="errors.has('title')">{{ errors.first('title') }}</span>
        </div>

        <div class="form-group">
            <button type="button" @click="add()" :disabled="hasError" class="btn btn-default btn-sm">
                Add
            </button>
        </div>

    </div>
</template>

<script>
    import ListItem from './ListItem.vue'
    export default {
        data(){
            return {
                title: "",
            }
        },
        methods: {
            add(){
                this.$store.dispatch('addChapter', this.title);
                this.title = "";
            },
        },
        computed: {
            hasError(){
                return this.errors.count() > 0 || this.title.length < 1;
            },
            chapters () {
                return this.$store.getters.getChapters
            },
        },
        components: {
            ListItem
        },
        mounted() {
            this.errors.clear();
        }
    }
</script>
