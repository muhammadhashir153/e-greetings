import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempelatesComponent } from './tempelates.component';

describe('TempelatesComponent', () => {
  let component: TempelatesComponent;
  let fixture: ComponentFixture<TempelatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempelatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempelatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
