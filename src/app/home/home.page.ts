import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  images: {finalImage: string, placeholderImage: string}[] = [
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7112/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7112/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7107/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7107/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7110/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7110/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7109/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7109/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7108/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7108/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7105/pload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7105/thumb_lg_uplod',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7104/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7104/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7103/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7103/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7102/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7102/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7101/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7101/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7100/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7100/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7099/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7099/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7088/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7088/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7081/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7081/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7086/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7086/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7054/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7054/thumb_lg_upload',
    },
    {
      finalImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7049/upload',
      placeholderImage: 'https://be-api-production.s3.eu-central-1.amazonaws.com/staging/upload/image_upload/7049/thumb_lg_upload',
    },
  ];

}
