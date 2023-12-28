export default function VintageGradient() {
  return (
    <>
      <div className="absolute pointer-events-none bottom-0 left-0 h-72 w-full -z-[1] bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute pointer-events-none top-0 left-0 h-full w-72 -z-[1] bg-gradient-to-r from-black to-transparent"></div>
      {/* <div className="absolute pointer-events-none top-0 right-0 h-full w-72 -z-[1] bg-gradient-to-l from-black to-transparent"></div> */}
    </>
  )
}