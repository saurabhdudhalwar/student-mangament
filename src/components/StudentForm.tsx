import { useState, useEffect } from "react";
import * as MUI from "@mui/material";

const StudentForm = ({ onSubmit, studentToEdit, handleSnackBar }: any) => {
  const [student, setStudent] = useState<any>({
    name: "",
    age: "",
    gender: "",
    subjects: [],
    address: "",
    hobbies: [],
    preferredCourse: "",
    studentType: "",
  });

  const courses = [
    "Computer Science Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Electronics and Communication Engineering",
    "Chemical Engineering",
    "Biotechnology Engineering",
    "Information Technology Engineering",
    "Aerospace Engineering",
    "Automobile Engineering",
  ];
  const hobbiesList = ["Reading", "Sports", "Music", "Traveling"];

  useEffect(() => {
    if (studentToEdit) {
      setStudent(studentToEdit);
    }
  }, [studentToEdit]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStudent((prev: any) => ({
      ...prev,
      [name!]: value,
    }));
  };

  const handleCheckboxChange = (hobby: string) => {
    setStudent((prev: any) => {
      const newHobbies = prev.hobbies.includes(hobby)
        ? prev.hobbies.filter((h: any) => h !== hobby)
        : [...prev.hobbies, hobby];
      return { ...prev, hobbies: newHobbies };
    });
  };

  const handleSubmit = () => {
    if (
      !student.name ||
      student.age <= 0 ||
      !student.gender ||
      student.subjects.length === 0 ||
      !student.preferredCourse ||
      !student.studentType ||
      !student.address
    ) {
      handleSnackBar("All fields are required!", "error");
      return;
    }

    onSubmit(student);
    setStudent({
      name: "",
      age: "",
      gender: "",
      subjects: [],
      address: "",
      hobbies: [],
      preferredCourse: "",
      studentType: "",
    });
  };

  return (
    <MUI.Grid container spacing={2} p={2}>
      <MUI.Grid item xs={12} sm={6} md={3}>
        <MUI.TextField
          label="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
          fullWidth
        />
      </MUI.Grid>
      <MUI.Grid item xs={12} sm={6} md={3}>
        <MUI.TextField
          label="Age"
          name="age"
          type="number"
          value={student.age}
          onChange={handleChange}
          fullWidth
        />
      </MUI.Grid>
      <MUI.Grid item xs={12} sm={6} md={3}>
        <MUI.FormControl fullWidth>
          <MUI.InputLabel id="subjects-label">Subjects</MUI.InputLabel>
          <MUI.Select
            labelId="subjects-label"
            id="subjects-select"
            name="subjects"
            multiple
            value={student.subjects}
            onChange={handleChange}
          >
            <MUI.MenuItem value="Math">Mathematics</MUI.MenuItem>
            <MUI.MenuItem value="Physics">Physics</MUI.MenuItem>
            <MUI.MenuItem value="Chemistry">Chemistry</MUI.MenuItem>
            <MUI.MenuItem value="Engineering Graphics">
              Engineering Graphics
            </MUI.MenuItem>
            <MUI.MenuItem value="Engineering Materials">
              Engineering Materials
            </MUI.MenuItem>
          </MUI.Select>
        </MUI.FormControl>
      </MUI.Grid>
      <MUI.Grid item xs={12} sm={6} md={3}>
        <MUI.Autocomplete
          options={courses}
          value={student.preferredCourse}
          onChange={(e: any, newValue: any) =>
            setStudent({ ...student, preferredCourse: newValue || "" })
          }
          renderInput={(params) => (
            <MUI.TextField {...params} label="Preferred Course" />
          )}
          fullWidth
        />
      </MUI.Grid>

      <MUI.Grid
        item
        xs={12}
        sm={6}
        md={6}
        sx={style.fieldContainer}
      >
        <MUI.FormLabel sx={{ marginRight: "8px" }}>Gender:</MUI.FormLabel>

        <MUI.RadioGroup
          row
          name="gender"
          value={student.gender}
          onChange={handleChange}
        >
          <MUI.FormControlLabel
            value="Male"
            control={<MUI.Radio />}
            label="Male"
          />
          <MUI.FormControlLabel
            value="Female"
            control={<MUI.Radio />}
            label="Female"
          />
          <MUI.FormControlLabel
            value="Other"
            control={<MUI.Radio />}
            label="Other"
          />
        </MUI.RadioGroup>
      </MUI.Grid>

      <MUI.Grid item xs={12} sm={6} md={6}>
        <MUI.FormLabel sx={{ marginRight: "8px" }}>Hobbies:</MUI.FormLabel>

        {hobbiesList.map((hobby) => (
          <MUI.FormControlLabel
            key={hobby}
            control={
              <MUI.Checkbox
                checked={student.hobbies.includes(hobby)}
                onChange={() => handleCheckboxChange(hobby)}
              />
            }
            label={hobby}
          />
        ))}
      </MUI.Grid>

      <MUI.Grid item xs={12} sm={6} md={6} sx={style.fieldContainer}>
        <MUI.FormLabel sx={{ marginRight: "8px" }}>Student Type:</MUI.FormLabel>

        <MUI.RadioGroup
          row
          name="studentType"
          value={student.studentType}
          onChange={handleChange}
        >
          <MUI.FormControlLabel
            value="Full-time"
            control={<MUI.Radio />}
            label="Full-time"
          />
          <MUI.FormControlLabel
            value="Part-time"
            control={<MUI.Radio />}
            label="Part-time"
          />
          <MUI.FormControlLabel
            value="Online"
            control={<MUI.Radio />}
            label="Online"
          />
        </MUI.RadioGroup>
      </MUI.Grid>

      <MUI.Grid item xs={12}>
        <MUI.TextField
          multiline
          rows={4}
          placeholder="Address"
          name="address"
          value={student.address}
          onChange={handleChange}
          style={{ width: "100%" }}
        />
      </MUI.Grid>

      <MUI.Grid item xs={12} sx={style.buttonContainer}>
        <MUI.Button
          variant="contained"
          onClick={handleSubmit}
          sx={style.button}
        >
          {studentToEdit ? "Update" : "Submit"}
        </MUI.Button>
      </MUI.Grid>
    </MUI.Grid>
  );
};

export const style = {
  button: {
    color: "#000000",
    backgroundColor: "#B3D9D9",
    boxShadow: "3px 3px 10px #E3FDFD",
    "&:hover": {
      boxShadow: "5px 5px 15px #E3FDFD",
      backgroundColor: "#697565",
      color: "#FFFFFF",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
};

export default StudentForm;
