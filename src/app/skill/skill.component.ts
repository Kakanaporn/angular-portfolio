import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: String[];
  

  constructor(private backendService:BackendService) { 
    this.skills = [];
  }

  ngOnInit(): void {
    this.skills = this.backendService.getSkill();
  }

}
