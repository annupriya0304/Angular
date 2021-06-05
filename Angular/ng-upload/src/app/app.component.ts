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


  Config : AngularFileUploaderConfig= {
    id: 112233,
    multiple: true,
    uploadAPI: {
      url: 'https://slack.com/api/files.upload',
    }
  }; 
  constructor() {
  }

  docUpload(event: any) {
    console.log('ApiResponse -> docUpload -> Event: ',event);
  }
}
