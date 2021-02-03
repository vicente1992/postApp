import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosDetailComponent } from './pos-detail.component';

describe('PosDetailComponent', () => {
  let component: PosDetailComponent;
  let fixture: ComponentFixture<PosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
