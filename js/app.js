var data = require('./data.js');
var $ = require('jquery');

class View {

    showUser() {
       $('.profile-picture').append('<img src='+ this.user.pictureUrl+' alt="" />');
        $('.show-user').text(this.user.name);


    }

    showBirthday(){


      let userData= this.user.friendList;


      for( var i=0; i<userData.length; i++){

        let email=userData[i];

        let birthdayProfile= '<li><div class="birthday-person">'+'<img src='+data.users[email].pictureUrl+'>'+'<h2>'+data.users[email].name+'</h2>'+'</div></li>';

           $('.birthdays ul').append(birthdayProfile);


      }



  // for each email in userData , append <li> userData[email].name</li>
  //  $.each(userData, function(index, value){
  //    console.log(value.name);
   //
  //       //  $('.birthdays ul').append('<li>'+  +'</li>');
  //  });

    }



    login() {

        let email= $('#email-input').val();
        let password= $('#password-input').val();
        let userData= data.users;



        if ( !userData[email] ||  password != data.users[email].password ){

             alert('wrong passoword or user mate!');
             return;
        }

        this.user = new User(data.users[email].name, data.users[email].email,data.users[email].pictureUrl,data.users[email].friendList);

            this.showUser();

            this.showBirthday();

        $('.sign-in').fadeOut(500, function() {

            $('.sign-in').hide();
            $('.side-bar ').fadeIn(500, function() {
                $('.side-bar').show();

            });

            $('.side-bar ').fadeIn(500, function() {
                $('.birthdays').show();
            });


        });

    }

}



class User {

    constructor(name, email, pictureUrl,friendList) {

        this.name = name;
        this.email = email;
        this.pictureUrl= pictureUrl;
        this.friendList=friendList;

    }

}

//
// var newUser = new User(data.users[0].name, data.users[0].email);


$(document).ready(function() {

  let appView= new View();

    $('.welcomer h2').click(function() {
        console.log('hello!');
        $('.welcomer').fadeOut(500, function() {
            $('.welcomer').hide();
            $('.sign-in').fadeIn(500, function() {
                $('.sign-in').show();
            });
        });
    });


    $('#facebook-login-button').click(function() {
        console.log('clicked!');
        appView.login();

    });

    $('#login-button').click(function() {
       event.preventDefault();
        console.log('clicked!');
        appView.login();



    });


  //   $('#profile-button').click(event => {
  //      appView.showUser();
  //   }
  // );


});
