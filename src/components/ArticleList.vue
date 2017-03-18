<template>
    <div>
        <div class="form-group">
            <p>title</p>
            <input type="text"
                   class="form-control"
                   v-model="title"
                   placeholder="Title"/>
        </div>

        <div class="form-group">
            <button type="button" @click="add()" class="btn btn-default btn-sm">
                AddNew
            </button>
        </div>

        <div class="form-group">
            <ul class="list-group">
                <li class="list-group-item" v-for="article in articles">
                    <button type="button" @click="select(article)" class="btn btn-default btn-sm">Select</button>
                    {{article.id}} / {{article.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ButtonType from '../common/Button.vue'
    export default{
        data() {
            return {
                title: "",
            };
        },
        methods: {
            add(){
                this.$store.dispatch('addArticle', this.title);
                this.title = "";
            },
            select( article ){
                this.$store.dispatch('updateSelectArticle', article);
            }
        },
        computed: {
            articles(){
                return this.$store.getters.getArticles
            }
        },
        components: {
            ButtonType,
        },
        mounted() {
            // todo
            this.$store.dispatch('addArticle', "First");
        }
    }
</script>
