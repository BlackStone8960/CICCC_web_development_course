export const setReservation = (reservations) => ({
  type: 'SET_RESERVATION',
  reservations
})

export const startSetReservation = () => {
  return (dispatch, getState) => {
    const reservations = JSON.parse(localStorage.getItem('seats'));
    dispatch(setReservation(reservations));
  }
}