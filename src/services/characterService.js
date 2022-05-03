import {axiosService} from "./axiosService";
import {urls} from "../configs";

const characterService = {
    getCharacterList: (characters) => {
        const ids = characters.map(item => item.split("/").slice(-1)[0]).join(",");
        return axiosService.get(`${urls.character}/${ids}`)
    }
};

export {
    characterService
}