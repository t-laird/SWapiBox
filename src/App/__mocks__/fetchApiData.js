import mockApiResponse from './mockApiResponse';
const {peopleData, planetData, vehicleData, filmData, favorites} = mockApiResponse;

export const getFilmsData = jest.fn()
  .mockImplementationOnce(() => ({
    groceries: [
      { id: 1489863729151, name: 'Rutabagas', quantity: 10, purchased: false, starred: false },
      { id: 1489863740047, name: 'Beef Jerky', quantity: 1000, purchased: false, starred: false },
  ],
}))


// export async function getFilmsData () {
//   return filmData;
// }
export async function getVehicleData () {
  return vehicleData;
}
export async function getPlanetsData () {
  return planetData;
}
export async function getPeopleData () {
  return peopleData;
}
export async function getFavorites () {
  return favorites;
}




export default { getFilmsData, getVehicleData, getPlanetsData, getPeopleData, getFavorites };