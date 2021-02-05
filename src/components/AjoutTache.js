import React, { useState } from "react";
import { connect } from "react-redux";
import { addTache } from "../Action/actionTache";
const rgxTxt = new RegExp(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/);
let etat = "Non compléter";
let id = 0;
function AjoutTache(props) {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");

  const InputNom = (e) => {
    setNom(e.target.value);
  };
  const InputDescription = (e) => {
    setDescription(e.target.value);
  };
  const handelAdd = (e) => {
    if (rgxTxt.test(nom) && rgxTxt.test(description)) {
      id = Math.floor(Math.random() * 1000);
      props.add({ id, nom, description, etat });
      setNom("");
      setDescription("");
    } else {
      alert("Merci de verifier votre text");
    }
    e.preventDefault();
  };
  return (
    <div className="liste-tache">
      <h2>Créer une nouvelle tâche</h2>
      <form>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>Nom de la tâche</label>
              <input
                required
                value={nom}
                onChange={(e) => InputNom(e)}
                type="text"
                className="form-control"
                id="nom"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="form-group">
              <label>Description de la tâche</label>
              <input
                required
                value={description}
                onChange={(e) => InputDescription(e)}
                type="text"
                className="form-control"
                id="description"
              />
            </div>
          </div>
          <div className="col-md-12">
            <button
              type="submit"
              className="btn btn-primary float-right"
              onClick={(e) => handelAdd(e)}
            >
              Ajouter la tâche
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (text) => dispatch(addTache(text)),
  };
};
export default connect(null, mapDispatchToProps)(AjoutTache);
