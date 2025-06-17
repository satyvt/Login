



const login = document.getELementById('login');


login.addEventListener(click, function () {
    @app.route('login')
    const user = document.querySelector('user')
    if (user.length >= 8 && user.length <= 13) {
        
        for (int count = 0; count < list.length; count++){
            if (list[0][count].equals(user)) {
                const password = document.querySelector('password');
                if (list[1][count].equals(password)) {
                    login()
                    break;
                } else {
                    error = document.getElementById('error');
                    error.textContent = "ERROR!!!! Invalid user or passcode"
                }
                
               
            }
        }
    }


});

const sign_up = document.getElementById('signup')
sign_up.addEventListener(click, function () {
    const name = document.querySelector('name')
    const last_name = document.querySelector('last_name')
    const user_name = document.querySelector('username');
    const password = document.querySelector('passcode')

    if (user_name.length >= 8 && user_name.length <= 13) {
        list[0].add(user_name);
        list[1].add(password);

        sign_up();
    }
})
