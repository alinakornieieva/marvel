class MarvelService{
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=54598bb89e5b2b5c2013cb708d10fde9'
    getResource = async (url) => {
        let res = await fetch(url)
        if (!res.ok) {
            throw new Error(`Error status is ${res.status}`)
        }
        return await res.json()
    }
    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
        return res.data.results.map(this._transformCharacterData)
    }
    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`)
        return this._transformCharacterData(res.data.results[0])
    }
    _transformCharacterData = (res) => {
        return {
            name: res.name,
            description: res.description ? `${res.description.slice(0, 200)}...` : 'No description yet',
            thumbnail: `${res.thumbnail.path}.${res.thumbnail.extension}`,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url
        }
    }
    // 1011196
}

export default MarvelService