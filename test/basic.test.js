import { test } from 'node:test'
import { tspl } from '@matteo.collina/tspl'
import runWithTypeScript from '../lib/run.js'
import { join } from 'desm'

test('ts-esm', async (t) => {
  const { strictEqual, completed } = tspl(t, { plan: 2 })
  const config = {
    files: [],
    cwd: join(import.meta.url, '..', 'fixtures', 'ts-esm')
  }

  const stream = await runWithTypeScript(config)

  const names = new Set(['add', 'add2'])

  stream.on('test:pass', (test) => {
    strictEqual(names.has(test.name), true)
    names.delete(test.name)
  })

  await completed
})