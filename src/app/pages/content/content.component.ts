import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakeData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  sourceImage:string='';
  title:string='';
  description:string='';
  id:string | null='0';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get('id')
    )
    this.setValuesToComponents(this.id);
  }

  setValuesToComponents(id:string | null){
    const result = fakeData.filter(article => article.id == id)[0];
    this.description = result.description;
    this.title = result.title;
    this.sourceImage = result.image;
    
  }

}
