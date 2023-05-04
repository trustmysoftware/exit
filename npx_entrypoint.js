#!/usr/bin/env node

import { exit } from "./index.js";
import { checkVersion } from "./check-version.mjs";

checkVersion()

console.info('running exit(42)...')
exit(42)