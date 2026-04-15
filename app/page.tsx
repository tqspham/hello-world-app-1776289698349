import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello world",
  description: "A simple hello world page",
};

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Hello world
      </h1>
    </div>
  );
}