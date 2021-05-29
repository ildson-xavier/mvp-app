import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/model/product/productModel';
import { ProductService } from 'src/app/services/product/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  formGroup: FormGroup;
  productModel: ProductModel = new ProductModel();
  
  constructor(
    private service: ProductService,
    private toastr: ToastrService,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    })
  }

  addProduct(){
    if(this.formGroup.valid){
      this.service.add(this.formGroup.value).subscribe(
        data => {
          console.log(data);
          this.toastr.toastrConfig.positionClass = 'toast-bottom-full-width';
          this.toastr.success("Produto cadastrado com sucesso!", "Inclusão");
          this.goToProducts();
        },
        err => {
          this.toastr.toastrConfig.positionClass = 'toast-bottom-right';
          this.toastr.error("Um erro ocorreu ao efetuar a operação!", "Erro");
        }
      );
    }
  }

  cancel() {
    this.dialogService.openConfirmDialog('Deseja realmente cancelar a operação?')
      .afterClosed().subscribe (
        res => {
          if(res)
            this.router.navigate(['products']);
        }
    );
  }

  goToProducts(){
    this.router.navigate(['products']);
  }
}
