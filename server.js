'use strict'

const express = require('express')
const webpack = require('webpack')
const rewriteJson = require('./mock/routes.json')
const config = require('./webpack.config')

let app = express()

// web
const compiler = webpack(config)

// set static dir
app.use(express.static(path.join(__dirname, '/')))

app.use(require('webpack-dev-middleware')(compiler), {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    color: true
  }
})

app.use(require('webpack-hot-middleware')(compiler))

if (process.argv.join(' ').indexOf(' --mock') > 0) {
  const jsonServer = require('json-server')
  let router = jsonServer.router('./mock/db.json')
  let middlewares = jsonServer.defaults()
  let rewriter = jsonServer.rewriter(rewriteJson)
  app.use(middlewares)
  app.use(rewriter)
  app.use(router)
}

app.listen(config.port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + config.port
  console.log('Listening at ' + uri + '\n')
  open(uri)
})