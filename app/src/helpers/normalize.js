const cep = (value) =>
  value
    .replace(/-{1,}/g, '')
    .match(/.{1,5}/g)
    ?.join('-')
    .substr(0, 9) || ''

export default { cep }
