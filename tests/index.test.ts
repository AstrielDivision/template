import { equal } from 'assert'
import * as index from '../src/index'

export function testAdd() {
	equal(1 + 2, 3)
}

export function testIndex() {
  equal(index.world(), 'hello world!')
}
