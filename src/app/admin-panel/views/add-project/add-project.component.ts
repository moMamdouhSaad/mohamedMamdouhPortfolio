import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  addFormGroup: FormGroup = new FormGroup({
    title: new FormControl(''),
    main_img:new FormControl(''),
    description: new FormControl(' ')
  
  })
  constructor(public dialogRef: MatDialogRef<AddProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  fileChange(element) {
    this.addFormGroup.patchValue({main_img : element.target.files[0]}) 
  }

  submitAddForm(){
    let formData = new FormData();
    formData.append("main-img", this.addFormGroup.get('main_img').value, this.addFormGroup.get('main_img').value.name );
    formData.append("title", this.addFormGroup.get('title').value);
    formData.append("description", this.addFormGroup.get('description').value);
    this.api.newProject(formData).subscribe((data:any)=>{
      if(data.hexCode == "00"){
        this.dialogRef.close();
      }
    }) 
  }

}
