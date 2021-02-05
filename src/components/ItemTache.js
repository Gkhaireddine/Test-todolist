import React, { useEffect, useState } from "react";
import { deleteTache } from "../Action/actionTache";
import { updateTache } from "../Action/actionTache";
import { connect } from "react-redux";
import "./itemtache.css";

const rgxTxt = new RegExp(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/);
function ItemTache(props) {
  const [nom, setvalNom] = useState(props?.nomItem);
  const [description, setvalDescription] = useState(props?.descriptionItem);
  const [valEdit, setvalEdit] = useState(false);
  const [etat, setvalEtat] = useState(props?.etatItem);
  const [styleEtat, setstyleEtat] = useState("red-class");
  const OnEdit = () => {
    setvalEdit(true);
  };
  const InputNom = (e) => {
    setvalNom(e.target.value);
  };
  const InputDescription = (e) => {
    setvalDescription(e.target.value);
  };
  const SelectEtat = (e) => {
    setvalEtat(e.target.value);
  };
  const EnregistreEdit = (e) => {
    const id = e.target.id;
    if (rgxTxt.test(nom) && rgxTxt.test(description)) {
      props.updateTache({ id, nom, description, etat });
      setvalEdit(false);
    } else {
      alert("Merci de verifier votre text");
    }
  };
  const AnnulerEdit = () => {
    setvalEdit(false);
  };
  useEffect(() => {
    if (etat == "Compléter") {
      setstyleEtat("green-class");
    }
  }, [etat]);

  if (valEdit == true) {
    return (
      <>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>Nom</label>
              <input
                pattern="[A-Za-z]"
                value={nom}
                onChange={(e) => InputNom(e)}
                type="text"
                className="form-control"
                id="nom1"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group">
              <label>Description</label>
              <input
                pattern="[A-Za-z]"
                value={description}
                onChange={(e) => InputDescription(e)}
                type="text"
                className="form-control"
                id="description1"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Etat</label>
              <select
                className="form-control"
                id="etat"
                onChange={(e) => SelectEtat(e)}
              >
                <option selected disabled>
                  Veuillez changer l'etat
                </option>
                <option value="Non compléter">Non compléter</option>
                <option value="Compléter">Compléter</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <button
              onClick={AnnulerEdit}
              className="btn btn-secondary float-right"
            >
              Annuler
            </button>
            <button
              id={props.idItem}
              onClick={(e) => EnregistreEdit(e)}
              className="btn btn-success float-right"
            >
              Enregistre
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="itemTache">
        <strong>{nom} : </strong>
        <span>{description}</span>
        <button onClick={OnEdit}>Editer</button>
        <button
          id={props.idItem}
          onClick={(e) => {
            if (window.confirm("Vos étes sure?"))
              props.deleteTache(props.idItem);
          }}
        >
          Supprimer
        </button>
        <span className={styleEtat}>{etat}</span>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteTache: (supprimer) => dispatch(deleteTache(supprimer)),
    updateTache: (update) => dispatch(updateTache(update)),
  };
};
export default connect(null, mapDispatchToProps)(ItemTache);
