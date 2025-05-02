# n8n Community Node for Perfex CRM (`n8n-nodes-perfex-api`)

Este é um nó community para o n8n que permite interagir com a API do Perfex CRM. Ele fornece operações para gerenciar Leads, Clientes (Customers) e Contatos.

## Recursos Suportados

*   **Leads:** Listar, Obter, Criar, Atualizar, Deletar
*   **Clientes (Customers):** Listar, Obter, Criar, Deletar
*   **Contatos (Contacts):** Listar (por Cliente), Obter, Criar, Atualizar, Deletar

## Instalação

Existem algumas maneiras de instalar este nó:

1.  **Instalação Local (Desenvolvimento/Teste):**
    *   Clone ou copie este repositório para um local acessível pela sua instância n8n.
    *   Navegue até o diretório raiz do n8n (geralmente `~/.n8n` ou onde você o instalou).
    *   Execute o comando `npm install /caminho/completo/para/n8n-nodes-perfex`.
    *   Reinicie sua instância n8n.

2.  **Instalação via npm (se publicado):**
    *   Se este pacote for publicado no npm, você poderá instalá-lo via interface do n8n (Settings > Community Nodes > Install) procurando por `n8n-nodes-perfex-api` ou via linha de comando:
      ```bash
      npm install n8n-nodes-perfex-api
      ```
    *   Reinicie sua instância n8n.

## Configuração (Credenciais)

Antes de usar o nó, você precisa configurar as credenciais da API do Perfex:

1.  No n8n, vá para "Credentials".
2.  Clique em "Add credential".
3.  Procure por "Perfex API" na lista de tipos de credenciais.
4.  Preencha os seguintes campos:
    *   **Perfex Base URL:** A URL base da sua instalação do Perfex CRM (ex: `https://seu-dominio.com`, **sem** `/api` no final).
    *   **API Token:** Seu token de API gerado no Perfex (Setup > Settings > API).
5.  Salve as credenciais.

## Uso

1.  Adicione o nó "Perfex CRM" ao seu workflow.
2.  Selecione as credenciais que você configurou.
3.  Escolha o **Resource** (Lead, Customer ou Contact) com o qual deseja interagir.
4.  Escolha a **Operation** (List, Get, Create, Update, Delete) que deseja realizar.
5.  Preencha os campos obrigatórios e opcionais que aparecem com base na operação selecionada.
    *   **Listar Leads:** Permite filtros por Status ID e Source ID.
    *   **Obter/Atualizar/Deletar Lead:** Requer Lead ID.
    *   **Criar Lead:** Requer Nome, Source ID, Status ID. Campos adicionais disponíveis.
    *   **Listar Clientes:** Sem filtros específicos na versão atual.
    *   **Obter/Deletar Cliente:** Requer Customer ID.
    *   **Criar Cliente:** Requer Nome da Empresa. Campos adicionais disponíveis.
    *   **Listar/Criar Contato:** Requer Customer ID.
    *   **Obter/Atualizar/Deletar Contato:** Requer Contact ID.
    *   **Criar Contato:** Requer Customer ID, Primeiro Nome, Último Nome, Email, Senha. Campos adicionais disponíveis.
    *   **Atualizar Contato:** Requer Contact ID. Campos adicionais disponíveis (senha é opcional).

## Desenvolvimento

Este nó foi criado usando o template `n8n-nodes-starter` e TypeScript.

*   Para instalar dependências: `pnpm install`
*   Para compilar: `pnpm build`
*   Para desenvolvimento contínuo: `pnpm dev`

## Disclaimer

Este nó foi desenvolvido e compilado com sucesso. No entanto, testes extensivos em uma instância n8n real não foram realizados devido a limitações do ambiente de desenvolvimento. Use por sua conta e risco e teste completamente antes de usar em produção.

