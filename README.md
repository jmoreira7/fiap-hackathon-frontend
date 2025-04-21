# Front-end FIAP Hackathon

Este é um projeto desenvolvido para o Hackathon da FIAP, como parte do curso de pós-graduação em desenvolvimento full stack. O objetivo do projeto é criar uma interface front-end em React para uma plataforma que permite que professores criem provas ou questões customizadas para cada estudante, de acordo com seus interesses, idade e série.

Obs.:Como este projeto é uma POC (Prova de Conceito), a funcionalidade de gerar provas através de um prompt com IA ainda não foi implementada.

## 🛠️ Tecnologias utilizadas

- [Typescript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/)
- [Axios](https://axios-http.com/)

## 💻 Pré-requisitos

Antes de iniciar, verifique se seu computador possui instalado:

- [Node.js](https://nodejs.org/pt);

**Nota:** Este projeto depende de um backend para funcionar corretamente. Certifique-se de clonar e rodar o backend disponível no repositório [https://github.com/HeloiseSantos/fiap-hackathon-backend-api](https://github.com/HeloiseSantos/fiap-hackathon-backend-api). Siga as instruções no README do repositório para rodar o backend localmente.

## 🔧 Instalação

Para executar o front-end do projeto em ambiente local, siga estas etapas, utilizando seu terminal preferido:

```bash
# Clonar repositório:
git clone https://github.com/jmoreira7/fiap-hackathon-frontend

# Acessar pasta do projeto
cd fiap-hackathon-frontend

# Abrir projeto no editor de código:
code .

# Instalar dependências
npm install
```

## 🚀 Executar projeto localmente

```bash
# Levantar server local
npm run dev
```

Com o projeto rodando na porta 5173 [http://localhost:5173/], é possível utilizá-lo para criar, listar, editar e excluir estudantes, além de gerenciar informações como interesses, idade e série. Além disso, a ideia da plataforma é permitir que professores criem provas ou questões customizadas utilizando prompts, que podem ser direcionados para todos os estudantes, um estudante específico ou estudantes com interesses específicos. Como este projeto é uma POC (Prova de Conceito), a funcionalidade de gerar provas através de um prompt com IA ainda não foi implementada.

## 🌐 Funcionalidades

- **Listar estudantes**: Visualize todos os estudantes cadastrados.
- **Adicionar estudante**: Cadastre novos estudantes com informações como nome, idade, série e interesses.
- **Editar estudante**: Atualize as informações de um estudante existente.
- **Excluir estudante**: Remova estudantes do sistema.
- **Escrever prompt**: Crie prompts personalizados para gerar questões direcionadas a todos os estudantes, um estudante específico ou estudantes com interesses específicos.  
  **Obs.:** A integração com IA para geração automática de questões ainda não foi implementada, pois este projeto é uma POC (Prova de Conceito).

## 🌐 Publicação (Deploy)

A interface do projeto pode ser publicada em serviços como [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/). No momento, o projeto está configurado para rodar localmente.

## 🧑🏻‍💻👩🏻‍💻 Colaboradores

Grupo composto por:

- Heloíse Silva Santos - https://github.com/HeloiseSantos
- Jonas de Andrade Zuazo Moreira - https://github.com/jmoreira7