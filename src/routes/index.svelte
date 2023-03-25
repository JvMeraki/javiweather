<script>
	import { getWeatherFrom } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';

	const weatherContent = getWeatherFrom();
</script>

{#await weatherContent then weather}
	<section>
		<h1>{weather.locationName}</h1>
		<h2>{weather.temperature}º</h2>
		<h3>{weather.conditionText}</h3>
		<WeatherIcon text={weather.conditionText} icon={weather.conditionIcon} />
	</section>
	<WeatherFooter />
{/await}

<style>
	section {
		padding: 25px;
	}

	h1 {
		font-weight: 300;
		color: #333;
		text-transform: uppercase;
		padding: 16px 0 0 0;
	}

	h2 {
		font-weight: 300;
		font-size: 120px;
		color: #333;
		text-transform: uppercase;
		padding: 0;
	}

	h3 {
		font-weight: 700;
		transform: rotate(-90deg);
		position: absolute;
		top: 65px;
		right: -20px;
	}
</style>
