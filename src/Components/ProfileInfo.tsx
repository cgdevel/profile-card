import "../App.css";
import { InfoPagina } from "../Assets/Data/InfoPagina";
import facebook from "../Assets/Images/facebook.svg";
import instagram from "../Assets/Images/instagram.svg";
import linkedin from "../Assets/Images/linkedin.svg";
import mail from "../Assets/Images/sobre.svg";
import twitter from "../Assets/Images/twitter.svg";
import wa from "../Assets/Images/whatsapp.svg";
import youtube from "../Assets/Images/youtube.svg";
import tiktok from "../Assets/Images/tiktok.svg";
import ubicacion from "../Assets/Images/marcador.svg";
import telefono from "../Assets/Images/llamada-telefonica.svg";

export const ProfileInfo = () => {
  {
    const info = InfoPagina;

    return (
      <div className="profile-info">
        <h1>{info.name}</h1>
        <h2>{info.title}</h2>

        <p className="description">{info.description}</p>

        <p>
          <span>
            <img src={ubicacion} alt="ubicación"></img>
            <b>Dirección:</b>
          </span>
          <span>{info.address}</span>
        </p>

        <p>
          <span>
            <img src={telefono} alt="teléfono"></img>
            <b>Télefono:</b>
          </span>
          <span>{info.phone}</span>
        </p>

        <div className="socials">
          <h2>Contáctateme:</h2>
          <div className="socials-icons">
            {info.socials.facebook !== "" && (
              <>
                <a
                  href={info.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="Facebook" />
                </a>
              </>
            )}
            {info.socials.instagram !== "" && (
              <>
                <a
                  href={info.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="Instagram" />
                </a>
              </>
            )}
            {info.socials.linkedin !== "" && (
              <>
                <a
                  href={info.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linked In" />
                </a>
              </>
            )}
            {info.socials.twitter !== "" && (
              <>
                <a
                  href={info.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={twitter} alt="X antes Twitter" />
                </a>
              </>
            )}
            {info.socials.youtube !== "" && (
              <>
                <a
                  href={info.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="Youtube" />
                </a>
              </>
            )}
            {info.socials.tiktok !== "" && (
              <>
                <a
                  href={info.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={tiktok} alt="tiktok" />
                </a>
              </>
            )}
            {info.socials.whatsapp !== "" && (
              <>
                <a
                  href={"https://wa.me/" + info.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={wa} alt="Whatsapp" />
                </a>
              </>
            )}
            {info.socials.email !== "" && (
              <>
                <a
                  href={"mailto:" + info.socials.email}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={mail} alt="Mail" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
};
