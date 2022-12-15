# Reactivities

![Deploy status](https://github.com/ddxkalin/Reactivities/actions/workflows/docker-push.yml/badge.svg)

Reactivities is a real time social network built with React and ASP.NET(C#).

It contains a user authentication system, activity management including real time chat, user profile management including following/followers, photo cropper and upload.

This is the updated repository for the .Net 7.0, React 18 and React Router 6 version.

View a demo of this app [here](https://reactivitiesbg.fly.dev/).   You just need to register a user and sign in to see it in action. 

## Tech-stack
1. React, MobX, Axios, Semantic-UI, TypeScript, Final-Form, Revalidate, React-Toastify.
2. C# (ASP.NET), SignalR, PostgreSQL(Entity Framework), Cloudinary.

## Install Packages

Run the command within the project directory to install packages from the project dependencies

```
$ cd ../Reactivities
$ npm install
```

## Project Setup and Execution

### Start the back-end implementation

```
$ cd ../Reactivities/API
$ dotnet run
```

### Start the front-end implementation

In the 'client-app' project directory, you can run the React app:

```
$ cd Reactivities\client-app
$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

