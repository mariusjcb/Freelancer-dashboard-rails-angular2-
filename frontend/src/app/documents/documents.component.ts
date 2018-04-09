import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  title = "Documents";
  documents: Document[] = [
    {
      title: 'My first document',
      description: 'Here is a great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://picsum.photos/480/280/?random'
    },
    {
      title: 'My second document',
      description: 'Here is another great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://picsum.photos/430/280/?random'
    },
    {
      title: 'My last document',
      description: 'Here is last great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://picsum.photos/420/220/?random'
    },
    {
      title: 'My first document',
      description: 'Here is a great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://picsum.photos/480/280/?random'
    },
    {
      title: 'My second document',
      description: 'Here is another great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://picsum.photos/430/280/?random'
    },
    {
      title: 'My last document',
      description: 'Here is last great document for testing',
      file_url: 'http://google.com/',
      updated_at: '08/04/18',
      image_url: 'https://picsum.photos/420/220/?random'
    },
  ]
}
