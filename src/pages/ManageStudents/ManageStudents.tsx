import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { api } from "@/utils/api";
import { Student } from "@/utils/types";
import { Loader2 } from "lucide-react";

export function ManageStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState<Student>({
    name: "",
    age: 0,
    grade: 0,
    createDate: "",
    updateDate: "",
    interests: [],
  });
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching students...");

    api
      .get("/students")
      .then((response) => {
        console.log("Students fetched successfully:", response.data);

        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      })
      .finally(() =>{
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "interests") {
      const interestArray = value
        .split(",")
        .map((interest) => interest.trim());

      setNewStudent((prev) => ({
        ...prev,
        interests: interestArray,
      }));

      if (selectedStudent) {
        setSelectedStudent((prev) => ({
          ...prev!,
          interests: interestArray,
        }));
      }
    } else {
      setNewStudent((prev) => ({
        ...prev,
        [name]: name === "age" || name === "grade" ? Number(value) : value,
      }));
  
      if (selectedStudent) {
        setSelectedStudent((prev) => ({
          ...prev!,
          [name]: name === "age" || name === "grade" ? Number(value) : value,
        }));
      }
    }
  };

  const handleAddStudent = () => {
    const formattedDate = new Date().toISOString().split("T")[0];

    console.log("New Student State Before POST:", newStudent);

    const studentToAdd = {
      name: newStudent.name,
      age: newStudent.age,
      grade: newStudent.grade,
      createDate: formattedDate,
      updateDate: formattedDate,
      interests: newStudent.interests,
    };

    console.log("Student Object to Add:", studentToAdd);

    api
      .post("/students", studentToAdd)
      .then((response) => {
        console.log("Student added successfully:", response.data);
        setStudents((prev) => [...prev, response.data]);
        setIsModalOpen(false);
        setNewStudent({
          name: "",
          age: 0,
          grade: 0,
          createDate: "",
          updateDate: "",
          interests: [],
        });
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
  };

  const handleEditStudent = () => {
    if (selectedStudent) {
      console.log("Selected Student Before PUT:", selectedStudent);

      api.put(`/students/${selectedStudent._id}`, selectedStudent)
        .then((response) => {
          console.log("Student updated successfully:", response.data);
          setStudents((prev) =>
            prev.map((student) =>
              student._id === selectedStudent._id ? response.data : student
            )
          );
          setIsModalOpen(false);
          setSelectedStudent(null);
        })
        .catch((error) => {
          console.error("Error updating student:", error);
        });
    }
  };

  const handleDeleteStudent = () => {
    if (selectedStudent) {
      api
        .delete(`/students/${selectedStudent._id}`)
        .then(() => {
          console.log("Student deleted successfully");
          setStudents((prev) =>
            prev.filter((student) => student._id !== selectedStudent._id)
          );
          setIsModalOpen(false);
          setSelectedStudent(null);
        })
        .catch((error) => {
          console.error("Error deleting student:", error);
        });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center content-center h-screen">
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen px-4">
      <div className="w-full max-w-3xl flex justify-center mt-24">
        <Button
          className="bg-black text-white hover:bg-primary/90"
          onClick={() => setIsModalOpen(true)}
        >
          Add Student
        </Button>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-white">Add New Student</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-white">
            <Input
              name="name"
              placeholder="Name"
              value={newStudent.name}
              onChange={handleInputChange}
            />
            <Input
              name="age"
              placeholder="Age"
              type="number"
              value={newStudent.age || ""}
              onChange={handleInputChange}
            />
            <Input
              name="grade"
              placeholder="Grade"
              value={newStudent.grade || ""}
              onChange={handleInputChange}
            />
            <Input
              name="interests"
              placeholder="Interests (comma-separated)"
              value={newStudent.interests?.join(", ") || ""}
              onChange={(e) =>
                setNewStudent((prev) => ({
                  ...prev,
                  interests: e.target.value
                    .split(",")
                    .map((interest) => interest.trim()),
                }))
              }
            />
          </div>
          <DialogFooter>
            <Button
              className="bg-blue-100"
              variant="secondary"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button className="bg-blue-800" onClick={handleAddStudent}>Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {selectedStudent && (
        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-white">Edit Student</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 text-white">
              <Input
                name="name"
                placeholder="Name"
                value={selectedStudent.name}
                onChange={handleInputChange}
              />
              <Input
                name="age"
                placeholder="Age"
                type="number"
                value={selectedStudent.age || ""}
                onChange={handleInputChange}
              />
              <Input
                name="grade"
                placeholder="Grade"
                type="number"
                value={selectedStudent.grade || ""}
                onChange={handleInputChange}
              />
              <Input
                name="interests"
                placeholder="Interests (comma-separated)"
                value={selectedStudent.interests?.join(", ") || ""}
                onChange={(e) =>
                  setSelectedStudent((prev) => ({
                    ...prev!,
                    interests: e.target.value
                      .split(",")
                      .map((interest) => interest.trim()),
                  }))
                }
              />
            </div>
            <DialogFooter>
              <Button
                className="bg-red-800 text-white"
                onClick={handleDeleteStudent}
              >
                Delete
              </Button>
              <Button
                className="bg-blue-800 text-white"
                onClick={handleEditStudent}
              >
                Edit
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        {students.map((student) => (
          <Card
            key={student._id}
            className="w-50 h-70 bg-black/50 border border-gray-300 shadow-md cursor-pointer"
            onClick={() => {
              setSelectedStudent(student);
              setIsEditModalOpen(true);
            }}
          >
            <CardHeader>
              <CardTitle className="text-lg font-bold text-white overflow-hidden text-ellipsis whitespace-nowrap">
                {student.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 overflow-hidden text-ellipsis whitespace-normal">
              <p>
                <strong>Age:</strong> {student.age}
              </p>
              <p>
                <strong>Grade:</strong> {student.grade}
              </p>
              <p>
                <strong>Interests:</strong> {student.interests?.join(", ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
