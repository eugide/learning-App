import Card from "./Card"


function HomeCards() {
  return (
    <div className="bg-gray-300">
    <div className="grid grid-cols-2  py-32 w-4/5 mx-auto gap-20">
    <Card>
    <div className="bg-[#22a6b3] text-[#30336b] py-3 px-4 rounded-md shadow-mc flex flex-col items-center gap-y-6">
            <h2 className="font-bold text-xl">For Student</h2>
            <p>Checkout some cool to perfect your craft</p>
            <a className="transition duration-300 font-bold hover:bg-[#30336b] text-white px-3 py-1.5 text-[#30336b] hover:text-white border-2 border-[#30336b]" href="#">View Courses</a>
        </div>
    </Card>
    <Card>
    <div className="bg-[#30336b] text-white py-3 px-4 rounded-md shadow-mc flex flex-col items-center gap-y-6">
            <h2 className="font-bold text-xl">For Teachers</h2>
            <p>Showcase your best courses to attract wold-class learners</p>
            <a className="transition duration-300 font-bold px-3 py-1.5 hover:bg-gray-400 text-white px-3 py-1.5  hover:text-[#30336b] border-2 border-bg-gray-400" href="#">Publish Courses</a>
        </div>
    </Card>
    </div>
    </div>
    
  )
}

export default HomeCards