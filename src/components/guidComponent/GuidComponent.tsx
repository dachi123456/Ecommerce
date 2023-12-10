import { useNavigate } from 'react-router-dom'
import mainImg from '../../assets/19.svg'
import './guidComponent.css'
const GuidComponent = () => {
    const navigator = useNavigate()


    const onViewAll = () => {
        navigator('/Store')
    }
  return (
    <div className='container guid-container mt-4'>
        <div className="row">
            <span className="col-12 col-md-6 d-flex justify-content-center flex-column align-items-center">
                <h1 className='text-center'>Collections</h1>
                <p className='text-center w-75'>
                    you can explore ans shop many differnt collection
                    from various barands here.
                </p>
                <button type="button" className ="btn btn-secondary w-50 mb-5" onClick={onViewAll}>View All</button>
            </span>
            <div className="image-div col-12 col-md-6">
                <img src={mainImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default GuidComponent