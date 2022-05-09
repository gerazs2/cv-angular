import { Component, OnInit } from '@angular/core';

import { ProjectsService } from 'src/app/Services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects:any[] = [];
  constructor(private projectService:ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

}
