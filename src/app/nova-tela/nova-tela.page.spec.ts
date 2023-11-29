import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NovaTelaPage } from './nova-tela.page';

describe('NovaTelaPage', () => {
  let component: NovaTelaPage;
  let fixture: ComponentFixture<NovaTelaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NovaTelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
