import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StudentTable = ({ students, onEdit, onDelete }: any) => {
  return (
    <Grid container p={2}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={style.tableHeader}>Name</TableCell>
              <TableCell sx={style.tableHeader}>Age</TableCell>
              <TableCell sx={style.tableHeader}>Gender</TableCell>
              <TableCell sx={style.tableHeader}>Subjects</TableCell>
              <TableCell sx={style.tableHeader}>Hobbies</TableCell>
              <TableCell sx={style.tableHeader}>Preferred Course</TableCell>
              <TableCell sx={style.tableHeader}>Student Type</TableCell>
              <TableCell sx={style.tableHeader}>Address</TableCell>

              <TableCell sx={style.tableHeader}>Edit</TableCell>
              <TableCell sx={style.tableHeader}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  <Typography variant="h6" color="textSecondary">
                    Student data is not available
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              students.map((student: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{student.subjects.join(", ")}</TableCell>
                  <TableCell>{student.hobbies.join(", ")}</TableCell>
                  <TableCell>{student.preferredCourse}</TableCell>
                  <TableCell>{student.studentType}</TableCell>
                  <TableCell>{student.address}</TableCell>

                  <TableCell sx={{ padding: "0px", margin: "0px" }}>
                    <Button onClick={() => onEdit(index)} color="success">
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell sx={{ padding: "0px", margin: "0px" }}>
                    <Button onClick={() => onDelete(index)} color="error">
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export const style = {
  tableHeader: {
    fontWeight:"bold",
    backgroundColor:"#697565",
    color:"#F0F0F0"
  }
}

export default StudentTable;
