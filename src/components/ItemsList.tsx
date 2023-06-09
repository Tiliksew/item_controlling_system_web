import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
import { useAppStore } from '../appStore'
import { TextareaAutosize } from "@mui/material";
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Box from "@mui/material/Box";
import { getAllItems } from "../api/upload.api";
import Button from '@mui/base/Button';


interface Column {
  id: "Item No" | "Description" | " Qty " | " Amount " | " Rate ";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "Item No", label: "ItemNo", minWidth: 170 },
  { id: "Description", label: "Descriptipn", minWidth: 100 },
  {
    id: " Qty ",
    label: "Quantity ",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: " Amount ",
    label: "Amount",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: " Rate ",
    label: "Rate",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  "Item No": string;
  "Description": string;
  " Qty ": number;
  " Amount ": number;
  " Rate ": number;
}


export default function ItemsList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const setSelectedRow = useAppStore((state) => state.setSelectedRow);
  const selectedRow = useAppStore((state) => state.selectedRow);
  const isLoading = useAppStore((state) => state.isLoading);
  const updateLoading = useAppStore((state) => state.updateLoading);
  const [amount,setAmount]= React.useState('')
  const [quantity,setQuantity]= React.useState('')
  const [rate,setRate]= React.useState('')
  const [description,setDescription]= React.useState('')

  const items = useAppStore((state) => state.items);
const setItems = useAppStore((state) => state.setItems);
/*
*/
var r:Data[] = items

  // const setIsLoading = useAppStore((state) => state.updateLoading);

  var handleClickOpen = (row:Data) => {
    setOpen(true);
    setSelectedRow(row)
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null)

  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const FormDialog = () => {
    const blue = {
      100: '#DAECFF',
      200: '#b6daff',
      400: '#3399FF',
      500: '#007FFF',
      600: '#0072E5',
      900: '#003A75',
    };
  
    const grey = {
      50: '#f6f8fa',
      100: '#eaeef2',
      200: '#d0d7de',
      300: '#afb8c1',
      400: '#8c959f',
      500: '#6e7781',
      600: '#57606a',
      700: '#424a53',
      800: '#32383f',
      900: '#24292f',
    };
  
    const StyledTextarea = styled(TextareaAutosize)(
      ({ theme }) => `
      width: 320px;
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.5;
      padding: 12px;
      border-radius: 12px 12px 0 12px;
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0px 2px 24px ${
        theme.palette.mode === 'dark' ? blue[900] : blue[100]
      };
    
      &:hover {
        border-color: ${blue[400]};
      }
    
      &:focus {
        border-color: ${blue[400]};
        box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
      }
    
      // firefox
      &:focus-visible {
        outline: 0;
      }
    `,
    );
    const Transition = React.forwardRef(function Transition(
      props: TransitionProps & {
        children: React.ReactElement<any, any>;
      },
      ref: React.Ref<unknown>,
    ) {
      return <Slide direction="up" ref={ref} {...props} />;
    });
    return (
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit Item - Selected Item - Selected Item </DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <center>
              <br />
              <TextField
                id="amount"
                defaultValue={selectedRow?.[" Amount "]}
                label="Amount"
                type="number"
                fullWidth
                variant="standard"
                onChange={(_) => {
                  setAmount(_.target.value)
                  console.log("changing", _.target.value);
                }}
              />
              <br />
              <TextField
                autoFocus
                margin="dense"
                id="quantity"
                label="Quantity"
                type="number"
                onChange={(_) => {
                  // setQuantity(_.target.value)
                  console.log("changing", _.target.value);
                }}
                defaultValue={selectedRow?.[" Qty "]}
                fullWidth
                variant="standard"
              />
              <br />
              <TextField
                autoFocus
                margin="dense"
                
                id="rate"
                defaultValue={selectedRow?.[" Rate "]}
                label="Rate"
                fullWidth
                type="number"
                variant="standard"
                onChange={(_) => {
                  // setRate(_.target.value)
                  console.log("changing", _.target.value);
                }}
              />
              <br />
              <br />
              <StyledTextarea
                
                defaultValue={selectedRow?.Description}
                aria-label="empty textarea"
                placeholder="description"
                onChange={(_) => {
                  // setDescription(_.target.value)
                  console.log("changing", _.target.value);
                }}
              />
              ;
            </center>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Update</Button>
            <Button onClick={handleClose}>Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  return isLoading?<center><CircularProgress color="success" /><Box sx={{ width: '100%' }}>
  <LinearProgress />
</Box>  </center>: (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow key={'header'}>
                {/* {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))} */}
                <TableCell style={{ minWidth: "200px" }}>Item No</TableCell>
                <TableCell align="left" style={{ maxWidth: "50px" }}>
                  Description
                </TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Rate</TableCell>
                {/* <TableCell>Actions</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {r
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((r) => {                  
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      style={{ cursor: "pointer" }}
                      tabIndex={-1}
                      key={r.Description}
                    >
                      {columns.map((column) => {
                        const value = r[column.id];
                        return (
                          <TableCell
                            onClick={() => handleClickOpen(r)}
                            key={column.id}
                            align={column.align}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={r.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormDialog />
    </>
  );
}
