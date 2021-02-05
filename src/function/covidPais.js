const fetch = require('node-fetch')

module.exports = async function covidPais(pais) {
    const response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/${pais}`)
    const json = await response.json()

    return json
}