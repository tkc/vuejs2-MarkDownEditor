<template>
    <li class="list-group-item">
        <p :class="{ hide:  editSwitch[0].flag }">{{ chapter.title }}</p>

        <input type="text"
               name="title"
               class="form-control"
               v-model="titleBuffer"
               v-validate="'required|max:20'"
               placeholder="enter title"
               :class="{ hide:  editSwitch[1].flag }"/>

        <span v-if="errors.has('title')">{{ errors.first('title') }}</span>

        <button type="button" :class="{ hide:  editSwitch[1].flag }" @click="update()" :disabled="hasError"
                class="btn btn-default btn-sm">Update
        </button>

        <button type="button" :class="{ hide:  editSwitch[1].flag }" @click="deleteChapter()"
                class="btn btn-default btn-sm">Delete
        </button>

        <span @click="edit()">{{ editSwitch[0].title }}</span>

        <span :class="{ hide: isTopOrder }" @click="upOrder(true)">up</span>
        <span :class="{ hide: isBottomOrder }" @click="upOrder(false)">down</span>

    </li>
</template>

<script>
    import ListItem from './ListItem.vue'
    export default {
        props: ['chapter'],
        data(){
            return {
                title: "",
                titleBuffer: "",
                editSwitch: [
                    {title: 'edit', flag: false},
                    {title: 'close', flag: true}
                ],
            }
        },
        methods: {
            upOrder(isUp){
                const param = {
                    id: this.chapter.id,
                    isUp: isUp
                };
                this.$store.dispatch('updateOrderChapter', param);
            },
            edit(){
                this.title = this.chapter.title;
                this.titleBuffer = this.title;
                this.editSwitch.reverse();
            },
            update(){
                const param = {
                    id: this.chapter.id,
                    title: this.titleBuffer
                };
                this.$store.dispatch('updateChapterTitle', param);
                this.title = this.titleBuffer;
                this.editSwitch.reverse();
            },
            deleteChapter(){
                this.editSwitch.reverse();
                this.$store.dispatch('deleteChapter', this.chapter.id);
            },
        },
        computed: {
            hasError(){
                return this.errors.count() > 0 || this.title.length < 1;
            },
            isTopOrder(){
                const chapters = this.$store.getters.getChapters;
                return this.chapter.orderNum == chapters[0].orderNum
            },
            isBottomOrder(){
                const chapters = this.$store.getters.getChapters;
                return this.chapter.orderNum == chapters[chapters.length - 1].orderNum
            },
        },
        components: {
            ListItem
        },
        mounted() {
        }
    }
</script>
