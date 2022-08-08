<template>

  <div id="about">
    <div class="container">
      <div class="overlayedPic">
        <img src="https://picsum.photos/1504/500?random=1">
      </div>
      <div class="row">
        <div class="col-lg-4 card" id="earn">
          <div class="icon">
            <font-awesome-icon icon="wallet" />
          </div>
          <div class="text">
            <h2>Earn Points</h2>
            <p>Earn points for everytime you use your qr code and you are partnered with the following providers</p>
          </div>
        </div>
        <div class="col-lg-4 card" id="track">
          <div class="icon">
            <font-awesome-icon icon="chart-column" />
          </div>
          <div class="text">
            <h2>Track Spending</h2>
            <p>Track your spending everytime you pour a litre and how much you pay to add to your budget plan.</p>
          </div>
        </div>
        <div class="col-lg-4 card" id="payments">
          <div class="icon">
            <font-awesome-icon icon="calendar-days" />
          </div>
          <div class="text">
            <h2>Payments</h2>
            <p>Don't Stress about about payments. Set your payment plan so that you can still pour and get to your destination.</p>
            <p>Set Up Your Account Today.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#about {
  min-height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-content: center;
  background: rgb(2,0,36);
  background: linear-gradient(227deg, rgba(2,0,36,1) 0%, rgba(41,186,126,1) 35%, rgba(211,14,210,1) 70%, rgba(0,212,255,1) 100%);
}
.container{
  overflow: hidden;
}
/* .container img{
  mix-blend-mode: ;
} */
.container h1{
  background: transparent;
  color: white;
}
.row{
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px;
  flex-wrap: wrap;
}

.card{
  height: 350px;
  max-width: 300px;
  min-width: 250px;
  border: 1px solid black;
  border-radius: 20px;
  margin-inline: 60px;
  margin-top: -100px;
  margin-bottom: 20px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  /* From https://css.glass */
  background: rgba(189, 189, 189, 0.14);
  border-radius: 16px;
  box-shadow: 10px 14px 30px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);
  border: 1px solid rgba(137, 137, 137, 0.367);
}

.icon{
  font-size: 35px;
  font-weight: 500;
  padding: 20px;
  color: yellow;
  margin-top: -50px;
  margin-inline: auto;
}
.text{
  padding: 20px;
  margin-inline: auto;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  color: yellow;
  font-size: 16px;
  text-align: center;
}
.text h2{
  margin-top: -20px;
  margin-bottom: 2rem;
  color: black;
  text-shadow: -1px -1px 0 rgb(255, 255, 0), 1px -1px 0 rgb(255, 255, 255), -1px 1px 0 rgb(255, 255, 255), 1px 1px 0 rgb(255, 255, 255);
}


</style>

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
