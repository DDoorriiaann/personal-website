import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KillTheBacklogComponent } from './kill-the-backlog.component';

describe('KillTheBacklogComponent', () => {
  let component: KillTheBacklogComponent;
  let fixture: ComponentFixture<KillTheBacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KillTheBacklogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KillTheBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
