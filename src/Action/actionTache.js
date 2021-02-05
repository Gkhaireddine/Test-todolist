export const addTache = (text) => ({
  type: "ADD_TACHE",
  payload: text,
});
export const deleteTache = (supprimer) => ({
  type: "DELETE_TACHE",
  payload: supprimer,
});
export const updateTache = (update) => ({
  type: "UPDATE_TACHE",
  payload: update,
});
