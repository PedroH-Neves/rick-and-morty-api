import '../styles/components/Char.scss'

const Char = ({image, name}) => {

  return (
    <>
      <figure>
          <img src={image} alt='' />
          <figcaption>{name}</figcaption>
        </figure>
    </>
  )
}

export default Char;