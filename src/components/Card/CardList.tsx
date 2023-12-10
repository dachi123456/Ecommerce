import useFetch from '../../hooks/useFetch';
import CardBox from './CardBox';

const CardList:React.FC<{cartAlert: () => void}> = ({cartAlert}) => {
    const { data } = useFetch('https://fakestoreapi.com/products');
    const firstTenItems = data ? data.slice(2, 11) : [];


    console.log(data)
  return (
    <div className='container mt-5'>
        <div className="row">
        {firstTenItems?.map((el) => (
        <div key={el.id} className="col-lg-3 col-sm-6 col-12 g-3 d-flex justify-content-center">

        <CardBox image={el.image} price={el.price} id={el.id} title={el.title} cartAlert={cartAlert}/>
      </div>
      ))}
        </div>
    </div>
  )
}

export default CardList