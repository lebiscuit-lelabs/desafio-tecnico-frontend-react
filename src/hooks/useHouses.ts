import { House } from 'components/Houses'
import { useEffect, useState } from 'react'
import api from 'services/api'

export function useHouses() {
  const [houses, setHouses] = useState<House[]>([])

  useEffect(() => {
    const getAllHouses = async () => {
      const response = await api.get('/show/houses')
      const data = response.data
        .slice(0, 50)
        .map((item: any, index: number) => ({
          name: item.name,
          active: index === 0
        }))

      setHouses(data)
    }

    getAllHouses()
  }, [])

  return { houses }
}
