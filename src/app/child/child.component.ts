import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  // ++++++++++++++++++++  component con nhận về các data được truyền từ component cha ++++++++++++++++++++
  // Cách 1 boyData và girlData trong thẻ input là 2 key ta nhận về từ component cha.
  // Còn boyData và girlData nằm ngoài thẻ @Input là ta tự đặt tên biến
  @Input('boyData') boyData: any;
  @Input('girlData') girlData: any;

  // Cách 2 dùng getter setter theo kiểu hướng đối tượng OOP (Khuyến khích dùng cách 1)
  // private _boyData: any;
  // private _girlData: any;

  // @Input()
  // set boyData(boyData: any){
  //   this._boyData = boyData;
  // }

  // get boyData(){
  //   return this._boyData;
  // }

  // @Input()
  // set girlData(girlData: any){
  //   this._girlData = girlData;
  // }

  // get girlData(){
  //   return this._girlData;
  // }

  // ++++++++++++++++++++ component con truyền dữ liệu lên component cha ++++++++++++++++++++
  public txtName: string = '';
  public txtAge: number = 0;
  public txtGender: number = 0;

  // EventEmitter dùng để phát sự kiện thông qua emit
  // txtName, txtAge, txtGender là các biến dùng để lưu trữ và các biến này sẽ được truyền từ component con ra component cha
  @Output('txtName') onHandleName = new EventEmitter<string>();
  @Output('txtAge') onHandleAge = new EventEmitter<number>();
  @Output('txtGender') onHandleGender = new EventEmitter<number>();

  onSubmitForm() {
    this.onHandleName.emit(this.txtName);
    this.onHandleAge.emit(Number(this.txtAge));
    this.onHandleGender.emit(Number(this.txtGender));
  }
}
