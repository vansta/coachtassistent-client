<template>
    <q-page class="q-pa-md">
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab :icon="readonly ? 'edit' : 'edit_off'" color="primary" @click="readonly = !readonly" />
          </q-page-sticky>
        <div class="row justify-between">
            <div class="row items-start text-left">
                <span class="text-h3 text-capitalize">
                    <span v-if="readonly">
                        {{ training.name }}
                    </span>
                    <q-input v-else v-model="training.name" label="Name" outlined dense></q-input>
                    
                </span>
                <span class="q-pl-sm text-subtitle1">
                    <span v-if="readonly">
                        {{ training.date }}
                    </span>
                    <q-input v-else v-model="training.date" outlined dense>
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                                    <q-date v-model="training.date" mask="DD/MM/YYYY">
                                        <div class="row items-center justify-end">
                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                        </div>
                                    </q-date>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </span>
            </div>
            <div>
                <q-btn-dropdown label="Download" color="primary">
                    <q-list>
                        <q-item>
                            <q-item-section>Pdf</q-item-section>
                        </q-item>
                        <q-item>
                            <q-item-section>Word</q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>
            </div>
        </div>
        <segment v-for="(segment, index) in training.segments" :key="index" :index="index" :segment="segment" :readonly="readonly"></segment>
        <q-btn class="full-width" outline>Add segment</q-btn>
    </q-page>
</template>

<script lang="ts">
import Segment from '@/components/Segment.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { Segment },
    setup() {
      return {
          
      }  
    },
    data: () => ({
        readonly: true,
        training: {
              name: 'test',
              date: '24/11/2021',
              segments: [
                { 
                    index: 0,
                    name: 'test',
                    description: 'Lorem ipsum',
                    exercises: [
                        {
                            index: 0,
                            name: 'Exercise 1',
                            description: 'Everyone do something'
                        }
                    ]
                },
                { 
                    index: 1,
                    name: 'test',
                    description: 'Lorem ipsum',
                    exercises: [
                        {
                            index: 0,
                            name: 'Exercise 1',
                            description: 'Everyone do something'
                        },
                        {
                            index: 1,
                            name: 'Exercise 2',
                            description: 'Everyone do something else'
                        }
                    ]
                }
            ]
          }
    })
})
</script>
