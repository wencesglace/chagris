export type CatStatus = 'disponible' | 'en attente' | 'réservé'

export type Cat = {
  name: string
  age: string
  image: string
  description: string
  status: CatStatus
}