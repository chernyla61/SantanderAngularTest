import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestModule } from '@test';
import { MasterPanelComponent } from './master-panel.component';

describe('MasterPanelComponent', () => {
  let component: MasterPanelComponent;
  let fixture: ComponentFixture<MasterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTestModule],
      declarations: [MasterPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
