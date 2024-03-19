import { test } from 'node:test'

test('no-timeout option should remove timeout option', async (t) => {
  const { strictEqual } = t
  const { parseArguments } = await import('../lib/parseArguments.js')
  const args = ['node', 'borp', '--no-timeout']
  const { options } = parseArguments(args)
  strictEqual(options.timeout, undefined)
})