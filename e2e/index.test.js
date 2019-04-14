import { Selector } from "testcafe";

fixture`My Awesome Page`.page`http://192.168.86.91:8080/`;

test("Assertion for H1", async t => {
  const h1 = Selector("h1");

  await t.expect(h1.innerText).eql("My Awesome Title");
});
