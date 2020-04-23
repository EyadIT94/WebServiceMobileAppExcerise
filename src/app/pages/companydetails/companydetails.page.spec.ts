import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanydetailsPage } from './companydetails.page';

describe('CompanydetailsPage', () => {
  let component: CompanydetailsPage;
  let fixture: ComponentFixture<CompanydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
