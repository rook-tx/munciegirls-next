export async function getSongkickDates() {
  const artistId = 4326711
  const apiKey = 'FwkcBPF5yvACSkxK'
  const reqUrl = `https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=${apiKey}`

  async function jet(url) {
    const data = await fetch(url)
    const res = await data.json()
    return res
  }

  const songkickDates = await jet(reqUrl)

  const newDates = []

  if (songkickDates.resultsPage) {
    const results = songkickDates.resultsPage.results.event

    if (results && results.length > 0) {
      for (let i = 0; i < results.length; i++) {
        newDates.push(results[i])
      }
    } else {
      console.log(results)
    }
  }

  return newDates
}
