'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { getAllFromLocalStorage, rmvAllStorageItem } from '../lib/builderData';
import { fetchPcPartsWithInClause } from '../lib/data';
import './builders.css';

const Builder = () => {
  const parts = [
    { name: 'CPU', path: '/products/cpu' },
    { name: 'Motherboard', path: '/products/motherboard' },
    { name: 'Memory', path: '/products/memory' },
    { name: 'Storage', path: '/products/storage' },
    { name: 'Videocard', path: '/products/videocard' },
    { name: 'Power Supply', path: '/products/power-supply' },
    { name: 'Case', path: '/products/case' },
    { name: 'Monitor', path: '/products/monitor' },
    { name: 'Cooler', path: '/products/cooler' },
    { name: 'HDD', path: '/products/hdd' },
  ];

  // const ids = getAllFromLocalStorage();
  // const pcParts = await fetchPcPartsWithInClause(ids);
  // console.log(ids);

  const peripherals = ['Keyboard', 'Mouse', 'Headphones', 'Speakers', 'Webcam'];
  const builds = ['Build 1', 'Build 2', 'Build 3'];

  return (
    <div id="builder-container">
      <header id="header">
        <h1>Choose Your Parts</h1>
      </header>
      <div id="tab-container">
        {builds.map((build, index) => (
          <button
            key={index}
            className="tab-button"
            onClick={rmvAllStorageItem}
          >
            {build}
          </button>
        ))}
      </div>
      <table id="parts-table">
        <tbody>
          {parts.map((part) => (
            <tr key={part.name}>
              <td>{part.name}</td>
              <td>
                <Link href={part.path}>
                  <button className="select-button">{`+ choose a ${part.name}`}</button>
                </Link>
              </td>
            </tr>
          ))}
          <tr key="peripherals">
            <td>Peripherals</td>
            <td id="peripherals-row">
              {peripherals.map((item) => (
                <span key={item} className="peripheral-item">
                  {item}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
      <div id="action-buttons">
        <button id="save-button">Save</button>
        <button id="share-button">Share</button>
        <button id="print-button">Print</button>
      </div>
    </div>
  );
};

export default Builder;
