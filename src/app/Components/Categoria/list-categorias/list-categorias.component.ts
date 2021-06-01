import { Component, OnInit } from '@angular/core';
import {CategoriasService} from '../../../Services/categorias.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-categorias',
  templateUrl: './list-categorias.component.html',
  styleUrls: ['./list-categorias.component.css']
})
export class ListCategoriasComponent implements OnInit {

  categorias = new MatTableDataSource<any>();

  displayedColumns: string[] = [];

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.categoriaService.GetAll().subscribe(result => {
      this.categorias.data = result;
    });

    this.displayedColumns = this.ExibirColunas();
  }
  ExibirColunas(): string[]{
    return ['nome,icone,tipo,acoes']
  }

}
