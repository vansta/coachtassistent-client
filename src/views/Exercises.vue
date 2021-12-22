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

import { IExercise } from '@/interfaces'

import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosAdapter,
  Cancel,
  CancelToken,
  CancelTokenSource,
  Canceler
} from 'axios';

export default defineComponent({
  components: { ExerciseView, ExerciseEdit },
    setup() {
        const exercises: Array<IExercise> = []
      return {
          exercises
      }  
    },
    created () {
        this.getExercises();
    },
    data: () => ({
        readonly: true,
        // exercises: [],

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
                .then((resp: AxiosResponse<Array<IExercise>>) => this.exercises = resp.data)
                // .then((response: AxiosResponse) => { console.log(response); return res.data; })
        },

        editRow (row: IExercise) {
            row.edit = true;
        },
        saveRow (row: IExercise) {
            row.edit = false;
        },
        addRow () {
            this.exercises.push({
                id: 100,
                name: '',
                description: '',
                edit: true
            })
        },
        removeRow(row: IExercise) {
            // this.exercises.
        }
    }
})
</script>
