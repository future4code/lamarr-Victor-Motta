import axios from "axios"

export const getProfile = async (setProfile) => {
    try {
      const response = await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:victor/person'
      )
      setProfile(response.data.profile)
    } catch (error) {
      console.log(error)
    }
  }

export const getMacthes = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor/matches"

export const choosePerson = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor/choose-person"

export const clear = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/victor/clear"