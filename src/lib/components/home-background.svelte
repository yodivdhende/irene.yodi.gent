<script lang="ts">
	import homeTitleSpot from '$lib/assets/home-images/home-title-spots.png';
	import homeTitleHeart from '$lib/assets/home-images/home-title-heart.png';
	import homeTitleText from '$lib/assets/home-images/home-title-text.png';
</script>

	<div class="background">
    <div class="images">
      <img alt="ink spots" src={homeTitleSpot} class="spots" />
      <img alt="heart" src={homeTitleHeart} class="heart" />
      <img alt="Irene & Yodi title" src={homeTitleText} class="title" />
    </div>
	<div class="text">
		<p>Bedankt aan iedereen om aanwezig te zijn op de mooiste dag van ons leven.</p>
		<p>
			als je zelf nog foto's hebt, gelieve door te sturen naar:<br />
			<a href="mailto:yodi.vandenhende@gmail.com">yodi.vandenhende@gmail.com</a>
		</p>
	</div>
	</div>

<style>
	.background {
		position: fixed;
		top: 0;
		z-index: -1;
		width: 100vw;
		height: 100vh;
    display: flex;
    flex-direction: column;
		overflow: hidden;
		background-color: #fffbeb;
	}

  .images {
    position: relative;
    height: 100%;
  }

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 80%;
		transform: translate(-50%, -50%);
	}

	.spots {
		opacity: 0;
		animation:
			fadeIn 0.5s ease-in forwards,
			test 1s ease-in 2s forwards;
	}

	.heart {
		opacity: 0;
		animation:
			fadeIn 0.7s ease-in 0.4s forwards,
			test 1s ease-in 2s forwards;
	}

	.title {
		opacity: 0;
		animation:
			fadeIn 1s ease-in 1s forwards,
			test 1s ease-in 2s forwards;
	}

	@keyframes fadeIn {
		100% {
			opacity: 100%;
		}
	}

	@keyframes test {
		100% {
			width: 60%;
			top: 0%;
			transform: translate(-50%, 0%);
		}
	}
  

	.text {
    height: 100%;
    padding: 1em;
		font-size: 2em;
		text-align: center;
		font-family: Arial, Helvetica, sans-serif;
		color: #3b5728;
    opacity: 0;
    animation: fadeIn 0.5s ease-in 3s forwards;
	}
   
  .text p {
    padding: 0.5em 0;
  }



	@media screen and (max-width: 650px) {
    @keyframes test {
      100% {
        width: 80%;
        top: 0%;
        transform: translate(-50%, 0%);
      }
    }
  }
</style>
