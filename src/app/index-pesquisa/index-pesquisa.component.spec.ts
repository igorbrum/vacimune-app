import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPesquisaComponent } from './index-pesquisa.component';

describe('IndexPesquisaComponent', () => {
  let component: IndexPesquisaComponent;
  let fixture: ComponentFixture<IndexPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
