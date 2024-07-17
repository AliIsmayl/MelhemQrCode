import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";
import { TbMail, TbWorld } from "react-icons/tb";
import { BrowserRouter, Link } from "react-router-dom";
import './App.scss';
import { AiOutlineTikTok } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function App() {
  return (
    <BrowserRouter>
      <div className='qrCode'>
        <div className="logo">
          <img src="https://www.melhemhospital.com/melhem_hospital_logo_436.png" alt="" />
          <h1>Məlhəm Hospital</h1>
        </div>
        <div className="links">
          <div className="linkBox">
            <Link className='link' to={"tel:0512017101"}>
              <FaWhatsapp />
            </Link>
            <p>Whatsapp</p>
          </div>
          <div className="linkBox">
            <Link className='link' to={"https://www.instagram.com/melhembeynelxalqhospital/"}>
              <FaInstagram />
            </Link>
            <p>Instagram </p>
          </div>
          <div className="linkBox">
            <Link className='link' to={"https://www.facebook.com/profile.php?id=100088066875813"}>
              <FaFacebook />
            </Link>
            <p>Facebook </p>
          </div>
          <div className="linkBox" >
            <Link className='link' to={"https://www.youtube.com/@melhembeynelxalqhospital"}>
              <FaYoutube />
            </Link>
            <p>Youtube</p>
          </div>
          <div className="linkBox" >
            <Link className='link' to={"https://www.linkedin.com/company/m%C9%99lh%C9%99m-beyn%C9%99lxalq-hospital/"}>
              <FaLinkedinIn />
            </Link>
            <p>Linkedin</p>
          </div>
          <div className="linkBox" >
            <Link className='link' to={"https://www.tiktok.com/@melhem.hospital?_t=8neWLi0Nh1M&_r=1"}>
              <AiOutlineTikTok />
            </Link>
            <p>Tik tok</p>
          </div>
          <div className="linkBox">
            <Link className='link' to={"https://www.melhemhospital.com/"}>
              <TbWorld />
            </Link>
            <p>Website</p>
          </div>
          <div className="linkBox">
            <Link className='link' to={"tel:0125267171"}>
              <HiOutlinePhone />
            </Link>
            <p>Phone</p>
          </div>
          <div className="linkBox">
            <Link className='link' to={"https://maps.app.goo.gl/9QmxTU2GJ9tXPm5M6"}>
              <HiOutlineLocationMarker />
            </Link>
            <p>Location</p>
          </div>
          <div className="linkBox">
            <Link className='link' to={"mailto:echovisioncompany@gmail.com"}>
              <TbMail />
            </Link>
            <p>Email</p>
          </div>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App
