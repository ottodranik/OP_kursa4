import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.css'

const Card = ({ onClick, card }) => (
	<div className={styles.card} onClick={onClick}>
		<div className={styles.cardData}>
			<span className={styles.cardLabel}>Name:</span><span className={styles.cardText}>{card.name}</span>
		</div>
		<div className={styles.cardData}>
			<span className={styles.cardLabel}>Lang:</span><span className={styles.cardText}>{card.language}</span>
		</div>
		<div className={styles.cardData}>
			<span className={styles.cardLabel}>Stars count:</span><span className={styles.cardText}>{card.starsCount}</span>
		</div>
		<div className={styles.cardData}>
			<span className={styles.cardLabel}>Issue count:</span><span className={styles.cardText}>{card.issuesCount}</span>
		</div>
		<div className={styles.cardData}>
			<span className={styles.cardLabel}>Updated at:</span><span className={styles.cardText}>{card.lastUpdate}</span>
		</div>
		<div className={styles.cardData}>
			<span className={styles.cardLabel}>Is fork:</span><span className={styles.cardText}>{card.isFork ? 'Yes' : 'No'}</span>
		</div>
		<div className={styles.cardData}>
			<span className={styles.cardLabel}>Owner:</span><span className={styles.cardText}>{card.ownerLogin}</span>
		</div>
		<div className={styles.cardData}>
			<span className={styles.cardLabel}>Description:</span><span className={styles.cardText}>{card.description}</span>
		</div>
	</div>
)

Card.PropTypes = {
	onClick: PropTypes.func.isRequired,
	card: PropTypes.shape.isRequired
}

export default Card