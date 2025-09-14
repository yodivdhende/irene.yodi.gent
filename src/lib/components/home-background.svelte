<script lang="ts">
	import homeTitleSpot from '$lib/assets/home-images/home-title-spots.png';
	import homeTitleHeart from '$lib/assets/home-images/home-title-heart.png';
	import homeTitleText from '$lib/assets/home-images/home-title-text.png';
	import { ChevronDown } from '@lucide/svelte';
</script>

<div class="background">
	<img alt="ink spots" src={homeTitleSpot} class="spots" />
	<img alt="heart" src={homeTitleHeart} class="heart" />
	<img alt="Irene & Yodi title" src={homeTitleText} class="title" />
	<div class="text">
		<p>Bedankt aan iedereen om aanwezig te zijn op de mooiste dag van ons leven.</p>
		<p>
			Als je zelf nog foto's hebt, gelieve door te sturen naar:<br />
			<a href="mailto:yodi.vandenhende@gmail.com">yodi.vandenhende@gmail.com</a>
		</p>
    <ChevronDown color={'#3b5728'} size={72} />
	</div>
</div>

<style>
	.background {
		position: fixed;
		top: 0;
		z-index: -1;
		width: 100vw;
		min-height: 100vh;
		overflow: hidden;
		background-color: #fffbeb;
	}

	img {
		position: absolute;
		width: auto;
		max-width: 100vw;
		height: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.spots {
		opacity: 0;
		animation:
			fadeIn 0.5s ease-in forwards,
			imagesMoveUp 1s ease-in 2s forwards;
	}

	.heart {
		opacity: 0;
		animation:
			fadeIn 0.7s ease-in 0.4s forwards,
			imagesMoveUp 1s ease-in 2s forwards;
	}

	.title {
		opacity: 0;
		animation:
			fadeIn 1s ease-in 1s forwards,
			imagesMoveUp 1s ease-in 2s forwards;
	}

	@keyframes fadeIn {
		100% {
			opacity: 100%;
		}
	}

	@keyframes imagesMoveUp {
		100% {
			height: 70%;
			top: 30%;
		}
	}

	.text {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
		font-size: 2em;
		text-align: center;
		font-family: Arial, Helvetica, sans-serif;
		color: #3b5728;
		opacity: 0;
		animation:
			fadeIn 0.5s ease-in 2.5s forwards,
			textMoveUp 0.5s ease-in 2.5s forwards;
	}

	@keyframes textMoveUp {
		100% {
			top: 80%;
		}
	}

	@media screen and (max-width: 650px) {
		img {
			width: 100%;
      height: auto;
		}

		@keyframes imagesMoveUp {
			100% {
				width: 80%;
				top: 30%;
			}
		}

		.text {
			font-size: 1.5em;
		}

    @keyframes textMoveUp {
      100% {
        top: 60%;
      }
    }
	}
</style>
