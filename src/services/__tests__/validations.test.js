const { isEmpty } = require("../validations");
const { isValidGamerTag } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("validate gamer tag", () => {
    it("should return false if length is less than 8 characters", () => {
        expect(isValidGamerTag("abcdefg")).toBe(false);
    });
});



