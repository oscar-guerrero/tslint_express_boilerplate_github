## For this branch we will create a dummy request service to get some data

## Description

we will follow Project Structure Practices from Node.js Best Practices at https://github.com/i0natan/nodebestpractices?source=post_page---------------------------#1-project-structure-practices

we need the newest express because it supports async/await

## Services folder:

We have a services folder which contains independent subparts of the app like users, products, orders and so on. It’s going to have a search subfolder to include all the routes.
The primary purpose of creating routes using configs is to isolate the routing framework (express in our case) as much as possible. And also provide a possibility to use koa or hapi.js without changing the whole structure and models/controllers code.

## Middleware folder:

Our middleware will be under the middleware folder instead of putting all in the main server file.
A common.ts file contains the middleware like cors, compression and, the setup for body parsing. We can add any middleware here
In ./middleware/index.ts we will import all of middleware for providing a single connection point for our server.ts.

## Utils folder:

We have a utils folder to apply our middleware, we will create a function which grabs this list of middleware and applies it on a router. Same thing for routing

## Error handling:

https://github.com/i0natan/nodebestpractices?source=post_page---------------------------#2-error-handling-practices

<<<<<<< HEAD
<<<<<<< HEAD
What we have to think about:
1 Catch uncaughtException and unhandledRejection.
2 Distinguish client errors vs server errors.
3 Catch both sync and async errors, and we don’t wanna to litter our controllers’ code with error handling. We want to throw an exception and make sure our dedicated middleware will handle it for us.
4 Create a dedicated ErrorHandler class available for unit-testing.

## Security

# To be implemented

=======

> > > > > > > with_error_handling

### What we have to think about:

Catch uncaughtException and unhandledRejection.Intended to be used only as a last resort

https://nodejs.org/api/process.html?source=post_page---------------------------#process_warning_using_uncaughtexception_correctly

Unhandled exceptions inherently mean that an application is in an undefined state. Attempting to resume application code without properly recovering from the exception can cause additional unforeseen and unpredictable issues.
The correct use of 'uncaughtException' is to perform synchronous cleanup of allocated resources (e.g. file descriptors, handles, etc) before shutting down the process. It is not safe to resume normal operation after 'uncaughtException'.

The 'unhandledRejection' event is emitted whenever a Promise is rejected and no error handler is attached to the promise within a turn of the event loop. When programming with Promises, exceptions are encapsulated as "rejected promises". Rejections can be caught and handled using promise.catch() and are propagated through a Promise chain. The 'unhandledRejection' event is useful for detecting and keeping track of promises that were rejected whose rejections have not yet been handled.

Distinguish client errors vs server errors.
Catch both sync and async errors, as we don’t wanna to litter our controllers’ code with error handling. We want to throw an exception and make sure our dedicated middleware will handle it for us.
Create a dedicated ErrorHandler class available for unit-testing.
<<<<<<< HEAD

> > > > > > > # with_error_handling
> > > > > > >
> > > > > > > with_error_handling

## Installation

```bash
$ npm install
```
