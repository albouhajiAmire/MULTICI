
import React, { useState } from "react";
import { toast} from 'react-toastify';
import "../../auth/login.css";
import { CvAuth } from "../axios/service/auth";
import Header from "../components/header/Header";

function FormEmpl() {
  const [formData, setFormData] = useState({
    type: "",
    presentation: "",
    birthday: "",
    password: "",
    gender: "male",
    certif: "",
    cvId: "",
  });
  const { type, presentation, certif, birthday, gender, cvId } = formData;
  const handleInputChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    console.log(evt.target.value);
  };
  const validate = (evt) => {
    evt.preventDefault();
    const data = new FormData();
    
    for(let i = 0; i < cvId.length; i++) {
       data.append('file', cvId[i]);
    }
    // debugger
    CvAuth(formData)
      .then(({ data }) => {
        if (data.err) {
          toast.error('Télécharger no succès');
        } else {
          toast.success('Télécharger le succès');
        }
      })
      .catch((err) => {
        toast.error('Il ya quelque chose qui ne va pas!!');
      });
    // let data = {}
    // if( certif === "none"){
    //   certificate = false
    //   data = {...formData,certificate }
    // }else{
    //   certificate = true;
    //   certificateName = certif
    //   data = {...formData,certificate, certificateName}
    // }
  };
 
  return (
    <>
      <Header />
      <section style={{ marginTop: "30px" }}>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15 spanlogin">
                Postolez-vous à votre CV
              </span>
              <form id="stripe-login" onSubmit={validate}>
                <div className="field padding-bottom--24">
                  <label className="labellogin" htmlFor="email">
                    Diplome (*):
                  </label>
                  <select
                    className="form-select form-select-lg"
                    aria-label=".form-select-lg example"
                    name="certif"
                    value={certif}
                    onChange={(evt) => handleInputChange(evt)}
                  >
                    <option selected></option>
                    <option value="none">sans déplome </option>
                    <option value="info">déplomer</option>
                  </select>
                </div>
                <div className="field padding-bottom--24">
                  <label className="labellogin" htmlFor="email">
                    D'emande d'emploi (*):
                  </label>
                  <select
                    className="form-select form-select-lg"
                    aria-label=".form-select-lg example"
                    name="type"
                    value={type}
                    onChange={(evt) => handleInputChange(evt)}
                  >
                    <option selected>d'emploi</option>
                    <option value="stagepfe">Stage Pfe</option>
                    <option value="stagepre">Stage pré enbauche</option>
                    <option value="emploi"> Emploi</option>
                  </select>
                </div>
                <div className="row">
                  <div className="field padding-bottom--24 col-md-12">
                    <label className="labellogin" htmlFor="email">
                      Date de naissance (*):
                    </label>
                    <input
                      type="date"
                      name="birthday"
                      value={birthday}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </div>
                </div>
                <div className="file-card">
                  <div className="file-inputs">
                    <input
                      type="file"
                      name="cvId"
                      value={cvId}
                      onChange={(evt) => handleInputChange(evt)}
                      multiple
                    />
                    <button>
                      <i className="fa-solid fa-folder-plus"></i>
                      Télécharger CV
                    </button>
                  </div>
                  <p className="main">Fichiers pris en charge</p>
                  <p className="info">PDF, JPG, PNG</p>
                  <span>{cvId}</span>
                </div>
                <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                  <label className="labellogin col-md-3" htmlFor="checkbox">
                    Genre (*):
                  </label>
                  <label className="labellogin col-md-4" htmlFor="radio">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "male"}
                      value="male"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                    Homme
                  </label>
                  <label className="labellogin col-md-4" htmlFor="radio">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "female"}
                      value="female"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                    femme
                  </label>
                </div>
                <div className="row">
                  <div className="field padding-bottom--24 col-md-12">
                    <label className="labellogin" htmlFor="email">
                      Date de depart (*):
                    </label>
                    <textarea
                      name="presentation"
                      cols="36"
                      rows="6"
                      value={presentation}
                      onChange={(evt) => handleInputChange(evt)}
                    ></textarea>
                  </div>
                </div>
                <div className="field padding-bottom--24">
                  <input type="submit" name="submit" defaultValue="Continue" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormEmpl;
