import { CITY } from "constants/CONST";
import { constants } from "zlib";
const apikey = '61f5366364cc9246944706518c58b8abd1f31fb7';

export default {
  'GET_STATION_PER_CITY': `https://api.jcdecaux.com/vls/v1/stations?contract=${CITY}&apiKey=${apikey}`,
}