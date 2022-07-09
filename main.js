function addUser()
{
   window.location = "sign_in.html"
   user_name = document.getElementById("user_name").value
   localStorage.setItem("user_name",user_name)
   window.location ="Choice.html"
}