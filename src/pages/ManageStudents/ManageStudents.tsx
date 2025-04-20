import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { api } from "@/utils/api";
import { Student } from "@/utils/types";

export function ManageStudents() {
  const [students, setStudents] = useState<Student[]>([]);

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
      });
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen px-4">
      <div className="w-full max-w-3xl flex justify-center mt-24">
        <Button className="bg-black text-white hover:bg-primary/90">
          Add Student
        </Button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        {students.map((student, index) => (
          <Card
            key={index}
            className="w-50 h-70 bg-black/50 border border-gray-300 shadow-md"
          >
            <CardHeader>
              <CardTitle className="text-lg font-bold text-white">
                {student.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80">
              <p>
                <strong>Age:</strong> {student.age}
              </p>
              <p>
                <strong>Grade:</strong> {student.grade}
              </p>
              <p>
                <strong>Interests:</strong> {student.interests}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
