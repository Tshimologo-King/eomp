<template>
  <div id="userProfile">
    <div class="container">
      <div class="row">
        <div id="dashboard">
          <form id="register">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              id="fullname"
            />
            <label for="email">Email</label>
            <input type="text" name="email" placeholder="Email..." id="email" />
            <label for="userType">userType</label>
            <input
              type="text"
              name="user_type"
              placeholder="userType?"
              id="userType"
            />
            <label for="phone">Phone Number</label>
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              id="phoneNumber"
            />
            <label for="country">Country of Residence</label>
            <input
              type="text"
              name="country"
              placeholder="Country of Residence"
              id="country"
            />
            <label for="billing_address">Street Address</label>
            <input
              type="text"
              name="billing_address"
              placeholder="Street Address"
              id="str_Address"
            />
            <label for="default_address">Street Address 2</label>
            <input
              type="text"
              name="default_shipping_address"
              placeholder="Street Address 2"
              id="scnd_str_Address"
            />
            <button type="submit">Submit</button>
          </form>
          <div id="bankingDetails">
            <div v-if="showModal">
              <div class="backdrop">
                <div class="modal-content">
                  <form id="bank">
                    <label for="bank card Number">bank no.</label>
                    <input type="text" placeholder="bank" />
                    <label for="bank name">bank name</label>
                    <input type="text" placeholder="bank" />
                    <label for="branch code">branch code</label>
                    <input type="text" placeholder="bank" />
                    <label for="account type">bank account type</label>
                    <input type="text" placeholder="bank" />
                    <button type="submit" class="addNewBankDets">Add</button>
                  </form>
                  <button class="closeButton" @click="toggleModal">
                    <div class="icon">
                      <font-awesome-icon icon="xmark" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <button class="openButton" @click="toggleModal">
              Add Banking Details
            </button>
          </div>
          <div id="qrDetails">
            <div v-if="show_Qr_Modal">
              <div class="backdrop">
                <div class="qr-modal-content">
                  <img src="../assets/QR.png" alt="" />
                  <button class="closeButton" @click="qr_toggleModal">
                    <div class="icon">
                      <font-awesome-icon icon="xmark" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <button class="openButton" @click="qr_toggleModal">
              Display QR Code
            </button>
          </div>
        </div>
        <div id="profile">
          <div class="userPic">
            <img src="https://picsum.photos/seed/picsum/50/50" alt="" />
          </div>
          <div class="content">
            <h2>Amount Spent</h2>
            <div class="card">
              <div class="text">
                <p>
                  Earn points for everytime you use your qr code and you are
                  partnered with the following providers
                </p>
              </div>
            </div>
          </div>
          <div class="content">
            <h2>Amount Poured</h2>
            <div class="card">
              <div class="text">
                <p>
                  Earn points for everytime you use your qr code and you are
                  partnered with the following providers
                </p>
              </div>
            </div>
          </div>
          <div class="content">
            <h2>Amount Payable</h2>
            <div class="card">
              <div class="text">
                <p>
                  Earn points for everytime you use your qr code and you are
                  partnered with the following providers
                </p>
              </div>
            </div>
          </div>
          <div class="content">
            <h2>Points Earned</h2>
            <div class="card">
              <div class="text">
                <p>
                  Earn points for everytime you use your qr code and you are
                  partnered with the following providers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      show_Qr_Modal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    qr_toggleModal() {
      this.show_Qr_Modal = !this.show_Qr_Modal;
    },
  },
};
</script>
<style scoped>
#userProfile {
  height: 100vh;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  padding: 30px;
}
.container {
  padding: 20px;
  margin: 5px;
}

#dashboard {
  display: flex;
  width: 100%;
}

#register {
  display: flex;
  flex-direction: column;
  width: 50%;
  position: absolute;
  top: 30%;
  left: 5%;
  border: 1px solid black;
  padding: 20px;
}

#bankingDetails {
  width: 100%;
  position: absolute;
  bottom: -12%;
  display: flex;
  left: -20%;
  justify-content: center;
}
#qrDetails {
  width: 100%;
  position: absolute;
  bottom: -18%;
  display: flex;
  left: -20%;
  justify-content: center;
}
.backdrop {
  top: 15%;
  left: 30%;
  position: fixed;
  background: transparent;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.modal-content {
  background-color: rgb(0, 0, 0);
  padding: 50px;
  height: 450px;
  width: 450px;
  border-radius: 25px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.qr-modal-content {
  background-color: rgb(0, 0, 0);
  padding: 50px;
  height: 500px;
  width: 500px;
  border-radius: 25px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.qr-modal-content img {
  width: 100%;
  height: 100%;
}
.closeButton {
  padding: 0;
  width: 5%;
  margin-top: 1rem;
  background: red;
  margin-inline: auto;
}
.closeButton .icon {
  color: white;
}
.addNewBankDets {
  width: 50%;
  margin-inline: auto;
  margin-top: 1rem;
}

#bankingDetails input {
  padding: 5px;
  margin-bottom: 5px;
}
#bankingDetails label {
  font-size: 16px;
  margin-bottom: 5px;
  padding: 5px;
  color: aliceblue;
}

#bank {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  width: 200px;
  background: rgba(0, 0, 0, 0.499);
  border-radius: 16px;
  box-shadow: 10px 14px 30px rgba(255, 255, 255, 0.194);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);
  border: 1px solid rgba(255, 255, 255, 0.576);
  margin: 5px;
}
#profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
  height: 100%;
  margin-top: -70px;
  position: absolute;
  right: 5%;
  top: 25%;
}
#profile .userPic img {
  position: relative;
  border-radius: 100%;
  aspect-ratio: 1;
  margin-right: 2rem;
}

.userPic {
  margin-bottom: 0.1rem;
  margin-right: 3.5rem;
}

.petrolSpending,
.petrolPoured,
.amountOwing {
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
