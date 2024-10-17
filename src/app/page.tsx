import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex gap-2 items-center justify-center">
        <div className="relative w-[300px] h-[300px]">
          <Image
            src="/images/profile.jpg" // Replace with your actual image path in 'public/images/'
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-6xl font-bold text-gray-900">
            I’m <span className="text-teal-500">Isabella</span>
          </h1>
          <p className="text-lg mt-4 text-gray-700">
            I’m a Web Developer, App Developer, UX/UI Designer and Video Editor.
          </p>
          <div>
            <button className="mt-6 px-6 py-2 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold rounded-full transition-all duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
