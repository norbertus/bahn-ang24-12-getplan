import { Component, OnInit, NgZone } from '@angular/core';
import { DepartureService } from '../../shared/departure.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-testdep',
  templateUrl: './add-testdep.component.html',
  styleUrls: ['./add-testdep.component.scss']
})
export class AddTestdepComponent implements OnInit {
  issueForm: FormGroup;
  IssueArr: any = [];
  ngOnInit() {
    this.addIssue();
  }
  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public departureService: DepartureService
  ) {}
  addIssue() {
    this.issueForm = this.fb.group({
      time: [''],
      delay: [''],
      todirection: [''],
      traintype: [''],
      platform: [''],
      day: [''],
      arppth: [''],     // arrival planed path
      dpppth: [''],     // departure planed path
   });
  }
  submitForm() {
    this.departureService.CreateDeparture(this.issueForm.value).subscribe((res) => {
      console.log('TestDeparture added!');
      this.ngZone.run(() => this.router.navigateByUrl('/testdep-list'));
    });
  }
}
