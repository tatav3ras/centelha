# Requisitos e Especificacoes - Centelha

Este documento detalha os requisitos funcionais e as interfaces previstas para o sistema de gestao de centros comunitarios.

---

## Requisitos Funcionais (RF)

| ID       | Descricao                                                                                             | Prioridade |
| :------- | :---------------------------------------------------------------------------------------------------- | :--------: |
| **RF01** | **Autenticacao de Usuarios:** O sistema deve autenticar o responsavel familiar e administradores.     |    Alta    |
| **RF02** | **Cadastro de Familias:** Gestao completa (CRUD) de familias e seus respectivos beneficiarios.        |    Alta    |
| **RF03** | **Gestao de Beneficios:** Interface para cadastrar e gerenciar os tipos de beneficios disponiveis.    |    Alta    |
| **RF04** | **Controle de Distribuicao:** Registro e controle de beneficios concedidos por familia.               |    Alta    |
| **RF05** | **Historico de Atendimento:** Consulta detalhada de beneficios entregues por data e grupo familiar.   |   Media    |
| **RF06** | **Dashboard de Vulnerabilidade:** Visualizacao analitica da vulnerabilidade social por regiao/bairro. |    Alta    |
| **RF07** | **Sistema de Alertas:** Notificacoes automaticas para beneficios vencidos ou nao atendidos.           |   Media    |
| **RF08** | **Relatorios Gerenciais:** Geracao de relatorios de beneficios filtrados por regiao e categoria.      |   Media    |
| **RF09** | **Painel Administrativo:** Controle de acessos, logs e configuracoes globais do sistema.              |    Alta    |

---

## Mapa de Telas (UI/UX)

O sistema sera composto pelas seguintes interfaces principais:

### Modulo de Acesso

- **Tela de Login:** Autenticacao segura para diferentes niveis de acesso.

### Modulo de Cadastro e Gestao

- **Tela de Cadastro de Familias:** Formulario estruturado para dados socioeconomicos.
- **Tela de Cadastro de Beneficiarios:** Vinculo de membros as familias.
- **Tela de Controle de Beneficios:** Interface operacional para entrega e baixa de itens.

### Modulo de Analise e Monitoramento

- **Tela de Dashboard:** Graficos e indicadores de vulnerabilidade regional.
- **Tela de Historico:** Lista cronologica de acoes e atendimentos.
- **Tela de Alertas:** Central de notificacoes criticas.
- **Tela de Relatorios:** Gerador de documentos para exportacao (PDF/CSV).

### Modulo Geral

- **Painel Administrativo:** Gestao de usuarios, permissoes e parametros do sistema.
