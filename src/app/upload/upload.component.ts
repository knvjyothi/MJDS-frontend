import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  weight:string="";
  carats:string="";
  refid:string="";
  cost:string="";
  specialiation:string="";


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("name",this.name);
    uploadImageData.append("weight",this.weight);
    uploadImageData.append("carats",this.carats);
    uploadImageData.append("refId",this.refid);
    uploadImageData.append("cost",this.cost);
    uploadImageData.append("spl",this.specialiation);
    
    

    let res =this.http.post("http://localhost:1234/jwl/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.name="";
        this.weight="";
        this.carats="";
        this.refid="";
        this.cost="";
        this.specialiation="";
        
      }
    );

  }

}
