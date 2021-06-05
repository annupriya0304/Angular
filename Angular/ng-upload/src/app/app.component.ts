import { Component } from '@angular/core';
import { AngularFileUploaderConfig } from './angular-file-uploader-module/angular-file-uploader.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  resetUpload1: boolean = false;
  resetUpload2: boolean= false;
  resetUpload3: boolean= false;


  afuConfig1 : AngularFileUploaderConfig= {
    id: 112233,
    multiple: true,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    }
  };

  afuConfig2: AngularFileUploaderConfig = {
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    maxSize: 1,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    },
    formatsAllowed: '.jpg,.png',
    multiple: true,
  };

  afuConfig3: AngularFileUploaderConfig = {
    theme: 'dragNDrop',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    maxSize: 1,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    },
    formatsAllowed: '.jpg,.jpeg,.png',
    multiple: true,
  };

  constructor() {
  }

  docUpload(event: any) {
    console.log('ApiResponse -> docUpload -> Event: ',event);
  }
}
