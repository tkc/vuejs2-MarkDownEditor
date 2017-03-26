<template>
    <div>
        <h2 :class="{ hide: editSwitch[0].flag }">{{getTitle}}</h2>
        <button type="button" @click="editTitle()" class="btn btn-default btn-sm">{{ editSwitch[0].title }}</button>
        <div :class="{ hide:  editSwitch[1].flag }">
            <input type="text"
                   name="title"
                   class="form-control"
                   v-model="title"
                   v-validate="'required|max:20'"
                   placeholder="enter title"/>
            <span v-if="errors.has('title')">{{ errors.first('title') }}</span>
            <button type="button" @click="update()" :disabled="hasError" class="btn btn-default btn-sm">Update</button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                title: "",
                editSwitch: [
                    {title: 'update', flag: false},
                    {title: 'close', flag: true}
                ],
            }
        },
        methods: {
            editTitle(){
                const c = this.$store.getters.getCurrentArticle;
                this.title = c.title;
                this.editSwitch.reverse();
            },
            update(){
                this.editSwitch.reverse();
                this.$store.dispatch('updateTitle', this.title);
            },
        },
        computed: {
            hasError(){
                return this.errors.count() > 0 || this.title.length < 1;
            },
            getTitle() {
                const c = this.$store.getters.getCurrentArticle;
                return c ? c.title : "";
            }
        },
    }
</script>
