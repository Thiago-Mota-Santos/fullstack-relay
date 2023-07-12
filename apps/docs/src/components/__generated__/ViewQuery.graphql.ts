/**
 * @generated SignedSource<<2fe58cb301f725c50bbe454efb5b36a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ViewQuery$variables = {};
export type ViewQuery$data = {
  readonly me: {
    readonly id: string;
  } | null;
};
export type ViewQuery = {
  response: ViewQuery$data;
  variables: ViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ViewQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "fa94457b27dfec68b8cc4ea0ed19311b",
    "id": null,
    "metadata": {},
    "name": "ViewQuery",
    "operationKind": "query",
    "text": "query ViewQuery {\n  me {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0566d80ff56ce3cfbec7696e43c9c501";

export default node;
