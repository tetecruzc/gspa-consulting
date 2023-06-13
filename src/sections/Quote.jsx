import { Typography } from '@material-tailwind/react'
import quote from '../assets/quote.jpg'

export default function Quote() {

  
  return (
    <>
        <section id="quote" className="relative w-full overflow-hidden  bg-gray-200" >
           <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-end justify-center px-10 sm:px-20 md:px-10 lg:px-20 py-20">
                    <Typography variant="lead" className="text-end text-blue-gray-900 font-poppins italic">
                        “Lorem ipsum dolor sit ammen conseteur, lorem ipsum sit ammen”
                    </Typography>
                    <Typography variant="lead" className="text-end text-blue-gray-900 font-poppins italic mt-4 text-base">
                        - Nombre Autor
                    </Typography>
                </div>
                <div className="relativetive bg-center bg-cover bg-no-repeat h-[300px]"  style={{ backgroundImage: "url(" + quote + ")" }}>
                    <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
                </div>
           </div>
           <div className="relative h-[10px] bg-blue-900 w-full"></div>
        </section>
    </>
  )
}