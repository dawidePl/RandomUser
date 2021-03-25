/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */

import banner from './img/background.jpg';

const Card = ({ data }) => {
    const result = data.results[0];
    
    return(
        <div className='user'>
            <div className='container'>
                <img className='banner' src={ banner } alt='Coult not load banner.' draggable='false' />
                <img className='profilePicture' src={result.picture.large} alt='Could not load profile picture.' draggable='false' />
                <h1>{ result.name.first } { result.name.last }</h1>
                <p className='user-data'>{ result.location.city }, { result.location.country }</p>
                <p className='user-data'>{ result.email }</p>
            </div>
        </div>
    )
}

export default Card;