import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
  title = "Documents";
  documents: Document[] = [
    {
      title: 'My first document',
      description: 'Here is a great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://source.unsplash.com/random/400x350'
    },
    {
      title: 'My sec0nd document',
      description: 'Here is another great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://source.unsplash.com/random/440x290'
    },
    {
      title: 'My last document',
      description: 'Here is last great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://source.unsplash.com/random/520x320'
    },
    {
      title: 'My first document',
      description: 'Here is a great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://source.unsplash.com/random/400x360'
    },
    {
      title: 'My s3cond document',
      description: 'Here is another great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://source.unsplash.com/random/520x420'
    },
    {
      title: 'My last document',
      description: 'Here is last great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://source.unsplash.com/random/400x300'
    },
  ]
}
