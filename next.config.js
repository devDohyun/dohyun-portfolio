module.exports = {
  sassOptions: {
    includePaths: ['./components'],
    prependData: `@use "~@/styles/variables.scss" as *;`,
  },
}
