import { expect } from "chai";
import isBalanced from './parenthesesBalanced';

describe("parenthesesBalanced function", () => {
  it('should return true when parantheses are balanced', () => {
    expect(isBalanced('()')).to.equal(true);
    expect(isBalanced('(())()')).to.equal(true);
  });

  it('should return true when parantheses are not balanced', () => {
    expect(isBalanced('())')).to.equal(false);
    expect(isBalanced('((())()')).to.equal(false);
  });

  it('should return true when parantheses are balanced given wildcard', () => {
    expect(isBalanced('(*)')).to.equal(true);
    expect(isBalanced('(*')).to.equal(true);
    expect(isBalanced('(())()*')).to.equal(true);

    expect(isBalanced(')*(*')).to.equal(false);
    expect(isBalanced(')*')).to.equal(false);
  });
});