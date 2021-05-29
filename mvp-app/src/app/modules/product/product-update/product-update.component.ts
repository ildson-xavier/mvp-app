import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/model/product/productModel';
import { ProductService } from 'src/app/services/product/product.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  formGroup: FormGroup;
  productModel: ProductModel;
  id: number;

  constructor(
    private service: ProductService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.productModel = new ProductModel();

    this.id = this.route.snapshot.params['id'];
    
    this.service.getById(this.id)
      .subscribe(data => {
        this.productModel = data;
      }, error => console.log(error));
    
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      id: new FormControl({value: this.id, disabled: true}, [Validators.required]),
      description: new FormControl(this.productModel.description, [Validators.required]),
      price: new FormControl(this.productModel.price, [Validators.required])
    })
  }
  
  updateProduct(){
    if(this.formGroup.valid){
      this.service.update(this.id, this.formGroup.value).subscribe(
        data => {
          console.log(data);
          this.toastr.toastrConfig.positionClass = 'toast-bottom-full-width';
          this.toastr.success("Produto alterado com sucesso!", "Alteração");
          this.goToProducts();
        },
        err => {
          this.toastr.toastrConfig.positionClass = 'toast-bottom-full-width';
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
