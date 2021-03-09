import { Component, OnInit } from '@angular/core';
import { SymptomsService } from './../shared/symptoms.service';
import { Observable } from 'rxjs';
import { ToastService } from './../../shared/toast.service';
import { AlertService } from 'src/app/shared/alert.service';

@Component({
  selector: 'app-symptoms-list',
  templateUrl: './symptoms-list.page.html',
  styleUrls: ['./symptoms-list.page.scss'],
})
export class SymptomsListPage implements OnInit {
  symptoms: Observable<any[]>;

  constructor(private symptomsService:SymptomsService,
              private toast:ToastService,
              private alert:AlertService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.symptoms = this.symptomsService.getAll();
  }

  // cahama o alert eo remove
  removeSymptom(symptom: any){
    this.alert.showConfirmarExclusão(symptom.name, ()=> this.remove(symptom.id) );
  }
  // remove o sintoma
  remove(id: string){
    this.symptomsService.deleteSymptoms(id);
    try {
      this.toast.showMessageBottom('Sintoma excluído com sucesso!','success');
      this.getAll();
    } catch (error) {
      this.toast.showMessageTop(error,'danger')
    }

  }

}
