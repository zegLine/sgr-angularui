import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemnouComponent } from './itemnou.component';

describe('ItemnouComponent', () => {
  let component: ItemnouComponent;
  let fixture: ComponentFixture<ItemnouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemnouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemnouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
