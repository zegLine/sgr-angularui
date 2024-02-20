import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorenouComponent } from './storenou.component';

describe('StorenouComponent', () => {
  let component: StorenouComponent;
  let fixture: ComponentFixture<StorenouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorenouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StorenouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
