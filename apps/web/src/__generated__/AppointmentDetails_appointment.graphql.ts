/**
 * @generated SignedSource<<d3e398e52059cd5176cba3c0dfd3160a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppointmentDetails_appointment$data = {
  readonly clientName: string;
  readonly date: string;
  readonly graphicLocation: string;
  readonly hour: string;
  readonly id: string;
  readonly service: string;
  readonly " $fragmentType": "AppointmentDetails_appointment";
};
export type AppointmentDetails_appointment$key = {
  readonly " $data"?: AppointmentDetails_appointment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppointmentDetails_appointment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppointmentDetails_appointment",
  "selections": [
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
      "name": "graphicLocation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Appointment",
  "abstractKey": null
};

(node as any).hash = "f8015d1524de6187680d42816a301c65";

export default node;
