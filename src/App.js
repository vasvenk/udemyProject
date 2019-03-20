import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from "./InputBox";

const blogInput = document.querySelector("#BlogField");

class App extends Component {

    static verifyName(name) {
        if (name.length < 3 || name.length > 30) {
            return false;
        }
        for (var i=0; i<name.length; i++) {
            if (!isNaN(name.charAt(i))) {
                return false;
            }
        }
        return true;
    }

    static verifyEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    static verifyPhone(phone) {
        for (var i=0; i < phone.length; i++) {
            if (isNaN(phone.charAt(i))) {
                return false;
            }
        }
        if (phone.length!=10 || phone.charAt(0)==='0' || phone.charAt(0)===1) {
            return false;
        }
        return true;
    }

    static verifyBlog(blog) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
            '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return pattern.test(blog);
    }

    submit() {
        var name = document.querySelector("#NameField").value;
        var email = document.querySelector("#EmailField").value;
        var phone = document.querySelector("#PhoneField").value;
        var blogName = document.querySelector("#BlogField").value;
        if (App.verifyBlog(blogName) && App.verifyPhone(phone) && App.verifyEmail(email) && App.verifyName(name)) {
            window.alert("YES");
        } else {
            window.alert("NO");
        }
        return null;
    };
    render() {
        return (
            <body>
                <div className="signup-form">
                <div>
                    <InputBox label={"Name"} id={"NameField"} placeholder={"Enter your name"}/>
                </div>
                <div>
                    <InputBox label={"Email"} id={"EmailField"} placeholder={"Enter your email"}/>
                </div>
                <div>
                    <InputBox label={"Phone"} id={"PhoneField"} placeholder={"Enter your phone number"}/>
                </div>
                <div>
                    <InputBox label={"Blog URL"} id={"BlogField"} placeholder={"Enter your blog's URL"}/>
                </div>
                    <button onClick={this.submit} id="submit-button">Submit</button>
                </div>
            </body>
        );
    }
}

export default App;
