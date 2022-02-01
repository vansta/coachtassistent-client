import { IExercise } from ".";

interface ISegment {
    id: string,
    name: string,
    description: string,
    exercises: Array<IExercise>
}

export default ISegment