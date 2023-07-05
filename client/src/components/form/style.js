import { makeStyles  } from "@material-ui/core";

export default makeStyles((Theme)=>({
    root: {
        '& .MuiTextField-root': {
          margin: Theme.spacing(1),
        },
      },
      paper: {
        padding: Theme.spacing(2),
      },
      form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
        marginBottom: 10,
      },
}));