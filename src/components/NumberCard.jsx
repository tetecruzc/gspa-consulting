/* eslint-disable react/prop-types */


export default function NumberCard({number, text}) {

  return (
    <div className="flex flex-col justify-center items-center font-poppins w-[300px] px-3 py-5 mx-3 rounded bg-gray-200">
        <p className="text-6xl text-blue-900">{number}</p>
        <div className="h-[2px] w-[60px] bg-blue-900 mt-3"></div>
        <p className="text-sm text-center mt-5 px-3">{text}</p>
    </div>
  )
}
