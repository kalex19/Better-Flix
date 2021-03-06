import React from 'react';
import { sendFavorite, deleteFavorite, fetchUserFavorites } from '../../utils/API/ApiFetch';
import { setFavorites, chooseMovie } from '../../actions';
import { Link } from 'react-router-dom';
import filledHeart from '../../images/like-filled.png';
import emptyHeart from '../../images/like-empty.png';
import moreDetails from '../../images/clapperboard.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './FavButton.scss';

export const FavButton = ({ movieInfo, user, chooseSpecificMovie, setFavorites }) => {
	const { title, movie_id, isFavorited } = movieInfo;
	const { user_id } = user;

	const toggleFav = async movie => {
		if (user.id) {
			const favorites = await fetchUserFavorites(user.id);
			setFavorites(favorites.data);
			console.log(user.favorites);
			const foundMovie = user.favorites.find(favorite => favorite.movie_id === movie_id);
			if (foundMovie) {
				deleteFavorite(user.id, movie_id);
			} else if (!foundMovie && user.id) {
				const favMovie = {
					...movieInfo,
					user_id
				};
				sendFavorite(favMovie);
				const favorites = await fetchUserFavorites(user.id);
				setFavorites(favorites.data);
			}
		} else {
			alert('Please log in to favorite a movie');
		}
	};

	return (
		<div className="movie-buttons">
			<Link to={`/movies/${title}`}>
				<button onClick={() => chooseSpecificMovie(title, movie_id)}>
					<img alt="more details" src={moreDetails} />
				</button>
			</Link>

			<button onClick={() => toggleFav(movie_id)}>
				<img className="favorite__img-button" alt="favorite this movie" src={isFavorited ? emptyHeart:  filledHeart} />
			</button>
		</div>
	);
};

export const mapStateToProps = state => ({
	user: state.user,
	specificMovie: state.specificMovie
});

export const mapDispatchToProps = dispatch => ({
	chooseSpecificMovie: (title, movie_id) => dispatch(chooseMovie(title, movie_id)),
	setFavorites: favorites => dispatch(setFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(FavButton);

FavButton.propTypes = {
	user: PropTypes.object,
	specificMovie: PropTypes.object,
	setFavorites: PropTypes.func,
	chooseSpecificMovie: PropTypes.func
};
