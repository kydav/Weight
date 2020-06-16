import { ExerciseStep } from './exerciseStep';
import { BodyPart } from './enums/BodyPart';
import { WorkoutType } from './enums/WorkoutType';
import { Metric } from './enums/Metric';

export class Exercise {
    id: number;
    name: string;
    description: string;
    exerciseSteps: ExerciseStep[];
    custom: boolean;
    bodyPart: BodyPart;
    workoutType: WorkoutType;
    metric: Metric;
    url: string;
}
