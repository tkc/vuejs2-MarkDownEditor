<template>
    <div>
        <p>chapter</p>
        <select v-model="selected" class="form-control">
            <option v-for="option in options" :value="option.value">
                {{ option.text }}
            </option>
        </select>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                selected: 1,
                options: [
                    {text: 'Chapter One', value: 1},
                    {text: 'Chapter Two', value: 2},
                    {text: 'Chapter  Three', value: 3}
                ]
            }
        },
        watch: {
            selected (selected) {
                this.$store.dispatch('updateChapterId', selected);
            }
        },
        mounted() {
            // todo
            this.$store.dispatch('updateChapterId', 1);
        }
    }
</script>
