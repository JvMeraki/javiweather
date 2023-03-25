export async function getWeatherFrom(query = 'Bogotá') {
	return fetch(`/api/get-weather?q=${query}`).then((res) => res.json());
}
