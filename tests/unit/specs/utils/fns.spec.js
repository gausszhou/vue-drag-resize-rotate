// 编写单元测试
import { expect } from "chai";
import {
  isFunction,
  snapToGrid,
  restrictToBounds,
  rotatedPoint
} from "@/components/vue-drag-resize-rotate/utils/fns";

describe("fns", function() {
  describe("isFunction", function() {
    it("isFunction，只有在输入函数时，才返回true", function() {
      expect(isFunction(true)).to.be.false;
      expect(isFunction(null)).to.be.false;
      expect(isFunction({})).to.be.false;
      expect(isFunction("test")).to.be.false;
      expect(isFunction(123)).to.be.false;
      expect(isFunction(() => {})).to.be.true;
    });
  });

  describe("snapToGrid", function() {
    it("snapToGrid，对齐grid的网格", function() {
      expect(snapToGrid([1, 1], 0, 0)).to.deep.equal([0, 0]);
      expect(snapToGrid([5, 5], 0, 0)).to.deep.equal([0, 0]);
      expect(snapToGrid([1, 1], 1, 1)).to.deep.equal([1, 1]);
      expect(snapToGrid([5, 5], 1, 1)).to.deep.equal([0, 0]);
      expect(snapToGrid([5, 5], 2, 2)).to.deep.equal([0, 0]);
      expect(snapToGrid([5, 5], 3, 3)).to.deep.equal([5, 5]);
      expect(snapToGrid([5, 5], 4, 4)).to.deep.equal([5, 5]);
      expect(snapToGrid([5, 5], 5, 5)).to.deep.equal([5, 5]);
    });
  });

  describe("restrictToBounds", function() {
    it("restrictToBounds，value值应该在[min,max]范围内", function() {
      expect(restrictToBounds(50, 10, 100)).to.deep.equal(50);
      expect(restrictToBounds(50, 60, 100)).to.deep.equal(60);
      expect(restrictToBounds(50, 30, 40)).to.deep.equal(40);
    });
  });

  describe("rotatedPoint", function() {
    it("rotatedPoint，计算精度保持在千分之一之内", function() {
      // 0 1 不旋转
      expect(rotatedPoint(0, 0, 0, 1, 0).x).to.be.within(-0.001, 0.001);
      expect(rotatedPoint(0, 0, 0, 1, 0).y).to.be.within(0.999, 1.001);
      // 0 1 顺时针旋转45
      expect(rotatedPoint(0, 0, 0, 1, -45).x).to.be.within(0.707, 0.7072);
      expect(rotatedPoint(0, 0, 0, 1, -45).y).to.be.within(0.707, 0.7072);
      // 0 1 顺时针旋转90
      expect(rotatedPoint(0, 0, 0, 1, -90).x).to.be.within(0.999, 1.001);
      expect(rotatedPoint(0, 0, 0, 1, -90).y).to.be.within(-0.001, 0.001);
      // 0 1 旋转180
      expect(rotatedPoint(0, 0, 0, 1, 180).x).to.be.within(-0.001, 0.001);
      expect(rotatedPoint(0, 0, 0, 1, 180).y).to.be.within(-1.001, -0.999);
      // 0 1 旋转360
      expect(rotatedPoint(0, 0, 0, 1, 360).x).to.be.within(-0.001, 0.001);
      expect(rotatedPoint(0, 0, 0, 1, 360).y).to.be.within(0.999, 1.001);
    });
  });
});
