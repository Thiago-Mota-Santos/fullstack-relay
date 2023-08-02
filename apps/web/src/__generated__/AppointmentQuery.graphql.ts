/**
 * @generated SignedSource<<2812424690b791caa179e061ee423151>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppointmentQuery$variables = {};
export type AppointmentQuery$data = {
  readonly appointments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly clientName: string;
        readonly date: string;
        readonly graphicLocation: string;
        readonly hour: string;
        readonly id: string;
        readonly service: string;
      } | null;
    } | null> | null;
  };
};
export type AppointmentQuery = {
  response: AppointmentQuery$data;
  variables: AppointmentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "AppointmentConnection",
    "kind": "LinkedField",
    "name": "appointments",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AppointmentEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Appointment",
            "kind": "LinkedField",
            "name": "node",
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
                "name": "clientName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "service",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "date",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hour",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "graphicLocation",
                "storageKey": null
              }
            ],
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppointmentQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppointmentQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "710dfe93666a6fe042bf677f103eab2c",
    "id": null,
    "metadata": {},
    "name": "AppointmentQuery",
    "operationKind": "query",
    "text": "query AppointmentQuery {\n  appointments {\n    edges {\n      node {\n        id\n        clientName\n        service\n        date\n        hour\n        graphicLocation\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "be9e8f2962bc370d9a3e4fdd8cdddbc5";

export default node;
