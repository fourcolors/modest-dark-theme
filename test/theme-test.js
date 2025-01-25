// Comment to test comment highlighting
const CONSTANT = "Test string literal";

/**
 * Block comment to test multi-line comments
 * @param {string} name - Test parameter
 */
function testFunction(name) {
    let variable = 42;
    return `Hello ${name}!`;
}

// Keywords and control flow
class TestClass {
    constructor() {
        this.property = true;
    }

    async methodName() {
        try {
            await Promise.resolve();
        } catch (error) {
            console.error(error);
        }
    }
}

// Testing different types
const number = 123;
const boolean = false;
const array = [1, 2, 3];
const object = { key: "value" };

// Regular expressions
const regex = /test-pattern/g;
