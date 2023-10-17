/**
 * @generated SignedSource<<784485b9cfcd81c4d19855bb4302397f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AppointmentDeleteInput = {
  AppointmentId: string;
  clientMutationId?: string | null;
};
export type AppointmentDeleteMutation$variables = {
  input: AppointmentDeleteInput;
};
export type AppointmentDeleteMutation$data = {
  readonly AppointmentDelete: {
    readonly appointmentId: string | null;
    readonly success: string | null;
  } | null;
};
export type AppointmentDeleteMutation = {
  response: AppointmentDeleteMutation$data;
  variables: AppointmentDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AppointmentDeletePayload",
    "kind": "LinkedField",
    "name": "AppointmentDelete",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "appointmentId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "AppointmentDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppointmentDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "85a3ec04d009f372419e1b40f7178dcd",
    "id": null,
    "metadata": {},
    "name": "AppointmentDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation AppointmentDeleteMutation(\n  $input: AppointmentDeleteInput!\n) {\n  AppointmentDelete(input: $input) {\n    appointmentId\n    success\n  }\n}\n"
  }
};
})();

(node as any).hash = "7aa3033f88f5c8b140c024b0ec7ac387";

export default node;
