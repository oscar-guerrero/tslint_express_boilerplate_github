"use strict";
// To apply our middleware, we will create a function which grabs the list of middleware and applies it on a router.
// The applyMiddleware helper accepts the list of middleware wrappers we define in
// ./middleware/index.ts and express.Router.
Object.defineProperty(exports, "__esModule", { value: true });
// To apply our middleware, we create a function which grabs this list of middleware and applies it on a router
// The applyMiddleware helper accepts the list of middleware wrappers
// we define in ./middleware/index.ts and express.Router.
exports.applyMiddleware = (middlewareWrappers, router) => {
    for (const wrapper of middlewareWrappers) {
        wrapper(router);
    }
};
// applyRoutes function is a place where we’re adding all our route to an express router instance created in server.ts
exports.applyRoutes = (routes, router) => {
    for (const route of routes) {
        const { method, path, handler } = route;
        router[method](path, handler);
    }
};
//# sourceMappingURL=index.js.map