import {exit as real_exit} from 'node:process';

export const exit = (value = 1) => {
    real_exit(value);
}