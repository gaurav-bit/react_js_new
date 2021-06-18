import { React } from 'react';
import { useState } from 'react';
import axios from "axios";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPassword] = useState('');
    const [pwd2, setPassword2] = useState('');
    const [emailError, setemailError] = useState('');
    const [nameError, setnameError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [password2Error, setpassword2Error] = useState('');

    var register = (event) => {
        event.preventDefault();
        var emailErr="";
        var nameErr="";
        var passwordErr="";
        var password2Err="";
		var isValid=true;
		var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		// alert(email);
		if(!email){
			isValid=false;
			emailErr ="Email is required";
		}else if(!pattern.test(email)){
			isValid=false;
			emailErr = "Invalid Email Syntax";
		}
		if(!name){
			isValid=false;
			nameErr ="Name is required";
		}
		if(!pwd){
			isValid=false;
			passwordErr = "Password is required";
		}
		if(!pwd2){
			isValid=false;
			password2Err="Confirm Password is required";
		}else if(pwd2!==pwd){
			isValid=false;
			password2Err="Confirm Password should be same as Password";
		}
        setnameError(nameErr)
        setemailError(emailErr)
        setpasswordError(passwordErr)
        setpassword2Error(password2Err)

		if(isValid){
            axios({
                url:process.env.REACT_APP_BASE_URL+"register",
                method:"post",
                data:{name:name,email:email,password:pwd},
            }).then((response)=>{
                  console.log("response from cakes api" , response , response.data);
                  alert(response.data.message);
            },(error)=>{
                console.log("error from cakes api" , error)
            })
		}
        // console.log(name,email,pwd);
       
        // alert("hello");
    }
    return (
        <div className="container" style={{"marginTop":"10px"}}>
            <div className="row">
                <div className="col-md-12">
                <form>
                    <div className="card">
                        <div className="card-header">Register</div>
                        <div className="card-body">
                            <label>Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Enter Your name" value={name} onChange={e => setName(e.target.value)}/>
                            <span className="text-danger">{nameError}</span><br/>
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <span className="text-danger">{emailError}</span><br/>
                            <label>Password</label>
                            <input type="password" className="form-control" name="pwd" placeholder="Enter Your Password" value={pwd} onChange={e => setPassword(e.target.value)}/>
                            <span className="text-danger">{passwordError}</span><br/>
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" name="pwd2" placeholder="Confirm Your Password" value={pwd2} onChange={e => setPassword2(e.target.value)}/>
                            <span className="text-danger">{password2Error}</span><br/>
                            <br></br>
                            <button onClick={register} className="btn btn-success" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;