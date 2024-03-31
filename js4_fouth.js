async function checkPassword() {
    // передаем введенный пароль
    var enteredPassword = document.getElementById('passwordInput').value; 
    var hashPassword = await sha256(enteredPassword);
    var correctHash = '3920ffb52df35828a1ab9112fba32fcc2c2282dfb0e6b53cd84ef7366b06739a';

    if(hashPassword == correctHash){
        window.location.href = 'fourth_level.html'
    }else{
        alert("Неправильный пароль. Попробуй еще раз");
    }
}

async function sha256(message){
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
}