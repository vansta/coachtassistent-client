import { IExercise, IOverviewViewModel, ISegment } from "@/interfaces"
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7198/api/'
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

    postSegment (segment: ISegment) : Promise<string> {
        return axiosInstance.post('Segment', segment)
    }
}