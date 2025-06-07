import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelImagesComponent } from './model-images.component';

describe('ModelImagesComponent', () => {
  let component: ModelImagesComponent;
  let fixture: ComponentFixture<ModelImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
