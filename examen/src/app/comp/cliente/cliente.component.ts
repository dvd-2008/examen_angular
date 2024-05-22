import { Component } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  registeredCustomers: any[] = [];


  registerCustomer(customerForm: any) {
    if (customerForm.valid) {
      const newCustomer = {
        nombre: customerForm.value.nombre,
        apellidoPaterno: customerForm.value.apellidoPaterno,
        apellidoMaterno: customerForm.value.apellidoMaterno,
        dni: customerForm.value.dni
      };
      this.registeredCustomers.push(newCustomer);

      // Limpiar el formulario después de registrar
      customerForm.resetForm();
    }
  }



}
