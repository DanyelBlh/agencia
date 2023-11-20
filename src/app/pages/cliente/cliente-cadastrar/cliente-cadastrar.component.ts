import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cliente } from "../../../models/cliente.model";


@Component({
  selector: "app-cliente-cadastrar",
  templateUrl: "./cliente-cadastrar.component.html",
  styleUrl: "./cliente-cadastrar.component.css"
})
export class ClienteCadastrarComponent {

    nomeCliente: string ="";
    email: string = "";
    cpf: string = "";
    telefone: string ="";
    

  constructor(
    private client: HttpClient,
    private router: Router,
   
    ) {}

    
    cadastrar(): void {
      let cliente: Cliente = {
        nomeCliente: this.nomeCliente,
        email: this.email,
        cpf: this.cpf,
        telefone: this.telefone,
       
      };

      
      this.client
        .post<Cliente>(
          "https://localhost:7176/api/cliente/cadastrar",
          cliente
        )
        .subscribe({
          //A requisição funcionou
          next: (cliente) => {
            console.log(
              "Cliente cadastrado com sucesso", cliente);
              this.router.navigate(["pages/cliente/listar"]);
        
          },
          //A requisição falhou
          error: (erro) => {
            console.log(erro);
          },
        });
    }

   
  }
