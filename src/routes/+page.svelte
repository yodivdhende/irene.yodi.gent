<script lang='ts'>
  import  homeTitleImage from "$lib/assets/home-title.png"
</script>
<main>
  <div class="background">
    <img alt="Irene & Yodi title image" src={homeTitleImage} />
  </div>
  <div class="title-placeholder"></div>
  <div class="images">
    <img alt="test image" src="https://picsum.photos/300/400"/>
    <img alt="test image" src="https://picsum.photos/300/400"/>
    <img alt="test image" src="https://picsum.photos/300/400"/>
    <img alt="test image" src="https://picsum.photos/300/400"/>
  </div>
</main>
<style>
  main{
    display: flex;
    flex-direction: column;
  } 
  .background {
    position:sticky;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    background-color: hsl(42,15,95)

  }
  .title-placeholder {
    width: calc(100vw - 1px);
    height: calc(100vh - 1px);
    overflow: hidden;
    border: 1px solid red;
  }

  .images {
    display: flex;
    height: 100vh;
    background-color: aliceblue;
  }
</style>