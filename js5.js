async function checkPassword() {
    // передаем введенный пароль
    var enteredPassword = document.getElementById('passwordInput').value; 
    var hashPassword = await sha256(enteredPassword);
    var correctHash = '3907e59c69d8ee5832bbe0471c2c664ab9c91f3829d95dc6dd9ceae3dfa309dc';

    if(hashPassword == correctHash){
        window.location.href = 'sixth_level.html'
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