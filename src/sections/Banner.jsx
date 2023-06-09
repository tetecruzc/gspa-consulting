import bannerBackground from '../assets/banner.jpg'


export default function Banner() {

  
  return (
    <>
        <section id="banner" className="font-poppins relative h-[80vh] bg-center bg-cover bg-no-repeat flex justify-center items-center" style={{ backgroundImage: "url(" + bannerBackground + ")" }}>
            <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
            <div className="relative mx-auto p-4 z-1 flex flex-col justify-center">
                <div className="absolute w-full h-full bg-black opacity-50 z-1"></div>
                <h1 className="relative text-slate-100 text-center text-4xl font-semibold z-2">GSPA Consulting</h1>
                <p className="relative text-slate-100 text-center font-normal z-2">Consultoría en estrategia de gobierno y asuntos públicos</p>
                <button className="relative bg-red-700 z-2 mx-auto min-w-[30%] rounded text-slate-100 py-2 px-4 text-sm mt-3">Contacto</button>
            </div>
        </section>
    </>
  )
}
