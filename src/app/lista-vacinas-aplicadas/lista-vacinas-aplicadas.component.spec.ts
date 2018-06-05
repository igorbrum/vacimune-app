import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVacinasAplicadasComponent } from './lista-vacinas-aplicadas.component';

describe('ListaVacinasAplicadasComponent', () => {
  let component: ListaVacinasAplicadasComponent;
  let fixture: ComponentFixture<ListaVacinasAplicadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaVacinasAplicadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVacinasAplicadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
