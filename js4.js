async function checkPassword() {
    // передаем введенный пароль
    var enteredPassword = document.getElementById('passwordInput').value; 
    var hashPassword = await sha256(enteredPassword);
    var correctHash = '4d10ba7fa087ab5534fc8e8da35055c9c16694d31f95d8436989ed5eba8540e8';

    if(hashPassword == correctHash){
        window.location.href = 'fifth_level.html'
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