import PropTypes from 'prop-types';

export const Card = ({ title, description, image, imageAlt }) => {
  return (
    <div className='card'>
      <h3 className='card__title'>{title}</h3>
      <p className='card__description'>{description}</p>
      <div className='card__wrapper-img'>
        <img src={image} alt={imageAlt} />
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};