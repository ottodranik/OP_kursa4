import { OFFSET_STEP, LOAD_MORE_STEP } from '../config'

const apiUrl = 'https://api.github.com/';
const headers = new Headers();
headers.set("Accept", "application/vnd.github.mercy-preview+json");

function fetchReposRequest(userName, isNewUser, offset) {
	const page = isNewUser ? 1 : offset / OFFSET_STEP + 1;
	const userUrl = 'users/'+userName+'/repos?per_page='+OFFSET_STEP+'&page='+page;
  return fetch(
		apiUrl+userUrl, {
			method: 'GET',
			cache: 'default',
			headers
		});
}

export const fetchRepos = (userName, isNewUser, offset) => {
	return fetchReposRequest(userName, isNewUser, offset).then(
		(response) => {
			switch(response.status) {
				case 200:
					return response.json().then((json) => { 
						return json.map((item) => ({
							id: item.id,
							name: item.name || 'n/a',
							ownerLogin: item.owner.login || 'n/a',
							description: item.description || 'n/a',
							issuesCount: item.open_issues_count || 0,
							hasOpenIssues: !!item.open_issues_count,
							hasTopics: !!item.topics.length,
							isFork: !!item.fork,
							starsCount: item.stargazers_count || 0,
							lastUpdate: item.updated_at || 'n/a',
							language: item.language || 'n/a'
						}))
					});
				case 404:
					return ["No users with that name found."]
				default:
					return [];
			}
		}
	)
}