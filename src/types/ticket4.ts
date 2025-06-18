export interface EventAPIResponse {
  _hE: boolean
  data: {
    events: Event[]
    message: string
  }
  status: number
}

export interface Events {
  events: Event[]
}

export interface Event {
  active: boolean
  basePrice: number
  cover: string
  cover_uri: string
  description: string
  end: string
  id: string
  lineup: string[] // Assuming an array of some type, could be refined
  name: string
  publishedAt: string
  shortLink: string
  soldOut: boolean
  start: string
  status: string
  url: string
  venue: Venue
}

export interface Venue {
  center: [number, number] // Coordinates as [longitude, latitude]
  city: string
  identifier: string
  location: string
  name: string
  postcode: string
  region: string
  region_ab: string
}

// Example usage:
// const response: EventAPIResponse = await fetchEvents();
