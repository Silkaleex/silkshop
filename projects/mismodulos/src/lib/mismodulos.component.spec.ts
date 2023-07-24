import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MismodulosComponent } from './mismodulos.component';

describe('MismodulosComponent', () => {
  let component: MismodulosComponent;
  let fixture: ComponentFixture<MismodulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MismodulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MismodulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
