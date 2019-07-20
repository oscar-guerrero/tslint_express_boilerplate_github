we will follow Project Structure Practices from Node.js Best Practices at https://github.com/i0natan/nodebestpractices?source=post_page---------------------------#1-project-structure-practices

we need the newest express because it supports async/await

We have a services folder which contains independent subparts of the app like users, products, orders and so on. It’s going to have a search subfolder to include all the routes.
The primary purpose of creating routes using configs is to isolate the routing framework (express in our case) as much as possible. And also provide a possibility to use koa or hapi.js without changing the whole structure and models/controllers code.

Our middleware will be under the middleware folder instead of putting all in the main server file.
A common.ts file contains the middleware like cors, compression and, the setup for body parsing. We can add any middleware here
In ./middleware/index.ts we will import all of middleware for providing a single connection point for our server.ts.

We have a utils folder to apply our middleware, we will create a function which grabs this list of middleware and applies it on a router. Same thing for routing
