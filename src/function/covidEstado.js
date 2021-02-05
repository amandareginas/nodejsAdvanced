const fetch = require('node-fetch')

module.exports = async function covidEstado(estado) {
    const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${estado}`)
    const json = await response.json()

    return json
}