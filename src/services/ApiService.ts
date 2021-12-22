import { IExercise } from "@/interfaces"
import axios, { AxiosResponse } from "axios"

const axiosInstance = axios.create({
    baseURL: ''
})

const exercises: IExercise[] = [
    {
        id: 0,
        name: 'Exercise 1',
        description: 'Everyone do something',
        edit: false
    },
    {
        id: 1,
        name: 'Exercise 2',
        description: 'Everyone do something else',
        edit: false
    },
    {
        id: 2,
        name: 'Exercise 2',
        description: 'Everyone do something else',
        edit: false
    },
    {
        id: 3,
        name: 'Exercise 2',
        description: 'Everyone do something else',
        edit: false
    },
    {
        id: 4,
        name: 'Exercise 2',
        description: 'Everyone do something else',
        edit: false
    }
]

export default {
    getAllExercises: function (): Promise<AxiosResponse<Array<IExercise>>> {
        return axiosInstance.get('Exercise')
    }
}