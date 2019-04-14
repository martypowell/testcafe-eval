import { Selector } from "testcafe";

fixture`My Awesome Page`.page`http://192.168.86.91:8080/`;

test("Assertion for H1", async t => {
  const h1 = Selector("h1");

  await t.expect(h1.innerText).eql("My Awesome Title");
});

test("Assertion for Timeout h2", async t => {
  const h2 = Selector("h2");

  await t.expect(h2.innerText).eql("Super Awesome Timeout Test");
});
