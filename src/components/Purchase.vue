<template>
    <div class="container">
        <div class="head">
            <h1>FILL UP AND GO</h1>
            <h2>Step 1: Type how litres you will pour</h2>
            <h2>Step 2: Get the price</h2>
            <h2>Step 3: Take your QR Code to any refilling station and let them scan your purchase and drive away with a full tank</h2>
        </div>
        <div class="body">
            <form @submit.prevent="petrolPrice">
                <label for="price">How many litres are you going to pour?</label>
                <input type="number" id="petrol">
                <button type="submit">Submit</button>
                <div>
                    <p>The Price of your fuel is: R</p>
                    <p id="price"></p>
                </div>
            </form>
        </div>
        <div class="qrCode">
            <div v-if="showModal">
                <div class="backdrop">
                <div class="modal-content">
                    <img src="../assets/QR.png" alt="">
                    <button class="closeButton" @click="toggleModal">
                    Close Modal
                    </button>
                </div>
                </div>
            </div>
            <button class="openButton" @click="toggleModal" id="qrCode">
                QR CODE
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            showModal: false,
        }
    },
    methods: {
        toggleModal() {
      this.showModal = !this.showModal;
    }
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.qrCode{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
}

.openButton{
    width: 25%;
    padding: 5px;
}
.backdrop {
  height: 100%;
}
.modal-content {
  background-color: rgb(0, 0, 0);
  padding: 50px;
  height: 500px;
  width: 500px;
  border-radius: 25px;
}
img{
    width: 400px;
    height: 400px;
}
</style>