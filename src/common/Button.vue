<template>
    <div>
        <button v-if="!this.href" :class="['btn', addClass]" @click="click">
            {{ title }}
        </button>

        <a v-else :class="['btn', addClass]" :href="href">{ title }}</a>
        <select class="form-control">
            <option v-for="(v, k) in types" :value="k">{{ v }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        props: ['title', 'addClass', 'href', 'types'],
        methods: {
            click() {
                console.log("click");
            },
            assignValidator(){

            }
        },
        computed: {},
    }
</script>
