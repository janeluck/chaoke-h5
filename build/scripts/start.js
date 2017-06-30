const logger = require('../lib/logger')
const project = require('../../project.config')


logger.info('Starting server...')
require('../../server/main').listen(3000, () => {
  logger.success(`Server is running at ${project.publicPath}`)
})
