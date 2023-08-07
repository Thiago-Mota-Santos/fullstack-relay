import util from 'util'

export const debugConsole = (obj: Record<string, unknown>) => {
  console.log(
    util.inspect(obj, {
      showHidden: false,
      depth: null,
      colors: true,
      showProxy: false,
    }),
  )
}
