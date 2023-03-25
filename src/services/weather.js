export async function getWeatherFrom(query = 'Hong Kong') {
	return fetch(`/api/get-weather?q=${query}`).then((res) => res.json());
}
