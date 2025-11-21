const { createCanvas } = require("canvas");
const assert = require("assert");

describe("Font", function () {
  describe("#fillText", function () {
    it("should write defined Text in canvas", function () {
      let canvas = createCanvas(300, 300);
      let ctx1 = canvas.getContext("2d");
      ctx1.font = "30px";
      ctx1.fillText("Default", 5, 25);
      let ctx2 = canvas.getContext("2d");
      ctx2.font = '30px "Cinzel"';
      ctx2.fillText("Cinzel", 5, 65);
      let ctx3 = canvas.getContext("2d");
      ctx3.font = "30px";
      ctx3.fillText("Cinzel", 5, 95);
      // console.log(canvas.toDataURL());
      assert.notEqual(canvas.toDataURL(), "");
    });
  });
});
