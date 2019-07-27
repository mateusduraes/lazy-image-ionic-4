import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.scss'],
})
export class LazyImageComponent implements OnInit {

  public loadingFinalImage: boolean = true;
  public hasErrorPlaceholder: boolean = false;
  public hasErrorFinalImage: boolean = false;

  @Input() finalImage: string = '';
  @Input() placeholderImage: string = '';

  @Input() showError: boolean = true;
  @Input() showErrorIcon: boolean = true;
  @Input() errorMessage: string = "Sorry, we can't load the image";
  @Input() errorBackgroundColor: string = '#e2e2e2';
  @Input() errorColor: string = '#333';
  @Input() errorIcon: string = 'sad';

  constructor() {}

  didLoadFinalImage() {
    this.loadingFinalImage = false;
    this.hasErrorFinalImage = false;
    this.hasErrorPlaceholder = false;
  }

  errorFinalImage() {
    this.hasErrorFinalImage = true;
  }

  errorPlaceholderImage() {
    this.hasErrorPlaceholder = true;
  }

  ngOnInit() {}

}
