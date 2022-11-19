import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#efefef",
    padding: "10px 50px",
  },
  heading: {
    color: "#55133B",
    textDecoration: "none",
    fontWeight: "400",
    textTransform: "lowercase",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: "purple",
    backgroundColor: "purple",
  },
}));
