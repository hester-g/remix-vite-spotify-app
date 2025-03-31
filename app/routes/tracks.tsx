import axios, { AxiosRequestConfig } from 'axios'
import {useEffect, useState} from 'react'

const getSomeTracks = async () => {
  const clientId = '2eabe42500be4cb5a34717854122fa8d'
  const clientSecret = '808c2d708a48486cab2e8119afd1d5ce' //TODO make secret
  let config: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
  const postData = 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret
  const { data: { access_token } } = await axios.post('https://accounts.spotify.com/api/token', postData, config)

  const tracks = '7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B'
  config = {
    headers: {
      Authorization: 'Bearer ' + access_token
    }
  }

  return axios.get('https://api.spotify.com/v1/tracks?ids=' + tracks, config)
}

type album = {
  name: string
}

type artist = {
  name: string
}

type track = {
  name: string,
  album: album,
  artists: Array<artist>,
  popularity: number
}

export default function Tracks() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getSomeTracks().then((response) => {
      setTracks(response.data.tracks)
    }).then(() => console.log(tracks))
  }, [])

  return tracks.length > 0 && <ul>{tracks.map((track: track, index: number) =>
    <li key={index}>{track.name}</li>
  )}</ul>
}