# n8n-nodes-perfex-api

Este é um nó da comunidade para o n8n que permite integração com o Perfex CRM API.

## Instalação

Para instalar este nó no seu n8n:

```bash
npm install n8n-nodes-perfex-api
```

## Configuração das Credenciais

1. Abra seu n8n
2. Vá para Configurações > Credenciais
3. Clique em "Criar Nova Credencial"
4. Selecione "Perfex API"
5. Preencha os seguintes campos:
   - URL da API (ex: https://seu-perfex.com/api)
   - Chave da API
   - Token da API

## Operações Suportadas

O nó suporta as seguintes operações:

### Clientes
- Listar todos os clientes
- Obter cliente por ID
- Criar novo cliente
- Atualizar cliente existente
- Deletar cliente

### Contatos
- Listar todos os contatos
- Obter contato por ID
- Criar novo contato
- Atualizar contato existente
- Deletar contato

## Exemplos de Uso

### Exemplo 1: Criar um novo cliente

1. Adicione o nó "Perfex"
2. Selecione a operação "Criar Cliente"
3. Configure os campos necessários:
   - company: Nome da empresa
   - vat: Número do VAT
   - phonenumber: Telefone
   - country: País
   - city: Cidade
   - zip: CEP
   - state: Estado
   - address: Endereço

### Exemplo 2: Atualizar um contato

1. Adicione o nó "Perfex"
2. Selecione a operação "Atualizar Contato"
3. Forneça o ID do contato
4. Configure os campos que deseja atualizar

## Pré-requisitos

- n8n versão 1.0.0 ou superior
- Perfex CRM com API habilitada
- Credenciais de API válidas do Perfex CRM

## Suporte

Para relatar problemas ou solicitar novas funcionalidades, por favor abra uma issue no GitHub:
[https://github.com/Matheusbaiense/Node-Community-Perfex/issues](https://github.com/Matheusbaiense/Node-Community-Perfex/issues)

## Licença

[MIT](LICENSE) 