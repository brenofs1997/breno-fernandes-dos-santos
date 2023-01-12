import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { useState } from 'react';
import api from '../../services/api';
import axios from 'axios';

const Header = ["Name", "Email", "Username", "Age", "Picture"];

const columns = [
    { id: "name", label: "Name", minWidth: 170, align: "right" },
    { id: "email", label: "Email", minWidth: 100, align: "right" },
    { id: "username", label: "Username", minWidth: 100, align: "right" },
    { id: "age", label: "Age", minWidth: 100, align: "right" },
    { id: "picture", label: "Picture", minWidth: 100, align: "right", format: "image" }
];

interface Items {
    name: string,
    email: string,
    username: string,
    age: number,
    picture: string
}

export const productsGenerator = async (quantity: number) => {
    const items: Items[] = [];
    let item = {} as Items;

    for (let i = 0; i < quantity; i++) {
        await axios.get('https://randomuser.me/api/')
            .then(({ data }) => {
                item = {
                    name: `${data.results[0].name.first} ${data.results[0].name.last} `, email: data.results[0].email,
                    username: data.results[0].login.username, age: data.results[0].dob.age, picture: data.results[0].picture.thumbnail
                };
            });

        items.push(item)
    }

    return items;
};

const rows = await productsGenerator(15);

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    container: {
        maxHeight: 440
    }
});

export default function Users() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id}>
                                                    {column.format && column.format == "image"
                                                        ? <img src={value} alt="picture" width="50" height="50"/>
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
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
