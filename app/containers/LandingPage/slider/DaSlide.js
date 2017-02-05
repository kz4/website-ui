/**
*
* DaSlider
*
*/

import React from 'react';
import styled from 'styled-components';

export const DaSlide = styled.div`
	position: absolute;
	width: 960px;
	height: 100%;
	left: 50%;
	font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
	text-align: left;
	margin-left: -480px;
`;

export const DaSlideH2 = styled.h2`
  color: #fff;
  font-size: 66px;
  width: 50%;
  top: 60px;
  white-space: nowrap;
  z-index: 10;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  font-family: 'Economica', Arial, sans-serif;
  font-weight: 700;
`;

export const DaSlideCoolH2 = styled(DaSlideH2)`
  color: blue;
`;
