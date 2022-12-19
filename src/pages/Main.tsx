import { useState } from "react"
import Card from "../components/Card"
import Spinner from "../components/Spinner"
import { Surahs } from "../Model/Model"

const Main = (prop: { Cards: Surahs | undefined }) => {
    const [inputValue, setInputValue] = useState('')
    const data = prop.Cards?.data.surahs.filter(arg => arg.englishName.toLowerCase().includes(inputValue.toLowerCase()))

    return (
        <div className='w-[100%] h-[100%] bg-gradient-to-tr from-[#fff] to-[#dff9ff]'>

            <div className="flex flex-wrap -mx-3 mb-6 px-[100px] py-10">
                <div className="w-full px-3">
                    <input
                        onChange={e => setInputValue(e.target.value)}
                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-password"
                        type="name"
                    />
                </div>
            </div>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-col-1 sm:px-auto  p-4 gap-5">
                {
                    data ? data.map(item => [
                        <Card card={item} />
                    ]) : (<div className="w-full h-full"><Spinner className='top-[30vh] left-[30vw]' /></div>)
                }
            </div>
        </div>
    )
}

export default Main