import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  listData = new Array(3).fill({}).map((_i, index) => {
    
    return {
      href: '/welcome',
      title: `ant design part ${index}`,
      avatar: '../../../assets/avatars/avatar1.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources ' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    };
  });

  constructor() { }

  ngOnInit() {
  }



}
