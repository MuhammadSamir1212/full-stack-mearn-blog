import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: "5em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1em",
  },
  root: {
    margin: "0.5em",
  },
  avatar: {
    margin: "0.5em",
    backgroundColor: "secondary",
  },
  form: {
    width: "100%",
    marginTop: "1em",
  },
  submit: {
    margin: "1em 0 0.5em !important",
  },
  googleButton: {
    marginBottom: "0.5em",
  },
}));
