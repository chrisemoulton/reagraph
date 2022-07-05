import React from 'react';
import { GraphCanvas } from '../../src';
import { simpleEdges, simpleNodes } from '../assets/demo';

export default {
  title: 'Demos/Labels',
  component: GraphCanvas
};

export const All = () => (
  <GraphCanvas labelType="all" nodes={simpleNodes} edges={simpleEdges} />
);

export const LongLabels = () => (
  <GraphCanvas labelType="all" nodes={[
    {
      id: '1',
      label: 'Department of Defense Logistics and Operations',
    },
    {
      id: '2',
      label: 'The Security Operations of the Cyber Defense System for the United States of America',
    }
  ]} edges={[
  {
    id: '1-2',
    source: '1',
    target: '2',
    label: 'The Security Operations of the Cyber Defense System for the United States of America'
  }
  ]} />
);

export const NodesOnly = () => (
  <GraphCanvas labelType="nodes" nodes={simpleNodes} edges={simpleEdges} />
);

export const EdgesOnly = () => (
  <GraphCanvas labelType="edges" nodes={simpleNodes} edges={simpleEdges} />
);

export const Automatic = () => (
  <GraphCanvas labelType="auto" nodes={simpleNodes} edges={simpleEdges} />
);
