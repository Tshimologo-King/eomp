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
        <h2>
           FILL UP YOUR TANK<br />
          EARN AND PAY LATER
        </h2>
      </div>
      <div class="below"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');
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
}


.topHalf {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 35px;
  font-family: 'Roboto Condensed', sans-serif;
}

.topHalf h2 {
  color: white;
  text-shadow: -1px -1px 0 rgb(0, 0, 0), 1px -1px 0 rgb(0, 0, 0),
    -1px 1px 0 rgb(0, 0, 0), 1px 1px 0 rgb(0, 0, 0);
}
</style>
