import React, {useEffect, useState} from "react";
import Navbar from "../../components/header/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {fileView} from "../../shared/funs";
import {isAuthentication} from "../../redux/actions/auth";
import "react-toastify/dist/ReactToastify.css";
import {ME, ME_UPDATE_AVATAR} from "../../redux/constans/auth";
import {Create} from "../../axios/service/file";
import {EditAccount, Image, ChangePassword} from "../../axios/service/user";


function Profil() {

    toast.configure();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [resetPassword, setResetPassword] = useState({oldpassword: "", newpassword: "", confirmepassword: ""});
    const [profilData, setProfilData] = useState({firstname: "", lastname: "", email: "", password: ""});
    const [loading, setLoading] = useState(false);

    const {oldpassword, newpassword, confirmepassword} = resetPassword;
    const {firstname, lastname, email} = profilData;

    const {isAuth, user, token} = useSelector((state) => state.auth);
    const authorization = {
        Authorization: `bearer ${token}`
    };

    useEffect(() => {
        dispatch(isAuthentication());
    }, [dispatch]);

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth]);

    useEffect(() => {
        setProfilData(user);
    }, [user]);


    const handleProfilePassword = (e) => {
        setResetPassword({
            ...resetPassword,
            [e.target.name]: e.target.value
        });
    };

    const handleProfile = (e) => {
        setProfilData({
            ...profilData,
            [e.target.name]: e.target.value
        });
    };
    const t = (text) => {
        return text;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        for (const key in profilData) {
            if (profilData[key] === "") {
                toast.error(`${key}: this field is required`);
                return;
            } else if (profilData[key].length <= 2) {
                toast.error(`${key}: this field must be two or  more then two character`);
                return;
            }
        }

        setLoading(true);

        EditAccount(user._id, profilData, authorization).then(({data}) => {
            if (!data.err) {
                setLoading(false);
                toast.success(t("updated"));
                dispatch({
                    type: ME,
                    payload: {
                        ...user,
                        ...profilData
                    }
                });
            } else {
                setLoading(false);
                toast.error(typeof data.msg == "string" ? t(data.msg) : t(data.msg[0]));
            }

            // console.log(data);
        }).catch((err) => {
            console.log("get orders api err ", err);
            setLoading(false);
            toast.error(t("something went wrong please try again"));
        });
    };

    // upload image
    const uploadImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            const img = e.target.files[0];


            // return
            const formData = new FormData();
            formData.append("image", img);

            setLoading(true);
            Create(formData, authorization).then(({data}) => {
                if (!data.err) {
                    setLoading(true);
                    Image(user._id, {
                        image: data.msg
                    }, authorization).then(({data}) => {
                        if (!data.err) {
                            setLoading(false);
                            toast.success(t("updated"));
                            dispatch({type: ME_UPDATE_AVATAR, payload: data.msg});
                        } else {
                            setLoading(false);
                            toast.error(typeof data.msg == "string" ? t(data.msg) : t(data.msg[0]));
                        }
                        // console.log(data);
                    }).catch((err) => {
                        console.log("get orders api err ", err);
                        setLoading(false);
                        toast.error(t("something went wrong please try again 2"));
                    });
                } else {
                    setLoading(false);
                    toast.error(typeof data.msg == "string" ? t(data.msg) : t(data.msg[0]));
                }
                // console.log(data);
            }).catch((err) => {
                console.log("get orders api err ", err);
                setLoading(false);
                toast.error(t("something went wrong please try again 1"));
            });
        }
    };


    const handleChangePass = (e) => {
        e.preventDefault();

        for (const key in resetPassword) {
            if (resetPassword[key] === "") {
                toast.error(`${key}: this field is required`);
                return;
            } else if (resetPassword[key].length <= 2) {
                toast.error(`${key}: this field must be two or  more then two character`);
                return;
            }
        }

        if (confirmepassword !== newpassword) {
            toast.error(t("confirme password must be the same as password"));
            return;
        }

        setLoading(true);
        const passwordData = {
            oldpassword: resetPassword.oldpassword,
            password: resetPassword.newpassword
        };

        ChangePassword(user._id, passwordData, authorization).then(({data}) => {
            if (!data.err) {
                setLoading(false);
                toast.success(t("updated password"));

            } else {
                setLoading(false);
                toast.error(typeof data.msg == "string" ? t(data.msg) : t(data.msg[0]));
            }
            // console.log(data);
        }).catch((err) => {
            console.log("get orders api err ", err);
            setLoading(false);
            toast.error(t("something went wrong please try again"));
        });
    };


    const defaultImage = () => {
        setLoading(true);

        Image(user._id, {
            image: '6273bc47933490009cc19910'
        }, authorization).then(({data}) => {

            if (!data.err) {
                setLoading(false);
                toast.success(t("Supprimer photo "));
                dispatch({type: ME_UPDATE_AVATAR, payload: data.msg});
            } else {
                setLoading(false);
                toast.error(typeof data.msg == "string" ? t(data.msg) : t(data.msg[0]));
            }

            // console.log(data);
        }).catch((err) => {
            console.log("get orders api err ", err);
            setLoading(false);
            toast.error(t("something went wrong please try again 2"));
        });
    };



    return (<>
        <Navbar/> {isAuth && 
                        
                        <>
            
                        <div className="pagetitle">
                        <h1>Profil</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html">page d'accuile</a>
                                </li>
                                <li className="breadcrumb-item">Utilisateurs</li>
                                <li className="breadcrumb-item active">Profil</li>
                            </ol>
                        </nav>
                    </div>
                    <section className="section profile">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card">
                                    <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                        <img src={
                                                fileView(user.image._id)
                                            }
                                            alt="Profile"
                                            className="rounded-circle"/>
                                        <h2>{
                                            user.firstname + " " + user.lastname
                                        }</h2>
                                        {/* <h3>Web Designer</h3> */}
                                        <div className="social-links mt-2">
                                            <a href="#twitter" className="twitter">
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a href="#facebook" className="fachandleSubmitebook">
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                            <a href="#instagram" className="instagram">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                            <a href="#linkedin" className="linkedin">
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                            <a href="#whatsapp" className="whatsapp">
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card">
                                    <div className="card-body pt-3">
                                        <ul className="nav nav-tabs nav-tabs-bordered">
                                            <li className="nav-item">
                                                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">
                                                    Aperçu
                                                </button>
                                            </li>
            
                                            <li className="nav-item">
                                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">
                                                    Editer le profil
                                                </button>
                                            </li>
            
                                            {/* <li className="nav-item">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#profile-settings"
                            >
                            Réglages
                            </button>
                          </li> */}
            
                                            <li className="nav-item">
                                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">
                                                    Changer le mot de passe
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-2">
                                            <div className="tab-pane fade show active profile-overview" id="profile-overview">
                                                <h5 className="card-title">Environ :</h5>
                                                <p className="small fst-italic">
                                                    Sunt est soluta temporibus accusantium neque nam maiores
                                                                          cumque temporibus. Tempora libero non est unde veniam est
                                                                          qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                                                                          perspiciatis odit. Fuga sequi sed ea saepe at unde.
                                                </p>
            
                                                <h5 className="card-title">Profile Details</h5>
            
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label ">Nom :</div>
                                                    <div className="col-lg-9 col-md-8">
                                                        {
                                                        user.lastname
                                                    }</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label ">Prénom :</div>
                                                    <div className="col-lg-9 col-md-8">
                                                        {
                                                        user.firstname
                                                    }</div>
                                                </div>
            
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label">rôle</div>
                                                    <div className="col-lg-9 col-md-8">Web Designer</div>
                                                </div>
            
                                                {/* <div className="row">
                              <div className="col-lg-3 col-md-4 label">Country</div>
                              <div className="col-lg-9 col-md-8">USA</div>
                            </div> */}
            
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label">Adresse :</div>
                                                    <div className="col-lg-9 col-md-8">
                                                        {
                                                        user.adresse
                                                    }</div>
                                                </div>
            
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label">Téléphone :</div>
                                                    <div className="col-lg-9 col-md-8">
                                                        {
                                                        user.phone
                                                    }</div>
                                                </div>
            
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label">E-mail :</div>
                                                    <div className="col-lg-9 col-md-8">
                                                        {
                                                        user.email
                                                    }</div>
                                                </div>
                                            </div>
            
                                            <div className="tab-pane fade profile-edit pt-3" id="profile-edit">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row mb-3">
                                                        <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">
                                                            Profile Image
                                                        </label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <img src={
                                                                    fileView(user.image._id)
                                                                }
                                                                alt="Profile"/>
                                                            <div className="pt-2">
                                                                <label for="uploadImage" className="btn btn-primary btn-sm" title="Upload new profile image">
                                                                    <i className="fa-solid fa-cloud-arrow-up"></i>
                                                                    <input type="file"
                                                                        style={
                                                                            {display: "none"}
                                                                        }
                                                                        id="uploadImage"
                                                                        onChange={uploadImage}/>
                                                                </label>
            
                                                                {/* ---------- */}
                                                                <a onClick={defaultImage}
                                                                    href="javascript:void(0)"
                                                                    className="btn btn-danger btn-sm"
                                                                    title="Remove my profile image">
                                                                    <i className="fa-solid fa-trash-can"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
            
                                                    <div className="row mb-3">
                                                        <label for="firstname" className="col-md-4 col-lg-3 col-form-label">
                                                            Prénom :
                                                        </label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="firstname" type="text" className="form-control" id="firstname"
                                                                value={firstname}
                                                                onChange={
                                                                    (e) => handleProfile(e)
                                                                }/>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label for="lastname" className="col-md-4 col-lg-3 col-form-label">
                                                            Nom :
                                                        </label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="lastname" type="text" className="form-control" id="lastname"
                                                                value={lastname}
                                                                onChange={
                                                                    (e) => handleProfile(e)
                                                                }/>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label for="email" className="col-md-4 col-lg-3 col-form-label">
                                                            E-mail
                                                        </label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="email" type="email" className="form-control" id="email"
                                                                value={email}
                                                                onChange={
                                                                    (e) => handleProfile(e)
                                                                }/>
                                                        </div>
                                                    </div>
                                                    {/* <div className="row mb-3">
                                <label
                                  for="about"
                                  className="col-md-4 col-lg-3 col-form-label"
                                >
                                  About
                                </label>
                                <div className="col-md-8 col-lg-9">
                                  <textarea
                                    name="about"
                                    className="form-control"
                                    id="about"
                                    // style="height: 100px"
                                  >
                                    Sunt est soluta temporibus accusantium neque nam
                                    maiores cumque temporibus. Tempora libero non est
                                    unde veniam est qui dolor. Ut sunt iure rerum quae
                                    quisquam autem eveniet perspiciatis odit. Fuga sequi
                                    sed ea saepe at unde.
                                  </textarea>
                                </div>
                              </div> */}
                                                    {/* 
                              <div className="row mb-3">
                                <label
                                  for="company"
                                  className="col-md-4 col-lg-3 col-form-label"
                                >
                                  Company
                                </label>
                                <div className="col-md-8 col-lg-9">
                                  <input
                                    name="company"
                                    type="text"
                                    className="form-control"
                                    id="company"
                                    value="Lueilwitz, Wisoky and Leuschke"
                                  />
                                </div>
                              </div> */}
                                                    {/* 
                              <div className="row mb-3">
                                <label
                                  for="Address"
                                  className="col-md-4 col-lg-3 col-form-label"
                                >
                                  Address
                                </label>
                                <div className="col-md-8 col-lg-9">
                                  <input
                                    name="address"
                                    type="text"
                                    className="form-control"
                                    id="Address"
                                    value="A108 Adam Street, New York, NY 535022"
                                  />
                                </div>
                              </div> */}
            
                                                    {/* <div className="row mb-3">
                                <label
                                  for="Phone"
                                  className="col-md-4 col-lg-3 col-form-label"
                                >
                                  Phone
                                </label>
                                <div className="col-md-8 col-lg-9">
                                  <input
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                    id="Phone"
                                    value="(436) 486-3538 x29071"
                                  />
                                </div>
                              </div> */}
                                                    {/* <div className="row mb-3">
                                <label
                                  for="Twitter"
                                  className="col-md-4 col-lg-3 col-form-label"
                                >
                                  Twitter Profile
                                </label>
                                <div className="col-md-8 col-lg-9">
                                  <input
                                    name="twitter"
                                    type="text"
                                    className="form-control"
                                    id="Twitter"
                                    value="https://twitter.com/#"
                                  />
                                </div>
                              </div>handleProfilePassword
            
                              <div className="row mb-3">
                                <label
                                  for="Facebook"
                                  className="col-md-4 col-lg-3 col-form-label"
                                >
                                  Facebook Profile
                                </label>
                                <div className="col-md-8 col-lg-9">
                                  <input
                                    name="facebook"
                                    type="text"
                                    className="form-control"
                                    id="Facebook"
                                    value="https://facebook.com/#"
                                  />handleProfilePassword
                                </div>
                              </div>
            
                              <div className="row mb-3">
                                <label
                                  for="Instagram"
                                  className="col-md-4 col-lg-3 col-form-label"
                                >
                                  Instagram Profile
                                </label>
                                <div className="col-md-8 col-lg-9">
                                  <input
                                    name="instagram"
                                    type="text"
                                    className="form-control"
                                    id="Instagram"
                                    value="https://instagram.com/#"
                                  />
                                </div>
                              </div>
            
                              <div className="row mb-3">
                                <label
                                  for="Linkedin"
                                  className="col-md-4 col-lg-3 col-form-label"
                                >
                                  Linkedin Profile
                                </label>
                                <div className="col-md-8 col-lg-9">
                                  <input
                                    name="linkedin"
                                    type="text"
                                    className="form-control"
                                    id="Linkedin"
                                    value="https://linkedin.com/#"
                                  />
                                </div>
                              </div> */}
            
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-primary">
                                                            Save Changes
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
            
                                            {/* <div className="tab-pane fade pt-3" id="profile-settings">
                            <form onSubmit={handleChangePass}>
                              <div className="row mb-3">
                                <label
                                  for="fullName"
                                  className="col-md-4 col-lg-3 col-form-label"
                                >
                                  E-mail Notifications
                                </label>
                                <div className="col-md-8 col-lg-9">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="changesMade"
                                      checked
                                    />
                                    <label
                                      className="form-check-label"
                                      for="changesMade"
                                    >
                                      Changes made to your account
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="newProducts"
                                      checked
                                    />
                                    <label
                                      className="form-check-label"
                                      for="newProducts"
                                    >
                                      Information on new products and services
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="proOffers"
                                    />
                                    <label className="form-check-label" for="proOffers">
                                      Marketing and promo offers
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="securityNotify"
                                      checked
                                      disabled
                                    />
                                    <label
                                      className="form-check-label"
                                      for="securityNotify"
                                    >
                                      Security alerts
                                    </label>
                                  </div>
                                </div>
                              </div>
            
                              <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                  Save Changes
                                </button>
                              </div>
                            </form>
                          </div> */}
            
                                            <div className="tab-pane fade pt-3" id="profile-change-password">
                                                <form onSubmit={handleChangePass}>
                                                    <div className="row mb-3">
                                                        <label for="currentPassword" className="col-md-6 col-lg-4 col-form-label">
                                                            Mot de passe actuel :
                                                        </label>
                                                        <div className="col-md-6 col-lg-8">
                                                            <input name="oldpassword" type="password" className="form-control" id="currentPassword"
                                                                onChange={handleProfilePassword}
                                                                value={oldpassword}/>
                                                        </div>
                                                    </div>
            
                                                    <div className="row mb-3">
                                                        <label for="newPassword" className="col-md-6 col-lg-4 col-form-label">
                                                            nouveau mot de passe :
                                                        </label>
                                                        <div className="col-md-6 col-lg-8">
                                                            <input name="newpassword" type="password" className="form-control" id="newPassword"
                                                                value={newpassword}
                                                                onChange={
                                                                    (e) => handleProfilePassword(e)
                                                                }/>
                                                        </div>
                                                    </div>
            
                                                    <div className="row mb-3">
                                                        <label for="renewPassword" className="col-md-6 col-lg-4 col-form-label">
                                                            Ré-entrez le nouveau mot de passe :
                                                        </label>
                                                        <div className="col-md-6 col-lg-8">
                                                            <input name="confirmepassword" type="password" className="form-control" id="renewPassword"
                                                                value={confirmepassword}
                                                                onChange={
                                                                    (e) => handleProfilePassword(e)
                                                                }/>
                                                        </div>
                                                    </div>
            
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-primary">
                                                            Change Password
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                
                </>
                        
                        }
            
                       </>
    );
    }

    export default Profil;
