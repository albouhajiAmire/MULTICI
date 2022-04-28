import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "../../auth/login.css";
import { CvAuth } from "../axios/service/auth";
import Header from "../components/header/Header";
import { Create as CreateFile } from "../axios/service/file";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAuthentication } from "../redux/actions/auth";
import Navbar from "../components/header/Navbar";
function FormEmpl() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    // type: "none",
    type: "",
    presentation: "",
    birthday: "",
    password: "",
    gender: "male",
    certif: "",
    // certif: "none",
    cvId: "",
    userId: user._id,
  });
  const [fileName, setFileName] = useState("");
  // const [cvId, setCvId] = useState("");
  const { type, presentation, certif, birthday, gender, cvId } = formData;

  const handleInputChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    console.log(evt.target.value);
  };

  useEffect(() => {
    dispatch(isAuthentication());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);
  const validate = (evt) => {
    evt.preventDefault();
    let data = {};
    if (certif === "none") {
      const certificate = false;
      data = { ...formData, certificate };
    } else {
      const certificate = true;
      const certificateName = certif;
      data = { ...formData, certificate, certificateName };
    }
    if (cvId === "") {
      toast.error("cv id not !!");
      return;
    }
    setLoader(true);
    CvAuth(data)
      .then(({ data }) => {
        if (data.err) {
          toast.error("Télécharger no succès");
          setLoader(false);
        } else {
          toast.success("Télécharger le succès");
          setLoader(false);
        }
        setFormData({
          type: "",
          presentation: "",
          certif: "",
          birthday: "",
          gender: "",
          cvId: "",
        });
      })
      .catch((err) => {
        toast.error("Il ya quelque chose qui ne va pas!!");
        setLoader(false);
      });
  };

  // --------------------UPLOAD FICHIER SVG PDF ... :
  const sendFile = (evt) => {
    if (evt.target.files && evt.target.files[0]) {
      const img = evt.target.files[0];
      console.log(img.name);
      //return
      const formCv = new FormData();
      formCv.append("image", img);
      setLoader(true);
      CreateFile(formCv)
        .then(({ data }) => {
          if (!data.err) {
            setFormData({ ...formData, cvId: data.msg });
            toast.success(" CV Télecharger");
            setFileName(img.name);
            setLoader(false);
          } else {
            toast.error("Erreur!!CV n'est pas télecharger ,réessayer!");
            setLoader(false);
          }
        })
        .catch((err) => {
          console.log("get orders api err ", err);
          toast.error("Ooooh !! Erreur");
          setLoader(false);
        });
    }
  };

  return (
    <>
      <Navbar />
      <section style={{ marginTop: "30px" }}>
        <div className="formbg-outer">
          <div className="formbg">
            {loader && <h1>loading...</h1>}
            <div className="formbg-inner padding-horizontal--48">
              <span className="padding-bottom--15 spanlogin">
                Postolez-vous à votre CV
              </span>
              <form id="stripe-login" onSubmit={validate}>
                {/* <div className="field padding-bottom--24">
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
                    <option value="none"></option>
                    <option value="none">sans déplome </option>
                    <option value="info">déplomer</option>
                  </select>
                </div> */}
                <div className="field padding-bottom--24">
                  <label className="labellogin">Diplome (*):</label>
                  <input
                    type="text"
                    name="certif"
                    value={certif}
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </div>
                <div className="field padding-bottom--24">
                  {/* <label className="labellogin" htmlFor="email">
                    D'emande d'emploi (*):
                  </label>
                  <select
                    className="form-select form-select-lg"
                    aria-label=".form-select-lg example"
                    name="type"
                    value={type}
                    onChange={(evt) => handleInputChange(evt)}
                  >
                    <option value="none">d'emploi</option>
                    <option value="stagepfe">Stage Pfe</option>
                    <option value="stagepre">Stage pré enbauche</option>
                    <option value="emploi"> Emploi</option>
                  </select> */}
                  <label className="labellogin">D'emande d'emploi (*):</label>
                  <input
                    type="text"
                    name="type"
                    value={type}
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </div>
                <div className="row">
                  <div className="field padding-bottom--24 col-md-12">
                    <label className="labellogin">Date de naissance (*):</label>
                    <input
                      type="date"
                      name="birthday"
                      value={birthday}
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </div>
                </div>
                {/* <input
                      type="hidden"
                      name="userId"
                      value={user._id}
                    />
                      <input
                      type="hidden"
                      name="cvId"
                      value={cvId}
                     
                    /> */}
                <div className="file-card">
                  <div className="file-inputs">
                    <input
                      type="file"
                      name="cvId"
                      onChange={(evt) => sendFile(evt)}
                      accept=".png,.pdf ,.jpg,.jpeg"
                    />
                    <button>
                      <i className="fa-solid fa-folder-plus"></i>
                      Télécharger CV
                    </button>
                  </div>
                  <p className="main">Fichiers pris en charge</p>
                  <p className="info">PDF, JPG, PNG ,JPEG</p>
                  <span>{fileName}</span>
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
                      Lettre Motivation (*):
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
