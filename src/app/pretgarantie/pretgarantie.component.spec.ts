import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretgarantieComponent } from './pretgarantie.component';

describe('PretgarantieComponent', () => {
  let component: PretgarantieComponent;
  let fixture: ComponentFixture<PretgarantieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PretgarantieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PretgarantieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
