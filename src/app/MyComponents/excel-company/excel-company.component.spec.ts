import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelCompanyComponent } from './excel-company.component';

describe('ExcelCompanyComponent', () => {
  let component: ExcelCompanyComponent;
  let fixture: ComponentFixture<ExcelCompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelCompanyComponent]
    });
    fixture = TestBed.createComponent(ExcelCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
