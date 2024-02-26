import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernouComponent } from './usernou.component';

describe('UsernouComponent', () => {
  let component: UsernouComponent;
  let fixture: ComponentFixture<UsernouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsernouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
