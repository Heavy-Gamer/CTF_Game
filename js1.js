async function checkPassword() {
    // передаем введенный пароль
    var enteredPassword = document.getElementById('passwordInput').value; 
    var hashPassword = await sha256(enteredPassword);
    var correctHash = '3969ad4f85d7ff8ac30f0fb299372170960a1196235ce4e6ae060dee8cef8cac';

    if(hashPassword == correctHash){
        window.location.href = 'second_level.html'
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