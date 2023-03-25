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
		padding: 40px;
		position: relative;
	}

	h1 {
		font-weight: 400;
		color: #bbb3b3;
		text-transform: uppercase;
		padding: 16px 0 0 0;
	}

	h2 {
		font-weight: 300;
		font-size: 120px;
		color: #858282;
		text-transform: uppercase;
		padding: 0;
	}

	h3 {
		font-weight: 700;
		font-size: 30px;
		transform: rotate(-90deg);
		text-align: right;
		position: absolute;
		background: rgb(158,158,158);
		background: linear-gradient(0deg, rgba(158,158,158,1) 0%, rgba(196,196,196,1) 35%, rgba(228,228,228,1) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		top: 30px;
		right: 60px;
		transform-origin: top right;
		white-space: nowrap;
		width: max-content;
	}
</style>
