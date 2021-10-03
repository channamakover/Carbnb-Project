import React,{useState} from "react";
import AccountsList from "../../Data/AccountsList.json";
import './LogIn.css'
//login form
function LogIn(props) {
    const emailRf = React.useRef();
 const pswdRf = React.useRef();
 const [errorMsg,setErrorMsg] =useState("");
 const handlSubmit=(e)=>{
     e.preventDefault();
     //extract the account from accounts list by email
    const userDetails=AccountsList.accountsList.filter(account=>account.email===emailRf.current.value)
    const userPassword=userDetails[0].psw;
    const userId=userDetails[0].id;
    //checks if both password are matching
    if(userPassword!==pswdRf.current.value){
        setErrorMsg("לא מצאנו אותך:( כנראה אחד הפרטים שגויים ")
    }
    else{
        props.setIsLogged(true);
        props.setUserName(userDetails[0].name)
        console.log(userId)
        window.history.go(-2);
    }


 }
 

  return (
    <div className="wrapper">
      <form className="form-wrapper" >
        <div className="email">
          <label htmlFor="email">דוא"ל</label>
          <input type="email" name="email" noValidate ref={emailRf} />

          {/* <span className="error">{emailError}</span> */}
        </div>
        <div className="password">
          <label htmlFor="password">סיסמא</label>
          <input type="password" name="password" noValidate ref={pswdRf} />
          {/* <div className="error">{pswdError}</div> */}
        </div>
        <label>{errorMsg}</label>
        <div className='submit'>
              <button onClick={(e)=>{handlSubmit(e)}}>התחבר</button>
            </div>
      </form>
    </div>
  );
}

export default LogIn;
