function required()
{
var username = document.getElementById('username');
var name=document.getElementById('name');
var passwordd =document.getElementById('passwordd');
var password =document.getElementById('password');
var email = document.getElementById('email');
var birthDay=document.getElementById('birth-day');
var error =document.getElementById('error');
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (username.value== "")
{
username.style.borderColor ="red";
error.innerHTML ="لطفاً یک نام کاربری انتخاب کنید";
return false;
} 
else

	if(name.value ==""){
		username.style.borderColor ="white";
		
		name.style.borderColor="red"
		error.innerHTML="لطفاً یک نام نمایشی انتخاب کنید";
		
		return false;
	}
	else
		if(passwordd.value==""){
			username.style.borderColor ="white";
		name.style.borderColor="white";
			passwordd.style.borderColor="red";
			error.innerHTML ="رمز عبور نمیتواند خالی باشد";
			return false;
		}
		else
			if(password.value==""){
				username.style.borderColor ="white";
		name.style.borderColor="white";
			passwordd.style.borderColor="white";
				password.style.borderColor="red";
				error.innerHTML ="رمز عبور را دوباره وارد کنید";
				return false;
			}
			else
				if(email.value==""){
						username.style.borderColor ="white";
		name.style.borderColor="white";
			passwordd.style.borderColor="white";
				password.style.borderColor="white";
					email.style.borderColor="red";
					error.innerHTML ="لطفاً یک پست الکترونیکی وارد کنید";
					return false;
				}
				else
					if(birthDay.value==""){
						username.style.borderColor ="white";
		name.style.borderColor="white";
			passwordd.style.borderColor="white";
				password.style.borderColor="white";
					email.style.borderColor="white";
						birthDay.style.borderColor="red";
						error.innerHTML ="لطفاً تاریخ تولد خود را وارد کنید";
						return false;
					}

					else
						if(passwordd.value.length < 6){
							passwordd.style.borderColor="red";
							error.innerHTML ="رمز عبور باید حداقل 6 کاراکتر باشد";
							username.style.borderColor ="white";
		name.style.borderColor="white";
		
				password.style.borderColor="white";
					email.style.borderColor="white";
						birthDay.style.borderColor="white";
							return false;
						}
						else
							if(password.value != passwordd.value){
								passwordd.style.borderColor="white";
							username.style.borderColor ="white";
		name.style.borderColor="white";
		error.innerHTML ="تکرار رمز عبور صحیح نیست";
				password.style.borderColor="red";
					email.style.borderColor="white";
						birthDay.style.borderColor="white";
						return false;
							}
							else 
								if(!email.value.match(mailformat)){
									username.style.borderColor ="white";
		name.style.borderColor="white";
			passwordd.style.borderColor="white";
				password.style.borderColor="white";
					email.style.borderColor="red";
						birthDay.style.borderColor="white";
									error.innerHTML="لطفاً ایمیل معتبر وارد کنید.";
									return false;
								}
						return true;



}
