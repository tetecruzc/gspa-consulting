/* eslint-disable react/prop-types */

export default function NumberCard({title, text, classes, titleSize, size}) {

  return (
    <div className={`flex flex-col justify-center items-center font-poppins min-w-[300px] ${size === 'big' ? 'w-[500px]' : ' w-[300px]'} px-3 py-5 mx-3 rounded bg-gray-200 ${classes}`}>
        <p className={` ${titleSize === 'medium' ? 'text-4xl' : 'text-6xl'} text-blue-900`}>{title}</p>
        <div className="h-[2px] w-[60px] bg-blue-900 mt-3"></div>
        <p className={`${titleSize === 'medium' ? 'text-sm' : 'text-sm'} text-center mt-5 px-3`}>{text}</p>
    </div>
  )
}
