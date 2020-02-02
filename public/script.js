
$(function(){

/*Cookies will be checked for active sessions. Request being send to login.js*/
    $.get('/login/check',function(user){
        let ul= $('.side .sidebar ul');
        if(!user){
            ul.empty();
            let ul_html= `
            <li><a href="/login"><i class="fas fa-sign-in-alt"></i>Login</a></li>
            <li><a href="/signup"><i class="fas fa-user-plus"></i>Signup</a></li>
            <li><a href="https://algobook-io.github.io/Frontend-plugins/404_Error_Page/"><i class="fas fa-bullhorn"></i>Notifications</a></li>
            <li><a href="https://github.com/AlgoBook-io"><i class="fab fa-github"></i>Contribute</a></li>
            <li><a href="https://algobook-io.github.io/Frontend-plugins/404_Error_Page/"><i class="fas fa-sliders-h"></i>Services</a></li>
            <li><a href="https://algobook-io.github.io/Frontend-plugins/404_Error_Page/"><i class="far fa-envelope"></i>Contact</a></li>
            `    
            ul.append(ul_html);
        
        } else {
            ul.empty();
            let ul_html= `
            <li><a>H! ${user.username}</a></li>
            <li><a href="/logout"><i class="fas fa-sign-out-alt"></i>Logout</a></li>
            <li><a href="https://algobook-io.github.io/Frontend-plugins/404_Error_Page/"><i class="fas fa-bullhorn"></i>Notifications</a></li>
            <li><a href="https://github.com/AlgoBook-io"><i class="fab fa-github"></i>Contribute</a></li>
            <li><a href="https://algobook-io.github.io/Frontend-plugins/404_Error_Page/"><i class="fas fa-sliders-h"></i>Services</a></li>
            <li><a href="https://algobook-io.github.io/Frontend-plugins/404_Error_Page/"><i class="far fa-envelope"></i>Contact</a></li>
            `

            ul.append(ul_html);
        }
    })
})