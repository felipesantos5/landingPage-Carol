import PropTypes from "prop-types";
import aspas from "../../assets/what-they-say/aspas.svg";

export const CardWhat = ({ profileImg, name, profession, description }) => {
  return (
    <div className="cardwhat">
      <div className="cardwhat__header">
        <div className="cardwhat__client-wrapper">
          <img src={profileImg} alt="foto de perfil" className="cardwhat__image" />
          <div className="cardwhat__name-wrapper">
            <h3 className="cardwhat__name">{name}</h3>
            <p className="cardwhat__profession">{profession}</p>
          </div>
        </div>
        <img src={aspas} alt="icone de aspas" className="cardwhat__aspas`" />
      </div>
      <p className="cardwhat__description">{description}</p>
    </div>
  );
};

CardWhat.propTypes = {
  profileImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
