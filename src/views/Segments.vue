<template>
    <q-page class="q-pa-md">
        <q-table
            grid
            :rows="segments"
        >
            <template v-slot:top-right>
                <q-btn label="Create segment" color="primary" :to="{ name: 'EditSegment' }"></q-btn>
            </template>
            <template v-slot:item="props">
                <overview-item :segment="props.row" @remove="remove"></overview-item>
            </template>
        </q-table>
    </q-page>
</template>

<script lang="ts">
import OverviewItem from '@/components/Segment/OverviewItem.vue'
import { defineComponent } from 'vue'

import { IOverviewViewModel, ISegment } from '@/interfaces'

export default defineComponent({
  components: { OverviewItem },
    setup() {
        // const exercises: Array<IExercise> = ref([]);
      return {
        //   exercises
      }  
    },
    created () {
        this.getSegments();
    },
    data: () => ({
        readonly: true,
        segments: [] as Array<ISegment>
    }),
    methods: {
        getSegments () {
            this.$api.getAllSegments()
                .then((data: IOverviewViewModel<ISegment>) => this.segments = data.items)
        },

        remove () {
            this.getSegments();
        }
    }
})
</script>
