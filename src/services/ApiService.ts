import { IExercise, IOverviewViewModel, ISegment } from "@/interfaces"
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7210/api/'
})

export default {
    getAllExercises: function (): Promise<IOverviewViewModel<IExercise>> {
        return axiosInstance.get('Exercise/Overview')
            .then(resp => resp.data)
    },

    getExercise: function (id: string): Promise<IExercise> {
        return axiosInstance.get('Exercise', {
            params: { id }
        })
        .then(resp => resp.data)
    },

    getAllSegments () : Promise<IOverviewViewModel<ISegment>> {
        return axiosInstance.get('Segment/Overview')
        .then(resp => resp.data)
    },

    getSegment (id: string) : Promise<ISegment> {
        return axiosInstance.get('Segment', {
            params: { id }
        })
            .then(resp => resp.data)
    },

    //POST
    async postExercise (exercise: IExercise) : Promise<string> {
        const formData = new FormData();
        formData.append('name', exercise.name);
        formData.append('description', exercise.description);
        exercise.attachments.forEach(a => {
            formData.append('attachments', a);
        })

        const resp = await axiosInstance.post('Exercise', formData)
        return resp.data
    },

    postSegment (segment: ISegment) : Promise<string> {
        return axiosInstance.post('Segment', segment);
    },

    //PUT
    async putExercise (exercise: IExercise) : Promise<string> {
        const formData = new FormData();
        formData.append('id', exercise.id);
        formData.append('name', exercise.name);
        formData.append('description', exercise.description);
        exercise.attachments.forEach(a => {
            formData.append('attachments', a);
        })

        const resp = await axiosInstance.put('Exercise', formData)
        return resp.data
    },
    putSegment (segment: ISegment) : Promise<string> {
        return axiosInstance.put('Segment', segment);
    },

    //DELETE
    deleteExercise (id: string) : Promise<string> {
        return axiosInstance.delete('Exercise', {
            params: { id }
        })
    },
    deleteSegment (id: string) : Promise<string> {
        return axiosInstance.delete('Segment', {
            params: { id }
        })
    }
}