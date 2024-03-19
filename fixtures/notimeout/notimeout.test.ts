import { test } from 'node:test'
import { ok } from 'node:assert'

test('should pass after 31 seconds',async (t) => {
  await new Promise((resolve) => setTimeout(resolve, 31000))
  ok(true)
})
