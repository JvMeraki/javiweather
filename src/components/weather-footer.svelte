<script>
	import { getWeatherFrom } from '../services/weather.js';
	const weatherContent = getWeatherFrom();
</script>


{#await weatherContent then weather}
	<footer>
		<div>
			<span> {weather.humidity} %</span>
			<strong> Humidity </strong>
		</div>

		<div>
			<span> {weather.windSpeed} km/h </span>
			<strong> Windspeed </strong>
		</div>

		<div>
			<span> {weather.feelsLike}°</span>
			<strong> Feels like </strong>
		</div>
	</footer>
{/await}

<style>
	footer {
		border: 2px solid #fff;
		padding: 12px 32px;
		width: 80%;
		margin: 0 auto;
		border-radius: 10px;
		display: flex;
		text-align: center;
		justify-content: space-evenly;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 32px;
	}

	span {
		color: #bcbcbc;
		display: block;
		font-weight: 600;
		font-size: 14px;
	}

	strong {
		color: #d4d4d4;
		font-size: 14px;
		font-weight: 500;
	}
</style>
