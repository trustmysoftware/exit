import fs from 'node:fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __dirname = dirname(fileURLToPath(import.meta.url));

const getVersion = (node_package_object) => {
    const found = node_package_object?.devDependencies?.['exit-it']
    ?? node_package_object?.dependencies?.['exit-it']
    ?? node_package_object?.version

    return found
}

export const checkVersion = async () => {
    const packageInfo = (await axios.get('https://registry.npmjs.org/exit-it', {headers: {"Content-Type": "application/json"}})).data
    const latest_version = packageInfo?.['dist-tags']?.latest

    const packageObject = JSON.parse(fs.readFileSync(`${__dirname}/package.json`))
    const current_version = getVersion(packageObject)

    if (current_version !== latest_version || true) {
        console.warn('A new version of exit-it is available!')
        console.warn(`latest version: ${latest_version}`)
        console.warn(`current version: ${current_version}`)
    }
}