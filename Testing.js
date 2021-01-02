/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global expect */

/**const sum = require('./script');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});**/
import { add } from './script'
function getUserDisplayName(){
  const user = add.getUser(c);
  return `${user.LastName}, ${user.FirstName}`;
}

