export interface Occupant {
  id: number,
  fname: string,
  lname: string
}

export interface GetOccupantsResponse {
  occupants: Occupant[]
}
