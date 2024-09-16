import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SitPage } from './sit.page';

describe('SitPage', () => {
  let component: SitPage;
  let fixture: ComponentFixture<SitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
