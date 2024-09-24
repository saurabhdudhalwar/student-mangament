import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Header from "./components/Header";
import SnackbarComponent from "./components/SnackbarComponent";

const App = () => {
  const [students, setStudents] = useState<any>([]);
  const [currentStudentIndex, setCurrentStudentIndex] = useState<any>(null);
  const [studentToEdit, setStudentToEdit] = useState<any>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleSnackbarOpen = (message: any, severity: any) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };


  const handleAddStudent = (newStudent: any) => {
    if (currentStudentIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[currentStudentIndex] = newStudent;
      setStudents(updatedStudents);
      setCurrentStudentIndex(null); 
      handleSnackbarOpen('Student edited successfully!', 'success');
    } else {
      setStudents([...students, newStudent]);
      handleSnackbarOpen('Student Added successfully!', 'success');
    }
    setStudentToEdit(null); 
  };

  const handleEditStudent = (index: any) => {
    const editedStudent = students[index];
    setStudentToEdit(editedStudent); 
    setCurrentStudentIndex(index); 
  };

  const handleDeleteStudent = (index: any) => {
    handleSnackbarOpen('Student deleted successfully!', 'error');

    setStudents(students.filter((_: any, i: any) => i !== index));
    if (currentStudentIndex === index) {
      setStudentToEdit(null);
      setCurrentStudentIndex(null);
    }
  };


  return (
    <div>
      <Header />
      <StudentForm onSubmit={handleAddStudent} studentToEdit={studentToEdit} handleSnackBar={handleSnackbarOpen} />
      <StudentTable
        students={students}
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent}
      />
       <SnackbarComponent
        open={snackbarOpen}
        handleClose={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </div>
  );
};

export default App;
