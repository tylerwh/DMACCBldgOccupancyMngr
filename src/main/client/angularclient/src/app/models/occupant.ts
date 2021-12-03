export interface Occupant {
  id: number,
  fname: string,
  lname: string,
  bldgNum: number
}

export interface GetOccupantsResponse {
  occupants: Occupant[]
}
