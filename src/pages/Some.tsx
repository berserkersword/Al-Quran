import { Surahs } from '../Model/Model'
import { useParams } from 'react-router-dom';
import { AudioPlayerProvider } from 'react-use-audio-player';
import { AudioPlayer } from '../components/AudioPlayer';
const Some = (prop: { Sura: Surahs | undefined }) => {
    const id = useParams();
    const data = prop.Sura?.data.surahs[Number(id.id) - 1];
    console.log(data)
    return (
        <div className='w-full h-[100vh] flex'>
            <div className='w-1/2 justify-center px-6  sticky top-0'>
                <h1 className='text-[4rem] text-gray-800 m-2 text-center mt-[30%]'>
                    {
                        data?.englishName
                    }
                </h1>
                <h2 className='text-[2.5rem] text-gray-700 m-2 text-center'>
                    {
                        data?.name
                    }
                </h2>
            </div>
            <div className='w-1/2 overflow-scroll p-6 text-lg'>
                {
                    data?.ayahs.map(item => {
                        return (
                            <div>
                                <h2 className='text-gray-800'>
                                    {item.text}
                                </h2>
                                <AudioPlayerProvider>
                                    <AudioPlayer src={item.audio} />
                                </AudioPlayerProvider>
                            </div>
                        )
                    })
                })
            </div>
        </div>
    )
}

export default Some;