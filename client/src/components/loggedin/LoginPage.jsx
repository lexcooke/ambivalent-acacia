import React from 'react';
// still need to import CreateUserPage and create referenced props...

export default React.createClass({
  handleLogin: function () {
    const username = this.usernameInput.value.toLowerCase();
    const password= this.passwordInput.value.toLowerCase();

    console.log(username, password);
    $.ajax({
      type: 'POST',
      url: '/api/users/'+username,
      dataType: "json",
      data: {
        username: username,
        password: password
      }
    })
    .success(function(data) {
      console.log(data);
    });
  },

  render: function() {
    return (
      <div>
        <form>
          Username: <input type="text" name="username" ref={(ref) => this.usernameInput = ref} /><br/>
          Password: <input type="password" name="pswd" ref={(ref) => this.passwordInput = ref} /><br/>
          <button value="a" className="btn btn-warning btn-lg" onClick={this.handleLogin} > Log In </button>
        </form>
        <div>
          If you have not yet created an account...
        </div>
        <button type = 'button'
                className = "btn grey white-text"
                onClick = {this.props.toggleCreatingUsername}>
                {this.props.creatingUsername ? <CreateUserPage /> : null}
        Log In
        </button>
      </div>
    );
  }
});
