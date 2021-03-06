import http from 'http'
// import { execute, subscribe } from 'graphql'
import { createServer } from 'http'

import app from './server'
// import schema from './schema'

// This is specifically in the code for hot module reloading and web sockets to work.
// If not using hot module reloading or web sockets, then you don't need this next line in there.
// you can just do app.listen
const server = http.createServer(app)
let currentApp = app

server.listen(3000, () => {
	console.log('Server listening on port 3000')
})

if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}
