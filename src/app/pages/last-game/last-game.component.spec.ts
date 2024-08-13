import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastGameComponent } from './last-game.component';

describe('LastGameComponent', () => {
  let component: LastGameComponent;
  let fixture: ComponentFixture<LastGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
