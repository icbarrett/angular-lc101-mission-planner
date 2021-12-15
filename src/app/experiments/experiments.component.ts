import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {


  experimentAdded: boolean = false;
  experimentHold: string[] = []
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

  constructor() { }

  ngOnInit() { }

  addExperiment(experiment) {

    if (this.experimentHold.includes(experiment)) {
      this.experimentAdded = true;
    } else {
      this.experimentAdded = false;
    }
    
    if(this.experimentHold.includes(experiment)) {
      return
    } else {
    this.experimentHold.push(experiment);
    return
    } 
  }

}
