import { NgModule } from "@angular/core";
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [NewEmployeeComponent],
    imports: [CommonModule],
    providers: [],
    exports: [NewEmployeeComponent]
})
export class EmployeeModule { }


// ng generate component employee
// ng g c employee
// ng g d my-directive
// ng g p my-pipes
// ng g s my-services