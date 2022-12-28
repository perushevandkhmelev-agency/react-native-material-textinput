module.exports = {
  source: 'src',
  output: 'lib',
  targets: [['commonjs', { copyFlow: true }], 'module', 'typescript']
}
