import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGrids } from './products-grids';

describe('ProductsGrids', () => {
  let component: ProductsGrids;
  let fixture: ComponentFixture<ProductsGrids>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsGrids],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsGrids);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
