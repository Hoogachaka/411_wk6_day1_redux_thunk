import React from "react";
import { Button, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Container, Menu} from "@mui/material";
import BasicMenu from './BasicMenu';

const Import = (props) => {
    return (
      <Container maxWidth='lg'>
        <Button variant='contained' color='primary' onClick={props.fetchMakes}>
          IMPORT
        </Button>
        <h2> COUNT: {props.makes.length} </h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>MAKE</TableCell>
              <TableCell>ACTIONS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.makes.map((make, index) => (
              <TableRow key={make.MakeId}>
                <TableCell>{make.MakeId}</TableCell>
                <TableCell>{make.MakeName}</TableCell>
                <TableCell>
                  <BasicMenu key={index} deleteMake={props.deleteMake} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    );
  };
  
  export default Import;
  