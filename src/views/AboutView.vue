<template>
<navbar/>
  <div id="about">
    <div class="container">
          <div id="image">
            <img src="https://picsum.photos/800/900/?blur=2" alt="">
          </div>
          <div class="content">
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
          </div>
        </div>
      </div>
</template>
<script>
import navbarVue from "@/components/navbar.vue";

export default {
  components: { navbarVue },
};
</script>
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
  overflow: hidden;
  /* background: linear-gradient(227deg, rgba(2,0,36,1) 0%, rgba(41,186,126,1) 35%, rgba(211,14,210,1) 70%, rgba(0,212,255,1) 100%); */
}
.container{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow: hidden;
}

.content{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  width: 100%;
  row-gap: 3rem;
  margin-inline: 50px;
}
.content .card .icon{
  display: flex;
  justify-content: center;
  align-content: flex-start;
  margin-bottom: 1rem;
  font-size: 25px;
}

.card{
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  padding: 20px;
}
.text{
  font-size: 20px;
  margin-bottom: 1rem;
  margin-left: 1rem;
}
.text h2{
  margin-bottom: 1rem;
}
</style>

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
