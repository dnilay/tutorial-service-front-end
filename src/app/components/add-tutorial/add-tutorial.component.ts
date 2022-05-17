import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorials';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    id: undefined,
    title:'',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    console.log(this.submitted)
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data)
      .subscribe(
          (response: any) => {
          console.log(response);
          this.submitted = true;
        },
          (error: any) => {
          console.log(error);
        });
  }

  newTutorial(): void {
    console.log(this.submitted)
    this.submitted = false;
    console.log(this.submitted)
    this.tutorial = {
      id: undefined,
      title: '',
      description: '',
      published: false
    };
  }

}
