import React, { useState } from "react";
import AjoutTache from "./AjoutTache";
import ItemTache from "./ItemTache";
import { useSelector } from "react-redux";

function Liste() {
  const [search, setSearch] = useState("");
  const taches = useSelector((state) => state?.tache);
  const handleSearche = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="liste-tache">
            <div className="row">
              <div className="col-md-6">
                <h2>Liste de tâches</h2>
              </div>
              <div className="col-md-6">
                <form className="form-inline search">
                  <input
                    className="form-control float-right"
                    type="search"
                    placeholder="Rechercher"
                    aria-label="Search"
                    onChange={(e) => handleSearche(e)}
                  />
                </form>
              </div>
            </div>

            {taches
              .filter((tache) => {
                if (search == "") {
                  return tache;
                } else if (
                  tache.nom
                    .toLowerCase()
                    .trim()
                    .includes(search.toLocaleLowerCase().trim())
                ) {
                  return tache;
                }
              })
              .map((tache) => {
                return (
                  <ItemTache
                    key={tache.id}
                    idItem={tache.id}
                    nomItem={tache.nom}
                    descriptionItem={tache.description}
                    etatItem={tache.etat}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <AjoutTache />
    </div>
  );
}

export default Liste;
