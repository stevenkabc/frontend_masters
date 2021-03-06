# API Design with Node

* Instructor: Scott Moss
* Code (GitHub): <https://github.com/FrontendMasters/api-design-node-v2/tree/lesson-6-solution>
* Slides <https://docs.google.com/presentation/d/1IFirA70uc_GmrOS6WQh2Uy_N09yqpNPTWD-zgxA4MXE/edit>

## What is Node js

* Platform built on Chrome's V8 engine that can be used out of the browser to build tooling and network based applications.
* HTTP in Node
  * Node comes with a built in module for creating network based apps.
  * Just a library, not a framework.
* Node Server Frameworks
  * Connect (baseline framework)
  * Express (based on connect)
  * Koa (from express creators)
  * Hapi
  * Sails (based on express)
  * So many more...
* Express features
  * Declarative routing
  * Exact, pattern, glob, parameter matching
  * Middleware
    * Functions to run serially on your requests
  * Powerful response options
    * From JSON to static files
    * Stream
    * Redirects
    * DB agnostic

## Setup Express

* http GET localhost:3000
* http POST localhost:3000

## Routing with Express

* Flexible pattern matching
* Handles parameters
* Multi router support
* Static & Dynamic configuration
* Support for all HTTP verbs
* Order based

## Controllers and Responding

* Access to incoming Request
* Reuse controllers
* Async or Sync (should be async for prod)
* Composable
* Can respond with anything.
* Using express to send back things.
  * res.send('Hello)
  * res.json({ ok: true })
  * res.status(201).json({})
  * res.sendFile()

## Middleware

* Functions that can be configured to run before the response is sent back.
* Has the same API as controllers
* Use a callback function to pass control to the next function in the middleware stack
* Great for
  * Authenticating
  * Enhancing request
  * Logging
* Can me mounted globally

## MongoDB and data persistence

* A No-SQL document store to store our application's data.
  * Very flexible
  * Easy to store data
  * Easy to query data
  * Schemaless
* Mongoose
  * The go-to ODM for MongoDB
    * Schemas for saving data
    * Validations
    * Querying API
    * Lifecycle hooks
    * Run time join tables (populations)

## CRUD in the Controllers

* Create controllers for each http VERB + route configuration
* Use information from request and middleware to provide details to DB queries and inserts.
  * Query params
  * Route params
  * Tokens
  * Cookies
  * IP's
* Keep it async
* Try to minimize touching the DB

## MongoDB Querying

* Model level

const song = await Song.findById(id).exec()
Song.findOne({name: 'thisname'}).exec()

const song = new Song({})
Song.create({})

Song.findOneAndUpdate({name: 'thisname'}, {name: 'othername'}, {new: true})
Song.findByIdAndUpdate({})

* document level

song.name='jafkdlajkfdl'
const newSong = await song.save()
song.save()
song.remove()
song.populate()

## Dynamic Configuration

* Create configs based on environment
  * Dev
  * Testing
  * Production
  * Staging
* Keep all config in one place
* Use config values in place of hard coded values in your app.
  * DB connection urls
  * Ports
  * Secrets
* Setup config values on different platforms using env variables.

## GraphQL

* What is GraphQL
  * GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

* What is it really?
  * A query language for your API. Clients describe how they want their data and the shape of it using a query language similar to JSON. Those requests are validated against a Schea you create on your server. Your server then satisfied that shape however it wants using resolvers.
  * Can be used in tandem with your current API
  * Only needs one route for all requests.
  * Doesn't care about how you resolve the data, just has to match the shapes.
  * Don't need versions ever again
  * Your best friend

## GraphQL vs REST

* GraphQL
  * One route
  * Not based on HTTP verbs
  * Strict data typing
  * Interactive docs
  * Works well with a component architecture
  * Advanced data resolving
* Rest
  * Many routes
  * Based on HTTP verbs
  * Cacheable on a network level

* GraphQL schemas
  * The schemas solve the same problem our Mongoose Schema did, but on the API level compared to the DB level.
    * Defines Types, Queries, and Mutations
      * Types are similar to the models (song model, playlist model, user model, etc.)
      * Query is similar to a GET request in REST.
      * Mutation is similar to a PUT, DELETE, or POST request in REST.
    * Needed to check client queries against
    * Can be written in a few ways
    * Can be generated dynamically
    * Is very strict
    * Composable
