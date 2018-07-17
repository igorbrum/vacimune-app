import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EapvComponent } from './eapv.component';

describe('EapvComponent', () => {
  let component: EapvComponent;
  let fixture: ComponentFixture<EapvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EapvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EapvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
