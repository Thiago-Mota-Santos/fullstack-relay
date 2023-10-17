/**
 * @generated SignedSource<<e0554ce4006f8248a94ab8cb759ad970>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppointmentList_appointment$data = {
  readonly appointments: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly graphicLocation: string;
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"AppointmentDetails_appointment">;
      } | null;
    } | null> | null;
  };
  readonly " $fragmentType": "AppointmentList_appointment";
};
export type AppointmentList_appointment$key = {
  readonly " $data"?: AppointmentList_appointment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppointmentList_appointment">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "appointments"
];
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "first",
          "cursor": "after"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./AppointmentPaginationQuery.graphql')
    }
  },
  "name": "AppointmentList_appointment",
  "selections": [
    {
      "alias": "appointments",
      "args": null,
      "concreteType": "AppointmentConnection",
      "kind": "LinkedField",
      "name": "__AppointmentList_appointments_connection",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "AppointmentDetails_appointment"
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "d63ade8de3f4f526f664132006d9f5c2";

export default node;
