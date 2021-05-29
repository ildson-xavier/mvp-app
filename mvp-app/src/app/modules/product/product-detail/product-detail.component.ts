import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/model/product/productModel';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  product: ProductModel;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProductService 
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = new ProductModel();

    this.service.getById(this.id)
      .subscribe(
        data => {
          this.product = data;
        },
        error => console.log(error)
      );
  }

  list(){
    this.router.navigate(['products']);
  }
}