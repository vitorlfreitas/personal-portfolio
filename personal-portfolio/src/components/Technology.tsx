
interface Props {
    technology: string,
}

const Technology = ( {technology} : Props) => {
  return (
    <div className='border-2 border-sky-800 rounded-lg py-1 px-2 mr-1'>
        <p className='text-sky-800 text-lg text-nowrap'>{technology}</p>
    </div>
  )
}

export default Technology;