async function checkPassword() {
    // передаем введенный пароль
    var enteredPassword = document.getElementById('passwordInput').value; 
    var hashPassword = await sha256(enteredPassword);
    var correctHash = 'e7c5b4a7c84d947e039161b6f1c5c6c62eb4438e0cffa3f2bf41a14691c8ecf4';

    if(hashPassword == correctHash){
        window.location.href = 'the_end.html'
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