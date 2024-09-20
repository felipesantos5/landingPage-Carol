import PropTypes from 'prop-types';

export const RoadMapCard = ({ number, title, descrition }) => {
  return (
    <div className='roadmapcard'>
      <h3 className='roadmapcard__number'>{number}</h3>
      <h4 className='roadmapcard__title'>{title}</h4>
      <p className='roadmapcard__description'>{descrition}</p>
    </div>
  )
}

RoadMapCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descrition: PropTypes.string.isRequired,
};