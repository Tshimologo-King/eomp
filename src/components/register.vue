<template>
    <form type="submit">
        <h2>User Information</h2>
        <label for="title">Title</label>
        <select name="title" id="title">
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
            <option value="Sr">Sr</option>
        </select>
        <label for="fullname"> Full Name</label>
        <input type="text" placeholder="Name & Surname">
        <label for="email">Email Address</label>
        <input type="text" placeholder="Email Address">
        <label for="password">Password</label>
        <input type="text" placeholder="Password">
        <h2>Contact Information</h2>
        <label for="address">Address</label>
        <input type="text" placeholder="Address">
        <label for="city">City</label>
        <input type="text" placeholder="City">
        <label for="country">Country</label>
        <input type="text" placeholder="Country">
        <label for="postalCode">Postal Code</label>
        <input type="text" placeholder="Postal Code">
        <button type="submit">Submit</button>
    </form>
</template>