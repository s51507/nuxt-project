const __parseString = (root: string, value: string) => {
  return `--${root}:${value};`
}

const __parseObject = (root: string, value: { [key: string]: string }) => {
  return Array.from(Object.entries(value), ([name, colorCode]) => {
    return `--${root}-${name}:${colorCode};`
  })
}

const __genCssString = (theme: { [key: string]: string }) => {
  const parsed = Array.from(Object.entries(theme), ([root, value]) => {
    if (typeof value === 'string') return __parseString(root, value)
    else return __parseObject(root, value)
  })
  return parsed.flat().join('')
}

const colorsGenerator = (theme: { [key: string]: string }, themeType: string) => {
  const colorString = __genCssString(theme)
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = `:root[data-mode="${themeType}"] { ${colorString} }`

  document.getElementsByTagName('head')[0].appendChild(style)
}

export default colorsGenerator
