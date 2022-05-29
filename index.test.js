const tape = require('tape')
const isInstalled = require('.')

tape.test('is-module-installed', (t) => {
  t.true(isInstalled('standard'))
  t.false(isInstalled('lkjsfdlkjsdfllkjsldkjljdf'))
  t.end()
})
