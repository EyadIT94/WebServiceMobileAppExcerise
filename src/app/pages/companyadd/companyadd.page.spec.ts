import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompanyaddPage } from './companyadd.page';

describe('CompanyaddPage', () => {
  let component: CompanyaddPage;
  let fixture: ComponentFixture<CompanyaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
