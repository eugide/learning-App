

function Navbar() {
  return (
<nav className="bg-[#30336b] text-white">
    <div className="w-11/12 mx-auto flex justify-between">
            <h1 className="font-bold text-3xl">Smart<span className="text-[#22a6b3]">Learn</span></h1>
        <div className="flex gap-x-3 items-center font-bold">
            <a href="#" className="hover:underline hover:text-[#22a6b3] " >Home</a>
            <a href="#" className="hover:underline hover:text-[#22a6b3] " >Courses</a>
            <a href="#" className="hover:underline hover:text-[#22a6b3] " >Add Course</a>
        </div>
    </div>
</nav>
  )
}

export default Navbar