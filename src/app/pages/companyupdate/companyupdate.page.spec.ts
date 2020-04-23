import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyupdatePage } from './companyupdate.page';

describe('CompanyupdatePage', () => {
  let component: CompanyupdatePage;
  let fixture: ComponentFixture<CompanyupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyupdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
