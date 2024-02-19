import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretgarantienouComponent } from './pretgarantienou.component';

describe('PretgarantienouComponent', () => {
  let component: PretgarantienouComponent;
  let fixture: ComponentFixture<PretgarantienouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PretgarantienouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PretgarantienouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
