const nameInput = document.getElementById ("nameInput");
const emailInput = document.getElementById ("emailInput");
const passwordInput = document.getElementById ("passwordInput");
const adressInput = document.getElementById ("addressInput");
const phoneInput = document.getElementById ("phoneInput");
const ageInput = document.getElementById ("ageInput");

async function signup() {
    const apiUrl = `https://tatbeqak.site/apps/tatbeqey/apps/projects/test_api/signup?name=${nameInput.value}&email=${emailInput.value}&password=${passwordInput.value}&address=${adressInput.value}&phone=${phoneInput.value}&age=${ageInput.value}`;

    const responce = await fetch (apiUrl);
    const data = await responce.json();
    const status = data.status;

    if (status == true) {
        alert ("Signed up successfully");
        location.reload();
    } else {
        alert("sign up failed");
    }
}
