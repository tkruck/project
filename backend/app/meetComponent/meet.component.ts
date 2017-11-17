import { meetsComponent } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})

export class meetsComponent implements OnInit {
	private meeting:meets[]

	constructor(private commonService:CommonService) {

	}

	ngOnInit(){

		this.getAllMeetIn()

		this.commonService.add_subject.subscribe(respone => {

		})

		addMeetIn(){
		this.commonService.getmeetIn().subscribe(res => {
			this.commonService.addMeetIn(this.meetIn).subscribe(res => {
				this.commonService.add_subject.next()
			})
			this.meetIn = ''
		}
	}

	getAllMeetIn(){

		this.commonService.getMeetIn().subscribe(res => {
			this.meeting = []
			res.json().data.map(e =>{
				this.meeting.push(new meetIn(e, item,false));
			})
		})
	}
}

