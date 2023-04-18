export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-40 h-full flex flex-col justify-start">
        <h1>home</h1>
        <h1>client</h1>
        <h1>asks</h1>
      </div>
      <div className="max-w-md mr-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Marketing</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Project Management Dashboard</a>
            <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim non lacinia at, pretium quis nunc. Duis fringilla metus odio, in bibendum turpis lobortis et.</p>
            <div className="mt-4">
              <span className="text-gray-500 font-bold">Deadline:</span>
              <span className="ml-2 text-gray-600">September 30, 2023</span>
            </div>
            <div className="mt-4">
              <span className="text-gray-500 font-bold">Budget:</span>
              <span className="ml-2 text-gray-600">$50,000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md mr-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Marketing</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Project Management Dashboard</a>
            <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim non lacinia at, pretium quis nunc. Duis fringilla metus odio, in bibendum turpis lobortis et.</p>
            <div className="mt-4">
              <span className="text-gray-500 font-bold">Deadline:</span>
              <span className="ml-2 text-gray-600">September 30, 2023</span>
            </div>
            <div className="mt-4">
              <span className="text-gray-500 font-bold">Budget:</span>
              <span className="ml-2 text-gray-600">$50,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}