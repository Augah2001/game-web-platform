
import useData from './useData'


interface Platform {
    name: string;
    id: number;
 }

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms