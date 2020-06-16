import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exercise } from '../models/exercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(
    private http: HttpClient
  ) { }

  getExercises() {
    return this.http.get('http://localhost:5000/api/exercise');
  }

  getExercise(id: number) {
    return this.http.get(`http://localhost:5000/api/exercise/${id}`);
  }

  deleteExercise(id: number) {
    return this.http.delete(`http://localhost:5000/api/exercise/${id}`);
  }

  createExercise(exercise: Exercise) {
    return this.http.post(`http://localhost:5000/api/exercise`, exercise);
  }

  // updateExercise()

}
