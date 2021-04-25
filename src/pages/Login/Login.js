import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useHistory } from "react-router";

import { UserContext } from "../../UserContext";
import { MetaDecorator } from "../../components";

export const UserLogin = async (userLogin) => {
  // add request here

  return {
    id: 5,
    username: "admin",
    email: userLogin.email,
    imageUrl:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  };
};

export const Login = () => {
  const { setUser } = useContext(UserContext);
  let initState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  };
  const [inputs, setInputs] = useState(initState);

  let [hasErrors, setErrors] = useState(false);

  let history = useHistory();

  const classes = useStyles();

  function signUp(res, type) {
    let postData;
    if (type === "google" && res.profileObj) {
      postData = {
        id: res.profileObj.googleId,
        username: res.profileObj.name,
        email: res.profileObj.email,
        imageUrl: res.profileObj.imageUrl,
      };
    }
    setUser(postData);
    history.push("/");
  }

  const responseGoogle = (response) => {
    console.log(response);

    signUp(response, "google");
  };
  const responseFacebook = (response) => {
    console.log(response);
    signUp(response, "facebook");
    //package scripts file :     "build": "react-scripts build",
  };

  const validate = () => {
    let isError = false;
    let errors = { emailError: "", passwordError: "" };
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    // example for correct email and password
    const correctInfo = {
      email: "nam@gmail.com",
      password: "123",
    };
    if (inputs.email === "" || inputs.password === "") {
      isError = true;
      errors.emailError = "Không được bỏ trống mục email hay mật khẩu";
      errors.passwordError = "Không được bỏ trống mục email hay mật khẩu";
    } else if (
      inputs.email != correctInfo.email ||
      inputs.password != correctInfo.password
    ) {
      //add api request for validated email and password here
      isError = true;
      errors.emailError =
        "Sai email hoặc mật khẩu. Xin nhập đúng thông tin hoặc đổi mật khẩu nếu bạn quên mật khẩu.";
      errors.passwordError =
        "Sai email hoặc mật khẩu. Xin nhập đúng thông tin hoặc đổi mật khẩu nếu bạn quên mật khẩu.";
    } else if (reg.test(inputs.email) === false) {
      isError = true;
      errors.emailError = "Phải nhập đúng email";
    }

    if (isError) {
      setInputs({
        ...inputs,
        passwordError: errors.passwordError,
        emailError: errors.emailError,
      });
    }
    return isError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setErrors(err);
    } else {
      let userLogin = { email: inputs.email, passowrd: inputs.password };
      const user = await UserLogin(userLogin);
      setUser(user);
      setInputs(initState);

      setErrors(err);
      history.push("/");
    }
  };

  return (
    <div class="main-content">
      <MetaDecorator
        title="Login"
        description="Login with either facebook, google or registed account"
      />

      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          <GoogleLogin
            clientId="445736540056-ej8eakbeh8n0hrkftbpr9fibfp4nnk4s.apps.googleusercontent.com"
            className="gLoginBtn"
            buttonText="Đăng nhập bằng Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <div class="facebookCont">
            <FacebookLogin
              cssClass="fLoginBtn"
              appId="1088597931155576"
              autoLoad={false}
              fields="name,email,picture"
              //onClick={componentClicked}
              textButton="Đăng nhập bằng Facebook"
              callback={responseFacebook}
              icon={<FacebookIcon />}
            />
          </div>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Tài khoản Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              error={hasErrors}
              id="standard-error-helper-text"
              helperText={inputs.emailError}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              error={hasErrors}
              id="standard-error-helper-text"
              helperText={inputs.passwordError}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Ghi nhớ tài khoản"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => handleSubmit(e)}
            >
              Đăng nhập
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password" variant="body2">
                  Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Không có tài khoản? Đăng ký"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    height: "50px",
    margin: theme.spacing(1, 0, 2),
    fontFamily: "Roboto",
  },
}));
