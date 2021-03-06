/* eslint-env mocha, node */

'use strict';

const testCases =
[
    {
        title: 'OK',
        code:
        `
class A
{
    constructor(a: any)
    { }

    a(): void
    { }
}

class B
{
    constructor(b: any)
    { }

    b(): void
    { }
}

void
class extends classes(A, B)
{
    constructor()
    {
        super();
    }
};
        `,
    },
    {
        title: 'super constructor argument referencing indirect superclass',
        code:
        `
class A
{ }

class B extends A
{
    b(): void
    { }
}

void
class extends classes(B)
{
    constructor()
    {
        super({ super: A });
    }
};
        `,
        expectedMessage:
        'Argument of type \'{ super: typeof A; }\' is not assignable to parameter of type \'[]\'.' +
        '\n  Object literal may only specify known properties, and \'super\' does not exist in ' +
        'type \'[]\'.',
    },
    {
        title: 'super.class in nonstatic context with indirect superclass',
        code:
        `
class A
{ }

class B extends A
{
    b(): void
    { }
}

void
class extends classes(B)
{
    c()
    {
        super.class(A);
    }
};
        `,
        expectedMessage:
        'Argument of type \'typeof A\' is not assignable to parameter of type \'typeof B\'.\n  ' +
        'Property \'b\' is missing in type \'A\' but required in type \'B\'.',
    },
    {
        title: 'super.class in static context with indirect superclass',
        code:
        `
class A
{ }

class B extends A
{
    static b(): void
    { }
}

void
class extends classes(B)
{
    static c()
    {
        super.class(A);
    }
};
        `,
        expectedMessage:
        'Argument of type \'typeof A\' is not assignable to parameter of type \'typeof B\'.\n  ' +
        'Property \'b\' is missing in type \'typeof A\' but required in type \'typeof B\'.',
    },
    {
        title: 'classes without arguments',
        code: 'classes();',
        expectedMessage: 'Expected 1-10 arguments, but got 0.',
    },
    {
        title: 'classes with an undefined argument',
        code: 'classes(undefined);',
        expectedMessage:
        'Argument of type \'undefined\' is not assignable to parameter of type ' +
        '\'SuperConstructor\'.',
    },
    {
        title: 'classes with a null argument',
        code: 'classes(null);',
        expectedMessage:
        'Argument of type \'null\' is not assignable to parameter of type \'SuperConstructor\'.',
    },
];

const actualize =
() =>
{
    const
    {
        createCompilerHost,
        createProgram,
        createSourceFile,
        flattenDiagnosticMessageText,
        getPreEmitDiagnostics,
    } =
    require('typescript');

    const fileNames = [];
    testCases.forEach
    (
        (testCase, index) =>
        {
            testCase.actualMessages = [];
            fileNames.push(`:${index}`);
        },
    );
    const sourceFiles = [];
    const host = createCompilerHost({ });
    {
        const { getSourceFile } = host;
        host.getSourceFile =
        (fileName, languageVersion, onError) =>
        {
            let sourceFile;
            const match = /(?<=^:)\d+(?=\.ts$)/.exec(fileName);
            if (match)
            {
                const testCase = testCases[match[0]];
                const sourceText = `{\n${testCase.code}\n}`;
                sourceFile = createSourceFile(fileName, sourceText);
                sourceFile.testCase = testCase;
                sourceFiles.push(sourceFile);
            }
            else
                sourceFile = getSourceFile(fileName, languageVersion, onError);
            return sourceFile;
        };
    }
    const path = require.resolve('..');
    const program = createProgram(fileNames, { noEmit: true, strict: true, types: [path] }, host);
    for (const sourceFile of sourceFiles)
    {
        const { actualMessages } = sourceFile.testCase;
        getPreEmitDiagnostics(program, sourceFile)
        .forEach
        (
            ({ messageText }) =>
            {
                const message = flattenDiagnosticMessageText(messageText, '\n');
                actualMessages.push(message);
            },
        );
    }
};

describe
(
    'TypeScript definitions',
    () =>
    {
        const assert = require('assert');

        before(actualize);

        testCases.forEach
        (
            testCase =>
            {
                const { expectedMessage } = testCase;
                const expectedMessages = expectedMessage === undefined ? [] : [expectedMessage];
                it
                (testCase.title, () => assert.deepEqual(testCase.actualMessages, expectedMessages));
            },
        );
    },
);
