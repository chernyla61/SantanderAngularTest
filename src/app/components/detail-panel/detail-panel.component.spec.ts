import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestModule } from '@test';
import { DetailPanelComponent } from './detail-panel.component';

describe('DetailPanelComponent', () => {
  let component: DetailPanelComponent;
  let fixture: ComponentFixture<DetailPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [DetailPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
