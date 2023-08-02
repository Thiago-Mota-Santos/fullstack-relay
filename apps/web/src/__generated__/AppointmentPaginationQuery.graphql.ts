/**
 * @generated SignedSource<<4888494b4a34315f3963166539479155>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppointmentPaginationQuery$variables = {
  after?: string | null;
  first?: number | null;
};
export type AppointmentPaginationQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AppointmentList_appointment">;
};
export type AppointmentPaginationQuery = {
  response: AppointmentPaginationQuery$data;
  variables: AppointmentPaginationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": 1,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppointmentPaginationQuery",
    "selections": [
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "AppointmentList_appointment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppointmentPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
                    "name": "graphicLocation",
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
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "AppointmentList_appointments",
        "kind": "LinkedHandle",
        "name": "appointments"
      }
    ]
  },
  "params": {
    "cacheID": "f007bbb0172bc45464d2ca4d8031e950",
    "id": null,
    "metadata": {},
    "name": "AppointmentPaginationQuery",
    "operationKind": "query",
    "text": "query AppointmentPaginationQuery(\n  $after: String\n  $first: Int = 1\n) {\n  ...AppointmentList_appointment_2HEEH6\n}\n\nfragment AppointmentDetails_appointment on Appointment {\n  date\n  hour\n  clientName\n  service\n  graphicLocation\n  id\n}\n\nfragment AppointmentList_appointment_2HEEH6 on Query {\n  appointments(first: $first, after: $after) {\n    edges {\n      node {\n        id\n        graphicLocation\n        ...AppointmentDetails_appointment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d63ade8de3f4f526f664132006d9f5c2";

export default node;
