/**
 * @generated SignedSource<<012e8a382901b6c0a95ef4b2d53bab4d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SigninMutation$variables = {
  email: string;
  password: string;
  username: string;
};
export type SigninMutation$data = {
  readonly userRegisterMutation: {
    readonly me: {
      readonly id: string;
      readonly username: string;
    } | null;
    readonly token: string | null;
  } | null;
};
export type SigninMutation = {
  response: SigninMutation$data;
  variables: SigninMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          },
          {
            "kind": "Variable",
            "name": "username",
            "variableName": "username"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UserRegisterPayload",
    "kind": "LinkedField",
    "name": "userRegisterMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "username",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SigninMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "SigninMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "51b6135421d97f918294e04d64803b03",
    "id": null,
    "metadata": {},
    "name": "SigninMutation",
    "operationKind": "mutation",
    "text": "mutation SigninMutation(\n  $username: String!\n  $email: String!\n  $password: String!\n) {\n  userRegisterMutation(input: {username: $username, password: $password, email: $email}) {\n    token\n    me {\n      id\n      username\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c3a3714a7fa7b41549625dde4d7b8b86";

export default node;
