'use strict'

const { parseArgs } = require('node:util')
module.exports = function parseArguments () {
  const args = parseArgs({
    args: process.argv.slice(2),
    options: {
      only: { type: 'boolean', short: 'o' },
      watch: { type: 'boolean', short: 'w' },
      pattern: { type: 'string', short: 'p' },
      concurrency: { type: 'string', short: 'c', default: os.availableParallelism() - 1 + '' },
      coverage: { type: 'boolean', short: 'C' },
      timeout: { type: 'string', short: 't', default: '30000' },
      'no-timeout': { type: 'boolean', short: 'N', default: false },
      'coverage-exclude': { type: 'string', short: 'X', multiple: true },
      ignore: { type: 'string', short: 'i', multiple: true },
      'expose-gc': { type: 'boolean' },
      help: { type: 'boolean', short: 'h' },
      'no-typescript': { type: 'boolean', short: 'T' },
      reporter: {
        type: 'string',
        short: 'r',
        default: ['spec'],
        multiple: true
      }
    },
    allowPositionals: true
  })

  if (args.values.concurrency) {
    args.values.concurrency = parseInt(args.values.concurrency)
  }

  if (args.values.timeout) {
    args.values.timeout = parseInt(args.values.timeout)
  }


  if (args.values['no-timeout']) {
    delete args.values.timeout
    delete args.values['no-timeout']
  }

  return args
}