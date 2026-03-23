# Centelha - Gestao de Centros Comunitarios

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel Badge">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL Badge">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License Badge">
</p>

> **Plataforma digital para a gestao de centros comunitarios, otimizando a administracao e fortalecendo o impacto social atraves da tecnologia.**

---

## Indice

- [Sobre o Projeto](#sobre-o-projeto)
- [Contexto e Relevancia](#contexto-e-relevancia)
- [Objetivos](#objetivos)
- [Funcionalidades e Requisitos](#funcionalidades-e-requisitos)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
- [Fundamentacao Teorica](#fundamentacao-teorica)
- [Referencias](#referencias)

---

## Sobre o Projeto

O **Centelha** propoe-se a ser uma solucao digital robusta para a manutencao e administracao de centros comunitarios. A plataforma busca otimizar a organizacao de informacoes, tornando os processos mais eficientes, acessiveis e transparentes para todos os envolvidos.

O sistema atua na centralizacao de dados criticos, facilitando o acompanhamento de atividades sociais e a gestao de recursos limitados, garantindo que o apoio chegue a quem realmente precisa.

## Contexto e Relevancia

Segundo o **IBGE**, o Brasil possui mais de 10.918 centros comunitarios, dos quais 90% sao sem fins lucrativos. Estes locais sao vitais para o bem-estar social, oferecendo desde distribuicao de alimentos ate espacos de reintegracao.

Dados da **UFMG (2023)** mostram um aumento alarmante de 8,4 vezes na populacao em situacao de rua na ultima decada (de 22 mil em 2013 para mais de 358 mil em 2023). Nesse cenario, o uso de tecnologia torna-se essencial para:

- Melhorar a gestao administrativa.
- Ampliar o alcance das acoes sociais.
- Aumentar a eficiencia na tomada de decisoes.

## Objetivos

- **Comunicacao:** Melhorar o fluxo de informacoes entre voluntarios, gestores e participantes.
- **Planejamento:** Auxiliar no agendamento de acoes sociais e eventos.
- **Transparencia:** Centralizar dados para uma gestao estruturada e auditavel.
- **Acessibilidade:** Oferecer uma interface simples que permita a inclusao digital de diferentes perfis de usuarios.

## Funcionalidades e Requisitos

A documentacao detalhada de requisitos funcionais e o mapa de telas podem ser consultados no link abaixo:

**Acessar Documento de Requisitos (REQ.md):** [docs/REQ.md](docs/REQ.md)

### Resumo das Funcionalidades

- [ ] **Painel Administrativo:** Gestao de usuarios e permissoes.
- [ ] **Cadastro de Familias:** Registro detalhado de beneficiarios.
- [ ] **Controle de Beneficios:** Gestao de itens e historico de entregas.
- [ ] **Dashboard de Vulnerabilidade:** Analise de dados sociais por regiao.
- [ ] **Alertas Inteligentes:** Notificacoes de beneficios pendentes.

## Tecnologias Utilizadas

### Core Stack

- **Backend:** [Laravel (PHP Framework)](https://laravel.com/)
- **Frontend:** [React.js](https://reactjs.org/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/)

### Ferramentas de Desenvolvimento

- **Versionamento:** Git & GitHub
- **Design:** Figma
- **Gestao de Projeto:** ClickUp & GitHub Projects
- **Ambiente:** VS Code & Docker (Sugerido)

## Estrutura do Projeto (Previsao)

```text
centelha/
├── api/              # Backend (Laravel)
│   ├── app/
│   ├── config/
│   └── routes/
├── web/              # Frontend (React)
│   ├── src/
│   └── public/
├── docs/             # Documentacao de Requisitos e Processos
└── database/         # Migrations e Seeders
```

## Como Executar o Projeto

### Pre-requisitos

- PHP 8.2 ou superior
- Composer
- Node.js & NPM
- PostgreSQL

### Passo a Passo

1. **Clone o repositorio:**

   ```bash
   git clone https://github.com/tatav3ras/centelha.git
   cd centelha
   ```

2. **Configuracao do Backend (Laravel):**
   - Acesse a pasta: `cd api`
   - Instale as dependencias: `composer install`
   - Rode as migracoes: `php artisan migrate`
   - Inicie o servidor: `php artisan serve`

3. **Configuracao do Frontend (React):**
   - Acesse a pasta (em um novo terminal): `cd web`
   - Instale as dependencias: `npm install`
   - Inicie o projeto: `npm start`

## Fundamentacao Teorica

A adocao de sistemas de gestao integrados e determinante para o aumento da eficiencia em instituicoes com recursos limitados. Segundo **Laudon e Laudon (2016)**, os sistemas de informacao gerencial apoiam o planejamento e a tomada de decisoes estrategicas.

## Referencias

- **IBGE:** _As fundacoes privadas e associacoes sem fins lucrativos no Brasil._ (2016).
- **UFMG:** _Observatorio Brasileiro de Politicas Publicas com a Populacao em Situacao de Rua._ (2023).
- **LAUDON, K. C.; LAUDON, J. P.:** _Sistemas de informacao gerenciais._ 14. ed. (2016).
