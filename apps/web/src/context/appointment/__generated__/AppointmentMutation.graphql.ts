/**
 * @generated SignedSource<<6f64f86f0b1f9402d95d541337f9556c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AppointmentMutation$variables = {
  clientName: string;
  date: string;
  graphicLocation: string;
  hour: string;
  service: string;
};
export type AppointmentMutation$data = {
  readonly appointmentRegisterMutation: {
    readonly appointmentEdge: {
      readonly node: {
        readonly clientName: string;
        readonly date: string;
        readonly graphicLocation: string;
        readonly hour: string;
        readonly service: string;
      } | null;
    } | null;
  } | null;
};
export type AppointmentMutation = {
  response: AppointmentMutation$data;
  variables: AppointmentMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "clientName"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "date"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "graphicLocation"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hour"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "service"
},
v5 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "clientName",
        "variableName": "clientName"
      },
      {
        "kind": "Variable",
        "name": "date",
        "variableName": "date"
      },
      {
        "kind": "Variable",
        "name": "graphicLocation",
        "variableName": "graphicLocation"
      },
      {
        "kind": "Variable",
        "name": "hour",
        "variableName": "hour"
      },
      {
        "kind": "Variable",
        "name": "service",
        "variableName": "service"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "service",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "date",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hour",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "graphicLocation",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppointmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "AppointmentRegisterPayload",
        "kind": "LinkedField",
        "name": "appointmentRegisterMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AppointmentEdge",
            "kind": "LinkedField",
            "name": "appointmentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Appointment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppointmentMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "AppointmentRegisterPayload",
        "kind": "LinkedField",
        "name": "appointmentRegisterMutation",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "AppointmentEdge",
            "kind": "LinkedField",
            "name": "appointmentEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Appointment",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  (v10/*: any*/),
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5c6f49433026c67850765be75b33a0e3",
    "id": null,
    "metadata": {},
    "name": "AppointmentMutation",
    "operationKind": "mutation",
    "text": "mutation AppointmentMutation(\n  $clientName: String!\n  $date: String!\n  $hour: String!\n  $graphicLocation: String!\n  $service: String!\n) {\n  appointmentRegisterMutation(input: {clientName: $clientName, date: $date, hour: $hour, graphicLocation: $graphicLocation, service: $service}) {\n    appointmentEdge {\n      node {\n        clientName\n        service\n        date\n        hour\n        graphicLocation\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c9bea7467873ff125b6dfed410b1bde0";

export default node;
