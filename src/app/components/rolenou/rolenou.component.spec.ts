import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolenouComponent } from './rolenou.component';

describe('RolenouComponent', () => {
  let component: RolenouComponent;
  let fixture: ComponentFixture<RolenouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolenouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolenouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
