/**
 * @generated SignedSource<<eafe28a9af2276fee40a5062f856811b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AppointmentEditMutation$variables = {
  appointmentId: string;
  clientName: string;
  date: string;
  graphicLocation: string;
  hour: string;
  service: string;
};
export type AppointmentEditMutation$data = {
  readonly appointmentUpdateMutation: {
    readonly appointmentEdge: {
      readonly node: {
        readonly clientName: string;
        readonly date: string;
        readonly graphicLocation: string;
        readonly hour: string;
        readonly id: string;
        readonly service: string;
      } | null;
    } | null;
  } | null;
};
export type AppointmentEditMutation = {
  response: AppointmentEditMutation$data;
  variables: AppointmentEditMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "appointmentId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "clientName"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "date"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "graphicLocation"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hour"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "service"
},
v6 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "appointmentId",
            "variableName": "appointmentId"
          },
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
    "concreteType": "AppointmentUpdatePayload",
    "kind": "LinkedField",
    "name": "appointmentUpdateMutation",
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "service",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppointmentEditMutation",
    "selections": (v6/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppointmentEditMutation",
    "selections": (v6/*: any*/)
  },
  "params": {
    "cacheID": "a0880e11cffe8db335e109804211d387",
    "id": null,
    "metadata": {},
    "name": "AppointmentEditMutation",
    "operationKind": "mutation",
    "text": "mutation AppointmentEditMutation(\n  $appointmentId: String!\n  $clientName: String!\n  $date: String!\n  $hour: String!\n  $graphicLocation: String!\n  $service: String!\n) {\n  appointmentUpdateMutation(input: {appointmentId: $appointmentId, clientName: $clientName, date: $date, hour: $hour, graphicLocation: $graphicLocation, service: $service}) {\n    appointmentEdge {\n      node {\n        id\n        clientName\n        date\n        hour\n        graphicLocation\n        service\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9762913e4caf0699b7d761adbd4d4d65";

export default node;
