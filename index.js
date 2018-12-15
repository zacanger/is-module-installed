module.exports = (pkgName) => {
  try {
    require.resolve(pkgName)
    return true
  } catch (_) {
    return false
  }
}
