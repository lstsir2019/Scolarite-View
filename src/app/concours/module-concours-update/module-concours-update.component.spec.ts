import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleConcoursUpdateComponent } from './module-concours-update.component';

describe('ModuleConcoursUpdateComponent', () => {
  let component: ModuleConcoursUpdateComponent;
  let fixture: ComponentFixture<ModuleConcoursUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleConcoursUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleConcoursUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
