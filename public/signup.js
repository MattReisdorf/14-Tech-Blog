const router = require("../controllers/api/userRoutes");
const { User } = require("../models");

const signupFormHandler = async(event) => {
    event.preventdefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const passConfirm = document.querySelector('#passCon-signup').value.trim();
    const userName = document.querySelector('#user-signup').value.trim();

    const passTrue = passtrue(password, passConfirm);

    if (email && password && passTrue && userName) {
        router.post('/login', async (req, res) => {
            try {
                const newuserData = await User.create({
                    name: userName,
                    email: email,
                    password: password,
                })

                if(newuserData.ok) {
                    document.location.replace('/');
                    alert('Signup successful!');
                } else {
                    alert('Signup failed, please try again.');
                }
            }
            catch (err) {
                res.status(400).json(err);
            }
        })
    }

}

const passtrue = () => {
    if (input1 === input2){
        alert('Passwords match!')
        return true;
    } else if (input1 != input2) {
        alert('Passwords do not match, please try again.');
        return false;
    }
}


document
    .querySelector('#signUp')
    .addEventListener('#signup-submit', signupFormHandler);