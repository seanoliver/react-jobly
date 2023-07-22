<a name="readme-top"></a>
<div align="center">
  <a href="https://github.com/seanoliver/react-jobly">
    <img src="./public/assets/jobly-banner.png" alt="Logo">
  </a>

  <h1 align="center">Jobly</h1>

  <p align="center">
    Because job searching should be more fun than your last job.
    <br />
    <br />
    <a href="https://jobly.seanoliver.dev/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/seanoliver/jobly-backend/" target="_blank">Backend Repo</a>
    ·
    <a href="https://github.com/seanoliver/react-jobly/issues">Report Bug</a>
    ·
    <a href="https://github.com/seanoliver/react-jobly/issues">Request Feature</a>
  </p>
</div>
<div align="center">

![Top Languages](https://img.shields.io/github/languages/top/seanoliver/react-jobly)
![GitHub repo size](https://img.shields.io/github/repo-size/seanoliver/react-jobly)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/seanoliver/react-jobly)
![GitHub contributors](https://img.shields.io/github/contributors/seanoliver/react-jobly)
![GitHub last commit](https://img.shields.io/github/last-commit/seanoliver/react-jobly)
![GitHub issues](https://img.shields.io/github/issues/seanoliver/react-jobly)
![GitHub](https://img.shields.io/github/license/seanoliver/react-jobly)

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
         <!-- <li><a href="#screenshots">Screenshots</a></li> -->
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Jobly is a job search app that allows users to browse companies and jobs. Users can sign up, log in, and apply for jobs. Users can also edit their profile, follow companies, and view their application history. It was originally built in 2023 as a project for the [Rithm School](https://www.rithmschool.com/) curriculum.

This repo contains the front-end code for the app. The back-end code can be found [here](https://github.com/seanoliver/jobly-backend).

The front-end is built in React and uses React Router for routing, React Bootstrap for styling, [Axios](https://axios-http.com/) for making API calls, and is hosted on [Vercel](https://vercel.com/). The back-end is written in Express and uses PostgreSQL for the database. It is hosted on [Render](https://render.com/) and the database is hosted on [ElephantSQL](https://www.elephantsql.com/).

Taking the frontend and backend together, this project is a great way to learn more about:

- Building RESTful APIs and consuming them via Axios
- Separating concerns between frontend and backend
- React components and state management
- React Router
- Database design and modeling
- User authentication and authorization
- User sessions and cookies
- Encryption and password hashing

I'm excited to keep building on this project and add more features. Feel free to contribute!

You can log into the [demo site](https://jobly.seanoliver.dev/) with the following credentials:
- Username: `guest`
- Password: `password`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ### Screenshots

<p>
  <img src="static/images/screenshots/timeline.png" alt="Logged In Timeline">
  <br>
  <em>Logged-In Timeline</em>
</p>

<p>
  <img src="static/images/screenshots/profile.png" alt="User Profile Page">
  <br>
  <em>User Profile Page</em>
</p>

<p>
  <img src="static/images/screenshots/followers.png" alt="Followers Listing Page">
  <br>
  <em>Followers Listing Page</em>
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

### Key Features

<!-- TODO: Add key features section -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This project was built in 2023 using the following technologies.

- ![React][React]
- ![React Router][React Router]
- ![React Bootstrap][React Bootstrap]
- ![Axios][Axios]
- ![Express][Express]
- ![PostgreSQL][PostgreSQL]
- ![ElephantSQL][ElephantSQL]
- ![Node.js][Node.js]
- ![Midjourney][Midjourney]
- ![Vercel][Vercel]
- ![Render][Render]


See [requirements.txt](https://github.com/seanoliver/react-jobly/blob/master/requirements.txt) for a full list of dependencies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

1. Clone the frontend and backend repos

   ```bash
   git clone https://github.com/seanoliver/react-jobly
   git clone https://github.com/seanoliver/jobly-backend
   ```

2. Create and seed the database

   ```bash
   createdb jobly
   cd jobly-backend
   psql jobly.sql
   ```

3. Install dependencies and run the backend server (Defaults to port `3001`)

   ```bash
    cd jobly-backend
    npm install
    npm run start
    ```

4. In a new terminal, install dependencies and run the frontend server (defaults to port `3000`)

   ```bash
    cd react-jobly
    npm install
    npm run start
    ```


7. Go to localhost:5000 to view the app

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Loading spinner for sign-up/sign-in views
- [ ] Guest credentials helper text
- [ ] Add a "forgot password" feature
- [ ] Add a "delete account" feature
- [ ] Bring in shadcn-ui components
- [ ] Standardize layout outs and spacing
- [ ] Reseed DB with more users, companies, jobs

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

This is a great project for learning React Router, React Bootstrap, and consuming RESTful APIs. It's also a great project for learning about database design and modeling, user authentication and authorization, and user sessions and cookies. If you're interested in contributing, please feel free to open a pull request or fork the project and make it your own!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE](https://github.com/seanoliver/react-jobly/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@SeanOliver](https://twitter.com/SeanOliver) - helloseanoliver@gmail.com

Project Link (Frontend): [https://github.com/seanoliver/react-jobly](https://github.com/seanoliver/react-jobly)

Project Link (Backend): [https://github.com/seanoliver/jobly-backend](https://github.com/seanoliver/jobly-backend)

Live Demo: [https://react-jobly.seanoliver.dev/](https://jobly.seanoliver.dev/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

This was a project I completed as part of the [Rithm School](https://www.rithmschool.com/) curriculum. I would like to thank the entire Rithm team for their great curriculum and support.

- [Rithm School](https://www.rithmschool.com/)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- TECHNOLOGY BADGES -->

[React]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white
[React Router]: https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white
[React Bootstrap]: https://img.shields.io/badge/React_Bootstrap-563D7C?logo=bootstrap&logoColor=white
[Axios]: https://img.shields.io/badge/Axios-5A2D81?logo=axios&logoColor=white
[Express]: https://img.shields.io/badge/Express-000000?logo=express&logoColor=white
[Node.js]: https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white
[ElephantSQL]: https://img.shields.io/badge/ElephantSQL-2D9CDB?logo=elephantsql&logoColor=white
[Midjourney]: https://img.shields.io/badge/Midjourney-FF5700?logo=midjourney&logoColor=white
[Vercel]: https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white
[Render]: https://img.shields.io/badge/Render-000000?logo=render&logoColor=white

