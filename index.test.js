// eslint-disable-next-line node/no-unpublished-require
const tape = require('tape')
const isInstalled = require('.')

tape.test('is-module-installed', (t) => {
  t.true(isInstalled('eslint'))
  t.false(isInstalled('lkjsfdlkjsdfllkjsldkjljdf'))
  t.end()
})
