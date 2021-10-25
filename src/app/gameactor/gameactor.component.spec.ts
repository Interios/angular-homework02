import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameactorComponent } from './gameactor.component';

describe('GameactorComponent', () => {
  let component: GameactorComponent;
  let fixture: ComponentFixture<GameactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
