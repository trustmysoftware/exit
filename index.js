import {exit as real_exit} from 'node:process';
import { checkVersion } from './check-version.js';

checkVersion()

export const exit = (value = 1) => {
    real_exit(value);
}