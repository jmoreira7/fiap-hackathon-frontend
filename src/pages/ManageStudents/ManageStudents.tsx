import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const mockStudents = [
  {
    name: "John Doe",
    age: 16,
    grade: "10th Grade",
    interests: "Math, Science",
  },
  {
    name: "Jane Smith",
    age: 17,
    grade: "11th Grade",
    interests: "History, Literature",
  },
  {
    name: "Alice Johnson",
    age: 15,
    grade: "9th Grade",
    interests: "Art, Music",
  },
  {
    name: "Bob Brown",
    age: 18,
    grade: "12th Grade",
    interests: "Physics, Chemistry",
  },
  {
    name: "Emily Davis",
    age: 16,
    grade: "10th Grade",
    interests: "Biology, Sports",
  },
  {
    name: "John Doe",
    age: 16,
    grade: "10th Grade",
    interests: "Math, Science",
  },
  {
    name: "Jane Smith",
    age: 17,
    grade: "11th Grade",
    interests: "History, Literature",
  },
  {
    name: "Alice Johnson",
    age: 15,
    grade: "9th Grade",
    interests: "Art, Music",
  },
  {
    name: "Bob Brown",
    age: 18,
    grade: "12th Grade",
    interests: "Physics, Chemistry",
  },
  {
    name: "Emily Davis",
    age: 16,
    grade: "10th Grade",
    interests: "Biology, Sports",
  },
  {
    name: "John Doe",
    age: 16,
    grade: "10th Grade",
    interests: "Math, Science",
  },
  {
    name: "Jane Smith",
    age: 17,
    grade: "11th Grade",
    interests: "History, Literature",
  },
  {
    name: "Alice Johnson",
    age: 15,
    grade: "9th Grade",
    interests: "Art, Music",
  },
  {
    name: "Bob Brown",
    age: 18,
    grade: "12th Grade",
    interests: "Physics, Chemistry",
  },
  {
    name: "Emily Davis",
    age: 16,
    grade: "10th Grade",
    interests: "Biology, Sports",
  },
  {
    name: "John Doe",
    age: 16,
    grade: "10th Grade",
    interests: "Math, Science",
  },
  {
    name: "Jane Smith",
    age: 17,
    grade: "11th Grade",
    interests: "History, Literature",
  },
  {
    name: "Alice Johnson",
    age: 15,
    grade: "9th Grade",
    interests: "Art, Music",
  },
  {
    name: "Bob Brown",
    age: 18,
    grade: "12th Grade",
    interests: "Physics, Chemistry",
  },
  {
    name: "Emily Davis",
    age: 16,
    grade: "10th Grade",
    interests: "Biology, Sports",
  },
  {
    name: "John Doe",
    age: 16,
    grade: "10th Grade",
    interests: "Math, Science",
  },
  {
    name: "Jane Smith",
    age: 17,
    grade: "11th Grade",
    interests: "History, Literature",
  },
  {
    name: "Alice Johnson",
    age: 15,
    grade: "9th Grade",
    interests: "Art, Music",
  },
  {
    name: "Bob Brown",
    age: 18,
    grade: "12th Grade",
    interests: "Physics, Chemistry",
  },
  {
    name: "Emily Davis",
    age: 16,
    grade: "10th Grade",
    interests: "Biology, Sports",
  },
];

export function ManageStudents() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-64">
        {mockStudents.map((student, index) => (
          <Card key={index} className="bg-black/50 border border-gray-300 shadow-md">
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
