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
                <div>
                    <input type="button" :onclick="toPrice" v-model="litres">
                </div>
            </form>
        </div>
    </div>
</template>