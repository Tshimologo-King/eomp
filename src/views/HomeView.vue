<template>
  <div id="home">
    <!-- <div class="details">
      <div class="card" id="earn">
        <div class="icon">
          <font-awesome-icon icon="wallet" />
        </div>
        <div class="text">
          <h2>Earn Points</h2>
          <p>
            Earn points for everytime you use your qr code and you are partnered
            with the following providers
          </p>
        </div>
      </div>
      <div class="card" id="track">
        <div class="icon">
          <font-awesome-icon icon="chart-column" />
        </div>
        <div class="text">
          <h2>Track Spending</h2>
          <p>
            Track your spending everytime you pour a litre and how much you pay
            to add to your budget plan.
          </p>
        </div>
      </div>
      <div class="card" id="payments">
        <div class="icon">
          <font-awesome-icon icon="calendar-days" />
        </div>
        <div class="text">
          <h2>Payments</h2>
          <p>
            Set your payment plan so that you can still pour and get to your
            destination.
          </p>
          <p>Set Up Your Account Today.</p>
        </div>
      </div>
    </div> -->
    <div id="homeLanding2">
      <div class="topHalf">
        <h2>FILL UP YOUR TANK,<br>
        EARN AND PAY LATER</h2>
      </div>
      <div class="below">
        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#home {
  background: url(../assets/petrol_station.jpg);
  height: 100vh;
  background-size: contain;
  overflow: hidden !important;
  position: relative;
}

.details {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  left: 25%;
}
.details .card {
  display: flex;
  width: 250px;
  flex-direction: column;
  height: 250px;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0);
  border-radius: 16px;
  box-shadow: -10px 8px 5px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(11.5px);
  -webkit-backdrop-filter: blur(11.5px);
  border: 0.1px solid rgba(255, 255, 255, 0.19);
  margin: 15px;
  padding: 15px;
  color: white;
}

.details .card:hover {
  transform: scale(1.1);
}

.details .card .icon {
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-bottom: 1rem;
  color: white;
}
.details .card .text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
}
.details .card .text h2 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;
}

#homeLanding2 {
  display: flex;
  justify-content: center;
  align-content: center;
  position: absolute;
  left: 25%;
  top: 50%;
}


.topHalf {
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 350px;
  font-size: 45px;
  text-align: left;
  margin-left: 20px;
}
.below{
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 350px;
  font-size: 45px;
  text-align: left;
  margin-left: 20px;
}

.topHalf h2 {
  color: white;
  text-shadow: -1px -1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0),
    -1px 1px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0);
}
.below h2{
  color: white;
  text-shadow: -1px -1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0),
    -1px 1px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0);
}

</style>
