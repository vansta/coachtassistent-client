<template>
    <layout>
        <template #name>
            <div class="text-h6 text-left text-capitalize">{{ exercise.name }}</div>
        </template>
        <template #description>
                <div v-html="exercise.description"></div>
                <!-- <q-img :src="getImgSource(exercise.attachments[0])"/> -->
                <q-carousel v-model="slide" navigation arrows :autoplay="10000" @click.stop>
                    <q-carousel-slide v-for="attachment in exercise.attachments" :key="attachment" :name="attachment" :img-src="getImgSource(attachment)">
                        <!-- <q-img :src="getImgSource(attachment)"/> -->
                    </q-carousel-slide>
                </q-carousel>
        </template>
    </layout>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, reactive, toRef } from 'vue'
import type { PropType } from 'vue'
// import { IExercise } from '@/interfaces'

import Layout from '@/components/Exercise/Layout.vue'
import { IExercise } from '@/interfaces';
export default defineComponent({
    name: 'View',
    props: {
        exercise: {
            required: true,
            type: Object as PropType<IExercise>
        }
    },
    components: {
        Layout
    },
    // setup(props) {
    //     const { exercise } = toRefs(props)
    //     var slide;
    //     if (exercise) {
    //         slide = ref(exercise.attachments[0]);
    //     } 
    //     return {
            
    //         slide
    //     }
    // },
    data () {
        return {
            slide: this.exercise.attachments[0]
        }
    },
    methods: {
        getImgSource(attachment: string) {
            if (attachment) {
                return 'https://localhost:7210/api/' + attachment
            }
        }
    },
    watch: {
        exercise () {
            this.slide = this.exercise.attachments[0];
        }
    }
})
</script>
