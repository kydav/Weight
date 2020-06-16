import { Component, OnInit } from '@angular/core';
import { ExercisesService } from './../../services/exercises.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.sass']
})
export class ExercisesComponent implements OnInit {
  exercises;
  constructor(
    private exercisesService: ExercisesService
  ) { }

  ngOnInit() {
    this.exercises = this.exercisesService.getExercises();
  }

}
