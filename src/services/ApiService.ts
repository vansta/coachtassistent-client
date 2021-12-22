import { IExercise, IOverviewViewModel } from "@/interfaces"
import axios, { AxiosResponse } from "axios"

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7198/api/'
})

export default {
    getAllExercises: function (): Promise<AxiosResponse<IOverviewViewModel<IExercise>>> {
        return axiosInstance.get('Exercise/Overview')
    }
}