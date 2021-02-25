import { SymptomsService } from './../shared/symptoms.service';
import { Component, OnInit } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-symptoms-list',
  templateUrl: './symptoms-list.page.html',
  styleUrls: ['./symptoms-list.page.scss'],
})
export class SymptomsListPage implements OnInit {
  // symptoms: Observable<any>[]>;

  constructor(private symptomsService:SymptomsService) { }

  ngOnInit() {
  }

}

