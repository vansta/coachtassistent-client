<template>
    <q-page class="q-pa-md">
        <q-table
            grid
            :rows="exercises"
            :columns="columns"
        >
            <template v-slot:top-right>
                <q-btn label="Create exercise" color="primary" @click="addRow"></q-btn>
            </template>
            <template v-slot:item="props">
                <exercise-view v-if="!props.row.edit" class="q-ma-xs" :exercise="props.row" @click="editRow(props.row)"></exercise-view>
                <exercise-edit v-else class="q-ma-xs" :exercise="props.row" @save="saveRow(props.row)" @remove="removeRow(props.row)"></exercise-edit>
            </template>
        </q-table>
    </q-page>
</template>

<script lang="ts">
import ExerciseView from '@/components/Exercise/View.vue'
import ExerciseEdit from '@/components/Exercise/Edit.vue'
import { defineComponent } from 'vue'

import { IExercise, IOverviewViewModel } from '@/interfaces'

export default defineComponent({
  components: { ExerciseView, ExerciseEdit },
    setup() {
        // const exercises: Array<IExercise> = ref([]);
      return {
        //   exercises
      }  
    },
    created () {
        this.getExercises();
    },
    data: () => ({
        readonly: true,
        exercises: [] as Array<IExercise>,

        columns: [
            {
                name: 'name',
                label: 'Name',
                field: 'name'
            }
        ]
    }),
    methods: {
        getExercises () {
            this.$api.getAllExercises()
                .then((data: IOverviewViewModel<IExercise>) => this.exercises = data.items)
        },

        editRow (row: IExercise) {
            row.edit = true;
        },
        saveRow (row: IExercise) {
            row.edit = false;
            this.getExercises();
        },
        addRow () {
            this.exercises.push({
                id: '',
                name: '',
                description: '',
                edit: true,
                attachments: []
            })
        },
        removeRow() {
            this.getExercises();
        }
    }
})
</script>
