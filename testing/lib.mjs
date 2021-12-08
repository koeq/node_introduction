import { add } from "./myLib.mjs";
import assert from "assert";

console.log(`add() Should add two numbers`);
try {
  assert.strictEqual(add(1, 2), 3);
  console.log("PASS");
} catch (e) {
  console.log("FAIL");
  console.error(e);
}
