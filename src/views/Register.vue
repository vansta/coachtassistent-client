<template>
    <q-page>
        <q-card class="q-pa-md q-ma-xl">
            <q-card-section>
                <div>Welcome! Please log in to continue</div>
            </q-card-section>
            <q-card-section>
                <q-form>
                    <div class="row">
                        <div class="col">
                            <q-input v-model="credentials.userName" label="Username" outlined></q-input>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <q-input v-model="credentials.password" label="Password" type="password" outlined></q-input>
                        </div>
                    </div>
                </q-form>
            </q-card-section>
            <q-card-actions>
                <q-btn outline color="primary" @click="login">Log in</q-btn>
                <q-btn outline color="black" :to="{ name: 'Register' }">Register</q-btn>
            </q-card-actions>
        </q-card>
    </q-page>
</template>

<script lang="ts">
import { ICredentials } from '@/interfaces';
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const credentials = ref({})

        return {
            credentials
        }
    },
    methods: {
        login () {
            this.$api.login(this.credentials as ICredentials);
        }
    }
})
</script>
