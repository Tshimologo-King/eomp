<template>
  <div id="userProfile">
    <h3>THIS IS THE USER PROFILE SECT</h3>
    <div class="container">
        <div id="formSect" class="grid">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad deserunt fuga in, doloribus optio, dolorum eum dolorem debitis ducimus iusto maiores sint id illum! Eaque deserunt nemo cum, molestias non labore aspernatur id molestiae omnis odit illo aperiam quo tempora fugit quas, blanditiis similique alias animi. Iusto, quos quae!
        </div>
        <div id="userCard" class="grid">
          <div class="card">userPic
            <img src="https://picsum.photos/100?random=1" style="border-radius: 50%; height: 50px; width: 50px; margin-inline: auto;">
          </div>
          <div class="card">
            <div class="petrolSpending">
              <h4>Amount Of Cash Spent</h4>
              <h6>R:600.00</h6>
            </div>
          </div>
          <div class="card">
            <div class="petrolPoured">
              <h4>Amount Of Cash Spent</h4>
              <h6>R:600.00</h6>
            </div>
          </div>
          <div class="card">
            <div class="amountOwing">
              <h4>Amount Owing</h4>
              <h6>R:600.00</h6>
            </div>
          </div>
        </div>
        <div id="barcodeSect" class="grid">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, magnam.
        </div>
    </div>
  </div>
</template>
<style scoped>


#userProfile{
  height: 100vh;
  background-image: url(../assets/map.jpg) ;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  padding: 30px;
}

.container{
  display: grid;
  grid-template-areas: 'header header header header header header'
  'main main main right right right'
  'footer footer footer right right right';
  padding: 50px;
    /* From https://css.glass */
  /* background: rgba(189, 189, 189, 0.14);
  border-radius: 16px;
  box-shadow: 10px 14px 30px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);
  border: 1px solid rgba(137, 137, 137, 0.367); */
}

.container .grid{
  padding: 5px;
  margin-inline: auto;
}

#formSect{
  width: 65%;
  height: 400px;
  border: 1px solid black;
  border-radius: 25px;
  color: yellow;
  grid-area: main;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  box-shadow: 10px 14px 30px rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
  background: rgba(0, 0, 0, 0.549);
  border-radius: 16px;
  box-shadow: 10px 14px 30px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);
  border: 1px solid rgba(137, 137, 137, 0.367);
}

#userCard{
  width: 250px;
  height: 100%;
  border: 1px solid black;
  border-radius: 25px;
  grid-area: right;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 20px;
  padding: 15px;
  box-shadow: 10px 14px 30px rgba(255, 255, 255, 0.379);
  background: rgba(0, 0, 0, 0.549);
}

#barcodeSect{
  width: 55%;
  height: 100px;
  border: 1px solid black;
  border-radius: 100px;
  grid-area: footer;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 14px 30px rgba(0, 0, 0, 0.6);
}

.card{
  display: flex;
  flex-direction: column;
}

.petrolSpending, .petrolPoured, .amountOwing{
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 10px 14px 30px rgba(0, 0, 0, 0.6);
  background-color: white;
  color: white;
    /* From https://css.glass */
  background: rgba(0, 0, 0, 0.499);
  border-radius: 16px;
  box-shadow: 10px 14px 30px rgba(208, 209, 209, 0.194);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);
  border: 1px solid rgba(255, 255, 255, 0.576);
}
</style>
