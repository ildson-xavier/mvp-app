import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/model/product/productModel';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Observable<ProductModel[]>;
  
  listData: MatTableDataSource< ProductModel[] >;
  displayedColumns: string[] = ['id', 'description','actions'];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  searchKey: string;

  constructor(
    private service: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    console.log('product list')
    this.getAll();
  }

  getAll() {
    console.log('product list')
    this.service.getAll().subscribe(
      list => {
        console.log(list)
            let array = list.map((i: ProductModel) => {return i})
            this.listData = new MatTableDataSource(array);
            this.listData.sort = this.sort;
            this.listData.paginator = this.paginator;
            /*
            este bloco eh responsavel para filtrar apenas os campos contidos no grid (displayedColumns)
            this.listData.filterPredicate = (data, filter) => {
                  return this.displayedColumns.some(ele => {
                    return ele != 'actions' && data[ele].toLowerCase.indexOf(filter) != -1;
                  });
            };
            */
      }
    );
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  productCreate() {
    this.router.navigate(['/product']);
  };

  productDetails(id: number) {
    this.router.navigate(['/product/detail', id]);
  };

  deleteProduct(id: number){
    
    const toastrConfig: Partial<IndividualConfig> = {
      "positionClass": "toast-bottom-full-width"
    };

    this.dialogService.openConfirmDialog('Deseja realmente excluir o item?')
        .afterClosed().subscribe (
          res => {
            if(res){

              this.service.delete(id).subscribe (
                data => {
                  console.log(data);
                  this.toastr.toastrConfig.positionClass = 'toast-bottom-full-width';
                  this.toastr.success("Produto excluido com sucesso!", "Exclusão");
                  this.getAll();
                },      
                err => {
                  this.toastr.toastrConfig.positionClass = 'toast-bottom-full-width';
                  this.toastr.error("Um erro ocorreu ao efetuar a operação!", "Erro");
                }
              );
            }
          }
        );
  }

  updateProduct(id: number){
    this.router.navigate(['/product/update', id]);    
  }
}
