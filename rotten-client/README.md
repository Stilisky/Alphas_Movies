
# Rating films Readme

Welcome to my_rotten_tomatoes

# Descriptions

In this project, we have to build  a web application who  offer a part for users to see
new films with descriptions, notes and the review of the public. End give the possibility for administrator to manage web site by adding new films and have a visual on the reviews and opinions given to the films.

## Project part

In this web site application we have two main parts:
- Frontoffice: The user-facing part where users when connected can explore the rating films, add favorites movies, write comments under each movie and filter movies.
- Backoffice: The admin panel controle the users account and have all right to administrate the web site and have visual statistics.

### Technologie used

 We use some technology:

**Frontend**: HTML, Flowbite, Next js, Tailwindcss

**Backend**: Express js 

**Database**: MongoDB

## Key feature

To help user to have a better experience we add some functionnality. 

### When connected 
The user can:

- Change his email and password,
- Add movies to a favorite list,
- Grade the movies.
- Write comments under each movie.
- Filter movies by genre / date / director.
### When not connected
The user can just:
- See the Register page to registre and be connected.

### Admin Functionalities

- Create, update, and delete user accounts.
- Create, update, and delete a films
- Promote users to administrator status.
- To be able to see some detailed statistics of film scores.
- Use The Movie Database API to add new films.

# Installation

***
A little intro about the installation.

git@github.com:EpitechCodingAcademyPromo2023/C-COD-280-COT-2-2-dashboard-setonde.hounnouvi.git
 npm run start dev

 ## Run Locally

Clone the project

```bash
  git@github.com:EpitechCodingAcademyPromo2023/C-COD-270-COT-2-2-c2cod270p0-setonde.hounnouvi.git
```

Go to the project directory

```bash
  cd client
  cd sever
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
  nodemon serve
```


 
# Getting Started

To start using the application, follow these steps:

1. Register an account if you're a new user, or log in if you have an account.
2. Add movies in your favorite liste

# Authors

- [Sétondé HOUNNOUVI] (setonde.hounnouvi@epitech.eu)
- [Espérat DIMON] (esperat.dimon@epitech.eu)
- [Fatima YARO] (fatima.yaro@epitech.eu)
- [Lawane DJIBRILA] (lawane.djibrila@epitech.eu)

# Ressources
- https://docs.nesxjs.com/
- https://tailwindcss.com/docs/installation
- https://flowbite.com/docs/getting-started/      quickstart/
- https://www.mongodb.com/docs/
## Run Locally

Clone the project

```bash
  git clone git@github.com:EpitechCodingAcademyPromo2023/C-COD-280-COT-2-2-dashboard-setonde.hounnouvi.git
```

Go to the project directory

```bash
  cd client
  cd sever
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

#### Get all items

```http
  GET /https://developer.themoviedb.org/docs/getting-started
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key 6f1d9c9ae2msh1260823e5d8ea67p109644jsn8968e625a593  |








This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
