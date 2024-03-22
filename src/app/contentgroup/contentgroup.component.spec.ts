import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentgroupComponent } from './contentgroup.component';

describe('ContentgroupComponent', () => {
  let component: ContentgroupComponent;
  let fixture: ComponentFixture<ContentgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentgroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
