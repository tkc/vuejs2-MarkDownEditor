<template>
    <div class="col-md-3">
        <div class="row">
            <Chapter></Chapter>
        </div>
        <div class="row">
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
                    AddNew
                </button>
            </div>
            
            <div class="form-group">
                <ul class="list-group">
                    <li class="list-group-item" v-for="article in articles" @click="select(article)" >
                        <p class="title">{{article.title}}</p>
                        <p class="text">{{article.text}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Chapter from './Chapter.vue'
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
            select(article){
                this.$store.dispatch('updateSelectArticle', article);
            }
        },
        computed: {
            hasError(){
                return this.errors.count() > 0 || this.title.length < 1;
            },
            articles(){
                return this.$store.getters.getArticles
            }
        },
        mounted() {
        },
        components: {
            Chapter,
        }
    }
</script>
