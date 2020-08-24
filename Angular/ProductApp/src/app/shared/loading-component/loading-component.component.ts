import { Component, OnInit } from '@angular/core';
import { LoaderServiceService } from '../../service/loader-service.service'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.css']
})
export class LoadingComponentComponent implements OnInit {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderServiceService) { }

  ngOnInit() {
  }

}
