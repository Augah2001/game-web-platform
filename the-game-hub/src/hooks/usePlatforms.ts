import useData, { platform } from "./useData";

export interface Platform {
  name: string;
  id: string;
  slug: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
