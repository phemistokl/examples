import React from 'react';
import { useList, useStore } from 'effector-react';
import { $feedByTag } from './store';

export const FeedByTag = () => {

const data = useStore($feedByTag);

console.log('FEEDUS', data);
return (
  <ul>
    {useList($feedByTag, ({ title, slug }) => (
      <li key={slug}>{title}</li>
    ))}
  </ul>
)};