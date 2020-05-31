import { post, get} from '@/utils/request';
import api from './api';

export const List = () => get(api.list)
export const Add = (data) => post(api.add, data)
export const Delet = (data) => post(api.delete, data)
export const Update = (data) => post(api.update, data)


