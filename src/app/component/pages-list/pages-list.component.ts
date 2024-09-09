import { Component, OnInit } from '@angular/core';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css']
})
export class PagesListComponent implements OnInit {

  items$?: any[];

  constructor(private firebaseDataService: ComponentService) { }

  ngOnInit() {
    this.firebaseDataService.getList().subscribe({
      next: (tarefaRecebido: any[]) => {
        this.items$ = tarefaRecebido;
        console.log("Aqui: ", this.items$);
      },
      error: (error: any) => {

      },
      complete: () => {

      }
    });
  }

}
