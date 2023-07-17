/**
 * @generated SignedSource<<3e29f6122d97e39efba9a31ef54187c5>>
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
};
export type SigninMutation$data = {
  readonly userLoginMutation: {
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
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
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "UserLoginMutationPayload",
    "kind": "LinkedField",
    "name": "userLoginMutation",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SigninMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SigninMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "51e34b9f18b6c32aa513748f762fd06b",
    "id": null,
    "metadata": {},
    "name": "SigninMutation",
    "operationKind": "mutation",
    "text": "mutation SigninMutation(\n  $email: String!\n  $password: String!\n) {\n  userLoginMutation(input: {password: $password, email: $email}) {\n    token\n    me {\n      id\n      username\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "da9c62145bae7b4a8d654f96e36a3647";

export default node;
