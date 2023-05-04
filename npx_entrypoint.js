#!/usr/bin/env node

import { exit } from "./index.js";
import { checkVersion } from "./check-version.js";

checkVersion()

console.info('running exit(42)...')
exit(42)