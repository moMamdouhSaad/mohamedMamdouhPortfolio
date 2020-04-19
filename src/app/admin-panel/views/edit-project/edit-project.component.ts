import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
editFormGroup: FormGroup = new FormGroup({
  title: new FormControl(''),
  main_img:new FormControl(''),
  description: new FormControl(' ')

})
  constructor(public dialogRef: MatDialogRef<EditProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService) { }

  ngOnInit(): void {
    this.editFormGroup.patchValue({
      title: this.data.title,
      description: this.data.description
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  fileChange(element) {
    this.editFormGroup.patchValue({main_img : element.target.files[0]}) 
}
  submitEditForm(){
    let formData = new FormData();
    if(this.editFormGroup.get('main_img').value){
      formData.append("main-img", this.editFormGroup.get('main_img').value, this.editFormGroup.get('main_img').value.name );
    }
    formData.append("title", this.editFormGroup.get('title').value)
    formData.append("description", this.editFormGroup.get('description').value);
    formData.append("_id", this.data._id);
    this.api.updateProject(formData).subscribe(data=>console.log(data))
  }

  

}
