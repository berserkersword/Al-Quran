import { Sura } from '../Model/Model'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';
const Card = (prop: { card: Sura }) => {
    return (

        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-xl text-center  shadow-[#eee]">
            <Link to="/" className='text-center'>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 ">{prop.card.englishName}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 ">
                {prop.card.name}
            </p>
            <Link to={`/${prop.card.number}`} className="inline-flex readme items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <BsArrowRight className='mx-2 icon-hover' />
            </Link>
        </div>

    )
}

export default Card