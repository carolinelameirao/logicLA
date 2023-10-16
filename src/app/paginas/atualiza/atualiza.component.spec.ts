import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaComponent } from './atualiza.component';

describe('AtualizaComponent', () => {
  let component: AtualizaComponent;
  let fixture: ComponentFixture<AtualizaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizaComponent]
    });
    fixture = TestBed.createComponent(AtualizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
