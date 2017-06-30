const logger = require('../lib/logger')
const project = require('../../project.config')


logger.info('Starting server...')
require('../../server/main').listen(`900${project.portNumber}`, () => {
  logger.success(`Server is running at ${project.publicPath}`)
})
