let time = new Date(1524412296 * 1000);
//Init github
const github = new GitHub;

//Init UI
const ui = new UI;

//Search user
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text
  const userText = e.target.value;

  if(userText !== '') {
    //make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found') {
          //show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    //clear profile
    ui.clearProfile();
  }
})