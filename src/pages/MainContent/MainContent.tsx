import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function MainContent() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-foreground px-4">
      <div className="w-full max-w-3xl text-center mb-30">
        <h1 className="text-blue-200 text-2xl font-bold mb-12">
          Create personalized exams tailored to your students' unique interests
          and needs!
        </h1>
        <p className="text-lg text-blue-100 mt-2">
          Engage your students with custom questions that match their learning
          goals.
        </p>
      </div>
      <div className="w-full">
        <Textarea
          placeholder="Type your prompt here with questions and subjects..."
          className="w-full h-64 text-white p-4 bg-black/50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <div className="flex justify-center mt-4">
          <Button className="bg-black/80 text-white hover:bg-primary/90">
            Submit
          </Button>
        </div>
      </div>
    </main>
  );
}
