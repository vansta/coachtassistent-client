import { IExercise } from ".";

interface ISegment {
    id: number,
    name: string,
    description: string,
    exercises: Array<IExercise>
}

export default ISegment