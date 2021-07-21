import {upper} from './utils/strings';
import {sum} from './utils/math';
// @ts-ignore
import * as instana from '@instana/collector';

instana();

const res = upper(`The sum of 1 + 8 is ${sum(1, 9)}`);
console.log(res);