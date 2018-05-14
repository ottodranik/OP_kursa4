import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import LoadMore from '../LoadMore'
import styles from './ReposList.css'

class ReposList extends Component {
	componentDidMount() {
		const { repos, onMount } = this.props;
		if(!repos.length) {
			onMount();
		}
	}

	render() {
		const { repos, onRepoClick, onLoadMoreClick, allReposLoaded } = this.props;
		return(<div className={styles.reposList}>
			<div className={styles.reposFlex}>
				{repos.map(repo => 
					<Card
						key={repo.id}
						card={repo}
						onClick={() => onRepoClick(repo.id)}
					/>
				)}
			</div>
			{
				repos.length && !allReposLoaded
					? <LoadMore onClick={() => onLoadMoreClick()} />
					: ''
			}
		</div>)
	}
}

ReposList.propTypes = {
	repos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		ownerLogin: PropTypes.string.isRequired,
		language: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		isFork: PropTypes.bool.isRequired,
		starsCount: PropTypes.number.isRequired,
		lastUpdate: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onRepoClick: PropTypes.func.isRequired,
	onLoadMoreClick: PropTypes.func.isRequired
}

export default ReposList