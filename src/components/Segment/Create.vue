<template>
    <q-page>
        <q-card>
            <q-card-section>
                <div class="row">
                    <div class="col">
                        <q-input v-model="segment.name" label="Name" outlined dense></q-input>
                    </div>
                    <div class="col-1">
                        <div class="col-1"><q-btn icon="save" color="primary" flat round @click="save"></q-btn></div>
                    </div>
                </div>
                
            </q-card-section>
            <q-separator inset></q-separator>
            <q-card-section>
                <q-editor v-model="segment.description" height="50" />
            </q-card-section>
        </q-card>
        <q-splitter v-model="splitterValue">
            <template v-slot:before>
                <div class="drop-zone" @drop="drop($event)" @dragover.prevent @dragenter.prevent>
                    <exercise-view v-for="exercise in segment.exercises" :key="exercise.id" class="q-ma-xs" :exercise="exercise"  :draggable="true" @dragstart="startToDrag($event, exercise)"></exercise-view>
                </div>
                
            </template>
            <template v-slot:after>
                <div class="drop-zone" @drop="drop($event, true)" @dragover.prevent @dragenter.prevent>
                <q-table
                    grid
                    :rows="availableExercises"
                    :loading="loading"
                >
                    <template v-slot:item="props">
                        
                            <exercise-view v-if="!props.row.edit" class="q-ma-xs" :exercise="props.row" :draggable="true" @dragstart="startToDrag($event, props.row)"></exercise-view>
                        
                    </template>
                </q-table>
                </div>
            </template>
        </q-splitter>
    </q-page>
</template>

<script lang="ts">
import ExerciseView from '@/components/Exercise/View.vue'

import { defineComponent } from 'vue'
import { IExercise, IOverviewViewModel, ISegment } from '@/interfaces'

export default defineComponent({
    components: { ExerciseView },
    setup() {
        return {}
    },
    created () {
        if (this.id) {
            this.$api.getSegment(this.id)
                .then((data: ISegment) => this.segment = data)
        }
        this.getExercises();
    },
    props: {
        id: String
    },
    data () {
        return {
            segment: {
                description: '',
                exercises: [] as Array<IExercise>
            } as ISegment,
            exercises: [] as Array<IExercise>,

            loading: false,
            splitterValue: 50,
        }
    },
    methods: {
        getExercises () {
            this.loading = true;
            this.$api.getAllExercises()
                .then((data: IOverviewViewModel<IExercise>) => this.exercises = data.items)
                .finally(() => this.loading = false)
        },

        save () {
            if (!this.segment.id) {
                this.$api.postSegment(this.segment)
                    .then(resp => this.segment.id = resp);
            }
            else {
                this.$api.putSegment(this.segment);
            }
        },


        startToDrag (evt: DragEvent, item: IExercise) {
            if (evt.dataTransfer !== null) {
                evt.dataTransfer.dropEffect = 'link';
                evt.dataTransfer.effectAllowed = 'link';
                evt.dataTransfer.setData('id', item.id.toString())
            }
            
        },
        async drop (evt: DragEvent, remove: boolean) {
            const exerciseId = evt.dataTransfer?.getData('id') as string;
            if (remove) {
                const index = this.segment.exercises.findIndex(e => e.id === exerciseId);
                this.segment.exercises.splice(index, 1);
            }
            else {
                const exercise = this.exercises.find(e => e.id === exerciseId) as IExercise;
                this.segment.exercises.push(exercise)
            }
            
        }
    },
    computed: {
        availableExercises () {
            return this.exercises.filter(e => this.segment.exercises.findIndex(x => x.id === e.id) < 0);
        }
    }
})
</script>

<style scoped>
  .drop-zone {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 10px;
    padding-bottom: 50px;
  }
  
</style>
