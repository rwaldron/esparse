{

/** async function f() {} **/
"async declaration": {   
    type: "Script",
    statements: [
    
    {   type: "FunctionDeclaration",
        kind: "async",
        
        identifier: 
        {   type: "Identifier",
            value: "f"
        },
        
        params: [],
        
        body: 
        {   type: "FunctionBody",
            statements: []
        }
    }]
},

/** async
function f() {}
**/
"async declaration has newline restriction": {
    type: "Script",
    statements: [
    {   type: "ExpressionStatement",
        expression:
        {   type: "Identifier",
            value: "async"
        }
    },
    {   type: "FunctionDeclaration",
        kind: "",
        identifier:
        {   type: "Identifier",
            value: "f"
        },
        params: [],
        body: 
        {   type: "FunctionBody",
            statements: []
        }
    }]
},

/** (async function f() {}); **/
"async expression": {   
    type: "Script",
    statements: [
    
    {   type: "ExpressionStatement",
        expression:
        {   type: "ParenExpression",
            expression:
            {   type: "FunctionExpression",
                kind: "async",
                identifier: 
                {   type: "Identifier",
                    value: "f"
                },
                params: [],
                body:
                {   type: "FunctionBody",
                    statements: []
                }
            }
        }
    }]
},

/** async function f() { await 0; } **/
"await expression": {
    type: "Script",
    statements: [
    {   type: "FunctionDeclaration",
        kind: "async",
        identifier:
        {   type: "Identifier",
            value: "f"
        },
        params: [],
        body:
        {   type: "FunctionBody",
            statements: [
            {   type: "ExpressionStatement",
                expression:
                {   type: "UnaryExpression",
                    operator: "await",
                    expression:
                    {   type: "NumberLiteral",
                        value: 0
                    }
                }
            }]
        }
    }]
},


/** async function f() { (await 0); } **/
"await expression inside of paren": {
    type: "Script",
    statements: [
    {   type: "FunctionDeclaration",
        kind: "async",
        identifier:
        {   type: "Identifier",
            value: "f"
        },
        params: [],
        body:
        {   type: "FunctionBody",
            statements: [
            {   type: "ExpressionStatement",
                expression:
                {   type: "ParenExpression",
                    expression:
                    {   type: "UnaryExpression",
                        operator: "await",
                        expression: 
                        {   type: "NumberLiteral",
                            value: 0
                        }
                    }
                }
            }]
        }
    }]
},


/** async function f() { await 
0; } **/
"empty await expression with newline": {
    type: "Script",
    statements: [
    {   type: "FunctionDeclaration",
        kind: "async",
        identifier:
        {   type: "Identifier",
            value: "f"
        },
        params: [],
        body:
        {   type: "FunctionBody",
            statements: [
            {   type: "ExpressionStatement",
                expression:
                {   type: "UnaryExpression",
                    operator: "await",
                    expression: 
                    {   type: "NumberLiteral",
                        value: 0
                    }
                }
            }]
        }
    }]
},

/** await 0; **/
"await not allowed outside of async": {},

/** async function f() { await } **/
"empty await not allowed": {},

/** ({ async f() {} }); **/
"async object methods": {
    type: "Script",
    statements: [
    {   type: "ExpressionStatement",
        expression:
        {   type: "ParenExpression",
            expression:
            {   type: "ObjectLiteral",
                properties: [
                {   type: "MethodDefinition",
                    kind: "async",
                    name:
                    {   type: "Identifier",
                        value: "f"
                    },
                    params: [],
                    body: 
                    {   type: "FunctionBody",
                        statements: []
                    }
                }]
            }
        }
    }]
},

/** async x => { await 0 } **/
"async arrows with function body": 
{   type: "Script",
    statements: [
    
    {   type: "ExpressionStatement",
        expression:
        
        {   type: "ArrowFunction",
            kind: "async",
            params: [
            {   type: "FormalParameter",
                pattern:
                {   type: "Identifier",
                    value: "x"
                },
                initializer: null
            }],
            
            body: 
            {   type: "FunctionBody",
                statements: [
                    
                {   type: "ExpressionStatement",
                    expression:
                    {   type: "UnaryExpression",
                        operator: "await",
                        expression: 
                        {   type: "NumberLiteral",
                            value: 0
                        }
                    }
                }]
            }
        }
    }]
},

/** async x => await 0 **/
"async arrows with expression body": 
{   type: "Script",
    statements: [
    
    {   type: "ExpressionStatement",
        expression:
        
        {   type: "ArrowFunction",
            kind: "async",
            params: [
            {   type: "FormalParameter",
                pattern:
                {   type: "Identifier",
                    value: "x"
                },
                initializer: null
            }],
            
            body: 
            {   type: "UnaryExpression",
                operator: "await",
                expression: 
                {   type: "NumberLiteral",
                    value: 0
                }
            }
        }
    }]
},

/** async x => f(await g) **/
"async arrows with expression body and nested await": 
{   type: "Script",
    statements: [
    
    {   type: "ExpressionStatement",
        expression:
        
        {   type: "ArrowFunction",
            kind: "async",
            params: [
            {   type: "FormalParameter",
                pattern:
                {   type: "Identifier",
                    value: "x"
                },
                initializer: null
            }],
            
            body: 
            {   type: "CallExpression",
                callee:
                {   type: "Identifier",
                    value: "f"
                },
                arguments: [
                {   type: "UnaryExpression",
                    operator: "await",
                    expression:
                    {   type: "Identifier",
                        value: "g"
                    }
                }]
            }
        }
    }]
},

/** async (x) => null **/
"async arrow with parenthesized argument list": 
{   type: "Script",
    statements: [
    
    {   type: "ExpressionStatement",
        expression:
        
        {   type: "ArrowFunction",
            kind: "async",
            params: [
            {   type: "FormalParameter",
                pattern:
                {   type: "Identifier",
                    value: "x"
                },
                initializer: null
            }],
            
            body: 
            {   type: "NullLiteral"
            }
        }
    }]
},

/** x => await null **/
"await not allowed in a non-async arrow": {},

/** async (x, ...args, y) => null **/
"rest parameter can only appear as the last formal parameter": {},

/** async ()
=> 0 **/
'newline restriction between right paren and arrow': {},


};