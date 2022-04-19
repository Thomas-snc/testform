document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
    console.log(e.target)

    const bdd = ({
        login: "Thomas",
        mdp: 1234
    })

    class Admin {

        /*
        constructeur
        */

        constructor(login, pass) {
            this.login = login;
            this.pass = pass;
        }

        /*
        getter
        */

        get_out() {
            return `${this.login} : ${this.pass}`
        }

        /*
        setter
        */

        set_out() {
            /* if (this.login && this.pass) {
                 console.log(`${this.login} : ${this.pass}`)
             }*/
          
            if (isNaN(this.pass) || this.pass === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Saisir un nombre',
                    footer: '<a href="">Why do I have this issue?</a>'
                })

            }
            else {
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
                console.log(this.pass);
            }
        }
        static msg() {
            console.log("message privé");
        }
    }

    //suite

    let btn = document.querySelector("#btn");
    btn.addEventListener("click", e => {
        e.preventDefault;
        let login = document.getElementsByName("login")[0].value;
        let password = document.getElementsByName("pass")[0].value;
        let new_user_admin = new Admin(login, password);
        console.log(login);
        console.log(password);

        console.log(new_user_admin.get_out());
        new_user_admin.set_out();   
    })



})
