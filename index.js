import {exit as real_exit} from 'node:process';
import { checkVersion } from './check-version.mjs';

checkVersion()

/**
 * A more graceful way to exit, the delay was mainly added to allow the
 * built-in version checker some time to check if you have an outdated version
 * of exit-it in the event that your program is (too) quick to complete.
 * 
 * The value of having a nice up-to-date system cannot be overstated! (even
 * if this is at the detriment of user experience and code beauty). 
 * If your program actually does something useful, and takes some milliseconds
 * to complete normally, then you can optimise your call to exit() by
 * setting the delay_ms to zero!
 * 
 * @param {number} exit_code 
 * @param {number} delay_ms 
 */
export const exit = async (exit_code = 1, delay_ms = 1000) => {
    await (() => {
        return new Promise((resolve) => {
            setTimeout(resolve, delay_ms)
        })
    })()
    real_exit(exit_code)
}