const network = document.getElementById("network");
const bundle = document.getElementById("bundle");
const total = document.getElementById("total");
const form = document.getElementById("orderForm");
const message = document.getElementById("message");

function calculatePrice() {
    const rates = {
        MTN: 5,
        Telecel: 6,
        AT: 6
    };

    const price = rates[network.value] || 0;
    const gb = Number(bundle.value) || 0;

    total.textContent = (price * gb).toFixed(2);
}

network.addEventListener("change", calculatePrice);
bundle.addEventListener("change", calculatePrice);

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const order = {
        customer: document.getElementById("customer").value,
        phone: document.getElementById("phone").value,
        network: network.value,
        bundle: bundle.value + " GB",
        payment: document.getElementById("payment").value,
        amount: total.textContent
    };

    message.innerHTML = `
        <h3>Order Prepared Successfully!</h3>
        <p>Name: ${order.customer}</p>
        <p>Network: ${order.network}</p>
        <p>Bundle: ${order.bundle}</p>
        <p>Amount: GH₵${order.amount}</p>
        <p>Payment: ${order.payment}</p>
        <p>Please wait for payment instructions.</p>
    `;

    console.log("New order:", order);
});