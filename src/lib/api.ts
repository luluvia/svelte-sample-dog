interface DogDto {
  message: string
  status: string
}

export const getRandomDogImageUrl = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data: DogDto = await response.json()

  if (response.ok) {
    return data.message
  } else {
    throw new Error(data.message)
  }
}