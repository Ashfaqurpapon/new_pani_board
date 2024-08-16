const Nav = () => {
  return (
    <nav className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo/Name with Search Box and GO Button */}
        <div className="flex items-center space-x-4 mb-4 lg:mb-0">
          {/* Logo/Name */}
          <div className="text-xl lg:text-2xl font-bold">
            Bangladesh National Portal
          </div>

          {/* Search Box with Items Dropdown */}
          <div className="relative group hidden lg:flex">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* Dropdown Items */}
            <div className="absolute left-0 mt-1 w-full bg-white text-black border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
              <ul className="list-none">
                <li className="p-2 hover:bg-gray-100">Item 1</li>
                <li className="p-2 hover:bg-gray-100">Item 2</li>
                <li className="p-2 hover:bg-gray-100">Item 3</li>
              </ul>
            </div>
          </div>

          {/* Go Button */}
          <button className="hidden lg:block bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            GO
          </button>
        </div>

        {/* Right Side Search Box and Language Toggle */}
        <div className="flex flex-wrap items-center space-x-4 w-full lg:w-auto">
          {/* New Search Box */}
          <div className="flex w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            {/* New Go Button */}
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
              GO
            </button>
          </div>

          {/* Language Toggle */}
          <button className="bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full lg:w-auto">
            English/Bangla
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
