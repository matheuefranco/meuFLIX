import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ModalDialog(props) {
    return (
        <div>
          <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {props.titulo}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {props.texto}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={props.handleSim} color="primary">
                Sim
              </Button>
              <Button onClick={props.handleNao} color="primary" autoFocus>
                Não
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
}